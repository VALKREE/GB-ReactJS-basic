import React from 'react';
import './index.sass';

export const Chat = ({chatId, chatName, chatDate, chatLastMessage, chatCountLastMessage}) => (
	<div className="chat">
		<div className="chat_heading" key={chatId}>
			<h3 className="chat_heading-chatName">{chatName}</h3>
			<p className="chat_heading-chatDate">{chatDate}</p>
		</div>
		<div className="chat_info">
			<p className="chat_info-chatLastMessage">{chatLastMessage}</p>
			<p className="chat_info-chatCountLastMessage">{chatCountLastMessage}</p>
		</div>
	</div>
);