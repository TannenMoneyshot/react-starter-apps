import React,{Component} from 'react';
import './App.css';
import WidgetList from './WidgetList.js';

class Voting extends Component{


	render(){
		return(
			<div className = "languages">
				 Welcome to the Voting app 
				 
			<WidgetList />	 
			</div>
			
		);
	}
}
export default Voting;