import React from 'react';
import Users from "./../data/users.json";

class Login extends React.Component{
	
	constructor(props){
		super(props);
		
		this.state = {user: {username: "", password: ""} };
	}
   

     onChangeHandler = (e) => {
        const _user = {...this.state.user, [e.target.name] : e.target.value}
        this.setState({user: _user});
    }

    loginHandler = (e) => {
        e.preventDefault();
		const jsonString = JSON.stringify(Users);
		const _users = JSON.parse(jsonString);
		
		console.log(_users);

		const foundUser = _users.filter(element => element.username === this.state.user.username &&  element.password === this.state.user.password);
console.log(foundUser);
        if(foundUser.length){
			console.log(foundUser.username);
            localStorage.setItem("token", foundUser.username);
            this.props.history.push('/account');
        }
        
    }

    render(){

		return (
			<>
				<form>
					
					<div className="container">
						<input 
						type="text" 
						value={this.state.user.username} 
						onChange={this.onChangeHandler} 
						placeholder="Username" 
						name="username" 
						aria-label="Username"
						required
						/>

						<input 
						type="password" 
						value={this.state.user.password} 
						onChange={this.onChangeHandler} 
						placeholder="Password" 
						name="password" 
						aria-label="Password"
						required 
						/>
						
						<button className="btn" type="submit" onClick={this.loginHandler}>Login</button>

					</div>

				</form>
			</>
		);
	}
}

export default Login;

