import { useState, useCallback, useEffect } from 'react';

export interface UseAsyncOptions<A extends any[] = any[]> {
  /**
   * Whether to execute the function immediately when the component mounts.
   * @default false
   */
  immediate?: boolean; 
  
  /**
   * The arguments to pass to the function if immediate is true.
   * Required if your function expects arguments and immediate is true.
   */
  initialArgs?: A;
}

export interface UseAsyncReturnType<T, A extends any[]> {
  loading: boolean;
  error: Error | null;
  value: T | null;
  /**
   * The function to trigger the async operation manually.
   */
  execute: (...args: A) => Promise<T>; 
}

export function useAsync<T, A extends any[] = any[]>(
  fn: (...args: A) => Promise<T>,
  options: UseAsyncOptions<A> = {}
): UseAsyncReturnType<T, A> {
  const { immediate = false, initialArgs } = options;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [value, setValue] = useState<T | null>(null);

  const execute = useCallback(async (...args: A) => {
    setLoading(true);
    setError(null);
    setValue(null);
    try {
      const res = await fn(...args);
      setValue(res);
      return res;
    } catch (err) {
      const errObj = err instanceof Error ? err : new Error(String(err));
      setError(errObj);
      throw errObj;
    } finally {
      setLoading(false);
    }
  }, [fn]);

  useEffect(() => {
    if (immediate) {
      execute(...(initialArgs || [] as unknown as A));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [immediate, execute]);

  return { loading, error, value, execute };
}