import { useState } from "react";

export const useInput = (defaultValue = "") => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (e) => {
        setValue(e.taget.value);
    };

    return{
        value,
        handleChange,
    }
}