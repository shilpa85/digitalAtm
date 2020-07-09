import React from 'react';

const WITHDRAWAL_LIMIT = 10000;

class Account extends React.Component {
	
	constructor(props){
	
	super(props);
	
	this.state = {balance: 5000, 
					ledgerBalance: 5000, 
					accountType: "saving", 
					withdrawalAmount: 0, 
					balanceErr:"", 
					withdrawalPerDay: 0,
					withdrawalMsg: ""
					}	
		
	}
	
	onChangeHandler = (e) => {
		if(e.target.name === 'withdrawalAmount' && e.target.value > this.state.ledgerBalance){
			this.setState({balanceErr: "Insufficient Account Balance"});
		} else {
			this.setState({balanceErr: ""});	
		}
		this.setState({[e.target.name]: e.target.value});
	}
	
	withdrawHandler = (e) => {
		if (this.state.ledgerBalance < this.state.withdrawalAmount){
			this.setState({withdrawalMsg: "Insufficient Account Balance."});
		} else if(this.state.withdrawalPerDay + this.state.withdrawalAmount  > WITHDRAWAL_LIMIT) {
			this.setState({withdrawalMsg: "Daily withdrawal limit exceeds."});
		} else {
			this.setState((prevState) => ({ledgerBalance: prevState.ledgerBalance - this.state.withdrawalAmount }));	
			this.setState({withdrawalMsg: `${this.state.withdrawalAmount} INR Debited from your account.`});
		}
		
		
		
	}
	
	cancelHandler = (e) => {
		 localStorage.removeItem("token");
		 this.props.history.push('/login');
		
	}	

	render(){
	  return (             
             <div  className="container">
				<div> Available balance is {this.state.ledgerBalance} INR</div>
				<span>{this.state.withdrawalMsg}</span>
				
				   <p>Select Account Type:</p>
						<div className="field-account-type"><input 
						type="radio" 
						id="accountType1" 
						name="accountType" 
						value="saving" 
						checked={this.state.accountType == 'saving'}
						onChange={this.onChangeHandler}
						/>
						<label for="accountType1">Current</label>
						</div>
						<div className="field-account-type">
						<input 
						type="radio" 
						id="accountType2" 
						name="accountType" 
						value="current"
						checked={this.state.accountType == 'current'}
						onChange={this.onChangeHandler}						
						/>
						<label for="accountType2">Saving</label>
						</div>
						
						<div className="field-withdraw">
						<label for="withdrawalAmount">Enter Withdrawal Amount:</label>
						<input 
						type="text"  
						id="withdrawalAmount"
						name="withdrawalAmount"
						value={this.state.withdrawalAmount}
						onChange={this.onChangeHandler}	
						aria-label="Enter Withdrawal Amount"
						/>
						<span>{this.state.balanceErr}</span>
						</div>
						
						
						<button onClick={this.withdrawHandler} className="btn">Withdraw</button>
						<button onClick={this.cancelHandler} className="btn">Cancel</button>
						
			 </div>
	   );
	}
}

export default Account;
