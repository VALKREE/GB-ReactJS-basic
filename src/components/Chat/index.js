import React from 'react';
import './index.sass';
import { List,ListItem,ListItemText,withStyles,makeStyles  } from "@material-ui/core"

export const Chat = ({ chatName, chatDate, chatLastMessage, chatCountLastMessage}) => {
	const useStyles = makeStyles({
	  root: {
	    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
	    border: 0,
	    borderRadius: 3,
	    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	    color: 'white',
	    height: 48,
	    padding: '0 30px',
	  },
	});
	const classes = useStyles();
	return(
		<List className="chat">
			<ListItemText
				primary={chatName}
				secondary={chatLastMessage}
			>
			</ListItemText>
		</List>
	)
};