import { useState, useCallback } from "react";

export const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);
  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }, []);
  const handleReset = useCallback(() => {
    setForm(initialValue);
  }, [initialValue]);
  return { form, handleChange, handleReset };
};
