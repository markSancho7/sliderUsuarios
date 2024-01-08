const User = props => {
	return (
		<div>
			<img src={props.profileImage} alt='' />
			<h3>{props.title}</h3>
			<h3>{props.name}</h3>
			<h4>{props.username}</h4>
			<h4>{props.email}</h4>
		</div>
	);
};

export default User;
