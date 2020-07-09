import React, {Suspense, lazy}from 'react';
import { Route, Switch} from 'react-router-dom';


const Home = lazy(()=>import('./../components/App.js'))
const Login = lazy(()=> import('./../components/Login.js'))
const Account = lazy(()=> import('./../components/Account.js'))

class Layout extends React.Component{
 constructor(){
     super();
     this.state = {}
 }
 
  componentDidMount(){
    let token = localStorage.getItem('token');

    if (!token) {
        this.props.history.push('/login');
        
      }
 }

 render(){
     return(
         <>
        <header class="main-header">
          <h2>Welcome to Digital ATM</h2> 
        </header>
 
         <div className="mainScreen">
            <div className="mainScreen__routeScreen">
                <Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/account" component={Account} />
					</Switch>               
                </Suspense>
            </div>
            
         </div>
                
         <footer className="footer">
                <p className="copyright">
                   
                </p>
        </footer>
        </>
     )
 }
}
export default Layout