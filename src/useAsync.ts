import { useState, useCallback, useEffect } from 'react';

export interface UseAsyncReturnType<T, A extends any[]> {
    loading: boolean;
    error: Error | null;
    value: T | null;
    run: (...args: A) => Promise<T>;
    trigger: boolean;
}

export default function useAsync<T, A extends any[] = any[]>(
    fn: (...args: A) => Promise<T>,
    trigger = false,
    initialArgs?: A // 1. Accept initial arguments here
): UseAsyncReturnType<T, A> {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [value, setValue] = useState<T | null>(null);

    const run = useCallback(async (...args: A) => {
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
        if (trigger) {
           
            run(...(initialArgs || [] as unknown as A));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger, run]); 

    return { trigger, loading, error, value, run };
}