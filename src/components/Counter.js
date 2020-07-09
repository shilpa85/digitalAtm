import React from 'react';
import CounterItem from './CounterItem.js';

class Counter extends React.Component{
	
	constructor(props){
		super(props);
		
		this.state = {counters: [], totalSum: 0, max: 0, min: 0, average: 0};
	}
	
	componentDidMount(){
		console.log(this.state.counters);
			const _counters = [{count: 0}, {count: 0}, {count: 0}, {count: 0}, {count: 0}];
			this.setState({counters: _counters});
			
		  }
		  
	updateStates(){
		const total = this.state.counters.reduce((accumulator, item) => accumulator + parseInt(item.count), 0);
		const average = total/this.state.counters.length;		
		const _counters = this.state.counters.map(item => item.count);
		
		this.setState({totalSum: total});
		this.setState({average});
		this.setState({min: Math.min(..._counters)});
		this.setState({max: Math.max(..._counters)});
	}
	
	 incrementCounter = (index) => {
			const _counters = this.state.counters;
			_counters[index] = {count: parseInt(this.state.counters[index].count) + 1}

			this.setState({counters: _counters}, this.updateStates);
		 
			/*this.setState(prevState => { return {counters : [
				...prevState.counters,
				[index]: {count: prevState.counters[index].count + 1}
			]}}
		);*/
	}
		
	 decrementCounter = (index) => {
		const _counters = this.state.counters;
		_counters[index] = {count: parseInt(this.state.counters[index].count) - 1}

		this.setState({counters: _counters}, this.updateStates);
	}
	
	
	render(){
	  
	  return (
	  <div className="counter-container">
	  {this.state.counters.map((item, index) =>
	  <CounterItem increment={this.incrementCounter} decrement={this.decrementCounter} counter={item} index={index} />
	  )
	  }
	  
	  <ul>
		<li>Total Sum: {this.state.totalSum}</li>
		<li>Average: {this.state.average}</li>
		<li>Max: {this.state.max}</li>
		<li>Min: {this.state.min}</li>
	  </ul>
			
	   </div>
	  )
	}
}

export default Counter;