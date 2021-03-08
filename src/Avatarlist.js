import React from 'react';
import reactDOM from 'react-dom';


const Avatarlist = (props) =>{
	return(
		<div className="avatar_style ma4 pa4 bg-light-purple dib grow shadow-4"> 
				<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
				<h1 className=""> {props.name} </h1>		
				<p>{props.work}</p>
		</div>
		)
}
export default Avatarlist;