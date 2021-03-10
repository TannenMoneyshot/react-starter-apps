import React,{Component} from 'react';
import './App.css';
import WidgetList from './WidgetList.js';

class Voting extends Component{
	constructor(props){
		super(props);
		 
	}

	render(){
		return(
			<div>
				 Welcome to the Voting app 
				 
			<WidgetList />	 
			</div>
			
		);
	}
}
export default Voting;