import { useEffect, useState } from "react";

interface FetchStates<T> {
    data: T | null;
    loading: boolean;
    error: string | null
}

export function useFetch<T>(url:string): FetchStates<T>{
    const [state, setState] = useState<FetchStates<T>>({
        data: null,
        loading: true,
        error: null
    })

    // useEffect to make fetch request

    return state
}