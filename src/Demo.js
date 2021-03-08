import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

//State Using functional base Architecture
const Demo = (props) =>{
	return <div className="maindiv_style">
		<h1>Hello {props.name}, {props.name1}, {props.name2}, {props.name3}, {props.name4} {props.surname}.</h1>
		<p> Welcome to my first Component :) </p>
		</div>
}


///Using class using Css and Vales
//To create a components base Architecture
/*
class Demo extends Component{
	render(){
		return <div className="maindiv_style">
		<h1>Hello {this.props.name}</h1>
		<p> Welcome to my first Component :) </p>
		</div>
	}
}
*/
export default Demo;

/*
props get passed to the Components
props are immutable (cannot be changed/modify)
props - functional Components
this.props - class Components
*/