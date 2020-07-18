// write your custom hook here to control your checkout form
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useForm = (initialValue, callback) => {
  const [values, setValues] = useLocalStorage("form-data", initialValue);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callback();
  };

  return [values, handleChanges, handleSubmit];
};
