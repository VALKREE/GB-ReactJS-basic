import React, {useState} from 'react';
import './index.sass';

export const Form = ({onSendMessage}) => {
	const [value, setValue] = useState('');
	const handlerChange = (e) => {
		setValue(e.target.value);
	}
	const handlerSubmit = (e) => {
		e.preventDefault();
		onSendMessage({
			id: 1,
			author: "User1",
			text: value,
		})
		setValue('');
	}
	return (
		<form 
			className="form" 
			onSubmit={handlerSubmit}
		>
			<input 
				type="text"
				className="form_text"
				value={value}
				onChange={handlerChange}
			/>
			<input
				type="submit"
				className="form_submit"
			/>
		</form>
	)
}