import React from 'react';
import './index.sass';
import { List,ListItem,ListItemText,withStyles } from "@material-ui/core"

export const Chat = ({ chatName, chatDate, chatLastMessage, chatCountLastMessage}) => (
	<List className="chat">
		<ListItemText
			primary={chatName}
			secondary={chatLastMessage}
		>
		</ListItemText>
	</List>
);