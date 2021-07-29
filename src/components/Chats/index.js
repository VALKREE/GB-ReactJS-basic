import './index.sass'
import React from 'react';
import { useCallback } from 'react';
import {Chat} from '../Chat'


export const Chats = ({chats}) => {
	const renderChat = useCallback((chat) => (
		<Chat 
			chatId = {chat.chatId}
			chatName = {chat.chatName}
			chatDate = {chat.chatDate}
			chatLastMessage = {chat.chatLastMessage}
			chatCountLastMessage = {chat.chatCountLastMessage}
		/>
	), []);
	return chats.map(renderChat);
}