import './Message.sass'

export const Message = (props) => {
	return(
		<p className="message-text">{props.name}</p>
	);
}