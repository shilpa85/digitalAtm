import React from 'react';

const CounterItem = (props) => {
	
  return (
  <div className = "counter"> 
	<button onClick={(e) => props.decrement(props.index)}> - </button>
	<button onClick={(e) => props.increment(props.index)}> + </button>
	<span>Counter - {props.index + 1} : {props.counter.count}</span>
  </div>
   
  )
}

export default CounterItem;