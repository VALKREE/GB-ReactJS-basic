import React from 'react';
import { useCallback } from 'react';
import './index.sass';
import {Message} from '../Message'

export const MessageList = ({messages}) => {
	const renderMessage = useCallback((message) => (
		<Message 
			author={message.author}
			text={message.text}
			key={message.id}
		/>
	), []);
	return messages.map(renderMessage);
}
