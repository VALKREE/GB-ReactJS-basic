import React from 'react';
import './index.sass';

export const Message = ({author,text}) => (
	<div className="message">
		<p className="message_author">{author}</p>
		<p className="message_text">{text}</p>
	</div>
);