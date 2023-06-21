import { useState, useEffect } from "react";
import { searchUser } from "../../services/api";


export interface ResultRespone {
    _id: string
    name: string
    email: string
    email_verified: any
    image: string
}


const useDebounce = function (value: string, delay: number = 300) {
    const [debouncedValue, setDebouncedValue] = useState<ResultRespone[]>([]);

    async function ExecuteTask() {
        try {
            let result = await searchUser(value);
            setDebouncedValue(result.others);
        } catch (error) {

        }
    }

    useEffect(() => {
        const handler = setTimeout(() => {
            ExecuteTask();
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;

};



export default useDebounce;
