import React, { useState, useRef, useEffect } from 'react';
import { AUTHORS } from '../../constants';

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  form:{
    position: "absolute",
    bottom: "0",
    left: "0",
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem",
    width: "100%",
  },
  entryField:{
    width: "100%",
    maxWidth: "24rem",
    height: "20px",
    padding: "1rem",
  },
  submit:{
    padding: "1rem",
    height: "100%",
    maxHeight: "60px",
  },
});


export const Form = ({ onSendMessage }) => {
  const classes = useStyles();
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
    <form onSubmit={handleSubmit} className={classes.form}>
      <input ref={inputRef} type="text" value={value} onChange={handleChange} className={classes.entryField}/>
      <input type="submit" className={classes.submit}/>
    </form>
  )
}