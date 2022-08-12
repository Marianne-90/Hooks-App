import { useState } from "react";

export const useForm = (initialForm = {}) =>{

const [formState, setFormState] = useState(initialForm)

  /* en un futuro checar react-hook-form*/

  const onInputChange = ({ target }) => {

    const { name, value } = target;
    
    setFormState({ ...formState, [name]: value })
  };

  const onResetForm = () => {

    setFormState(initialForm)
    
  };

  
  return {
    formState,
    setFormState,
    onInputChange,
    onResetForm
  }
  
}