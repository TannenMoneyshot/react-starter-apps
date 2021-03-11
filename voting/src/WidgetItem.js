import React,{Component} from 'react';

class WidgetItem extends Component {

   state = {count : 0};

  
componentDidMount(){
    
}
    render(){
        return (
            <div className = "language">
                <div className = "voteCount">{this.state.count}</div>
                <div>{this.props.widgetName}</div>
                <button onClick = {() => this.updateCounter()}>vote</button>
            </div>
        )
    }


    updateCounter = () => {
        let updatedCounter = this.state.count;
        console.log(updatedCounter);
        this.setState({count:++updatedCounter});
    }

}
export default WidgetItem;
