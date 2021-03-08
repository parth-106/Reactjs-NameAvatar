import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./Avatar.css";
import  Avatarlist from './Avatarlist';
import 'tachyons';

// const Avatar = (props) =>{
class Avatar extends Component{

	constructor(){
		super();
		this.state = {
			name: "Welcome To Avatar World"
		}
	}

	namechange(){
		this.setState({
			name: "Parth Patel"
		})
	}
	// map(callback means [=>](currentvlaue, index, array) argument);
	render(){

		const avatarlistarray = [
			{
				id:1,
				name:"Parth",
				work:"Web Developer"
			},
			{
				id:2,
				name:"Mihir",
				work:"CEO"
			},
			{
				id:3,
				name:"Vijay",
				work:"Assistance"
			},
			{
				id:4,
				name:"Rita",
				work:"Home Minister"
			},
			{
				id:5,
				name:"Ankit",
				work:"Superviser"
			},
			{
				id:6,
				name:"Ghanshyam",
				work:"Superviser-2"
			},
			{
				id:7,
				name:"Kinjal",
				work:"Extra Work"
			},
			{
				id:8,
				name:"Versha",
				work:"Timepass"
			}
		]

		const avatarcard = avatarlistarray.map( (avatarcard ,idd) =>{
			return <Avatarlist key={idd} id={avatarlistarray[idd].id} name={avatarlistarray[idd].name} work={avatarlistarray[idd].work}/>
		})

		return (
			<div className=" mainpage tc">
				<h1 className="tc"> {this.state.name}</h1>
					{avatarcard}
				<button onClick={ () => this.namechange() }> Suscribe  </button>
			</div>
		)
	}
}

// 	const avatarlistarray = [
// 		{
// 			id:1,
// 			name:"Parth",
// 			work:"Web Developer"
// 		},
// 		{
// 			id:2,
// 			name:"Mihir",
// 			work:"CEO"
// 		},
// 		{
// 			id:3,
// 			name:"Vijay",
// 			work:"Assistance"
// 		},
// 		{
// 			id:4,
// 			name:"Rita",
// 			work:"Home Minister"
// 		},
// 	]
// 	// map(callback means [=>](currentvlaue, index, array) argument);
// 	const avatarcard = avatarlistarray.map( (avatarcard ,idd) =>{
// 		return <Avatarlist id={avatarlistarray[idd].id} name={avatarlistarray[idd].name} work={avatarlistarray[idd].work}/>
// 	});
// 	return (
// 			<div className=" mainpage tc">
// 				<h1 className="tc">Welcome To Avatar World</h1>
// 					{avatarcard}
// 				<button> Suscribe  </button>
// 			</div>
// 		);
// }

export default Avatar;


/*
state is managed within the components.
state can be canged
useStack Hook - funcrional components.
this.state - class components.
*/

/*
props get passed to the components
props are immutable (Cannot be changed/modify)
props - functional components
this.props - class Components
*/