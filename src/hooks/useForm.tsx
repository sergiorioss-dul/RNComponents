import { useState } from 'react';

export const useForm = <T extends object>( initState: T ) => {

    const [form, setForm] = useState(initState);
    
    const onChange = (value: string | boolean, field: keyof typeof form) => {
        setForm({
            ...form,
            [field] : value
        });
    }

    return {
        ...form,
        onChange,
        form
    }
}
