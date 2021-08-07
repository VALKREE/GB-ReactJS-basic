import './index.sass'
import React from 'react';
import { useCallback } from 'react';
import {useParams} from "react-router-dom";
import {Chat} from '../Chat'
export const Chats = ({chats}) => {
	const { chatId } = useParams();

	
	const renderChat = useCallback((chat) => (
		<Chat 
			chatId = {chat.chatId}
			key = {chat.chatId}
			chatName = {chat.chatName}
			chatDate = {chat.chatDate}
			chatLastMessage = {chat.chatLastMessage}
			chatCountLastMessage = {chat.chatCountLastMessage}
		/>
	), []);
	return chats.map(renderChat);
}