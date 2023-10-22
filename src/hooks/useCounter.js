import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);
  const [margin, setMargin] = useState(1);
  const [isEditing, setIsEditing] = useState(false);

  const increment = () => {
    setCount(count + margin);
  };

  const decrement = () => {
    setCount(count - margin);
  };

  const reset = () => {
    setCount(0);
    setMargin(1);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  function setValue(e) {
    e.preventDefault();
    setCount(count);
    setIsEditing(false);
  }

  return {
    count,
    setCount,
    margin,
    setMargin,
    isEditing,
    toggleEdit,
    increment,
    decrement,
    reset,
    setValue,
  };
}

export default useCounter;
