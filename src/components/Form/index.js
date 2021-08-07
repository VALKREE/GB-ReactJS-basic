import React, { 
  useState, 
  useRef, 
  useEffect 
} from 'react';
import { AUTHORS } from '../../constants';
import {
  TextField,
} from '@material-ui/core';
export const Form = ({ onSendMessage }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onSendMessage({
      author: AUTHORS.human,
      id: Date.now(),
      text: value,
    });
    setValue('');
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <span class="material-icons-outlined" />
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" value={value} onChange={handleChange} autoFocus />
        <input type="submit"/>
      </form>
    </>
  )
}