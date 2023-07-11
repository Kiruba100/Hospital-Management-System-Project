import React from "react";
import { Link } from "react-router-dom";

const Login= props => (
    <LoginForm />
);
  

class LoginForm extends React.Component{
  render(){
    return(
      <div id="loginform">
        <div></div><h1>Hospital Management System</h1>
        <FormHeader title="Login" />
        <Form />
        <OtherMethods />
      </div>
    )
  }
}

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
   <div>
     <FormInput description="Username" placeholder="Enter your username" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/>
     <FormButton title="Log in"/>
     <Link to='/'><FormButton title="or Sign up"/></Link>
   </div>
);

const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label><Link to='signup'>Or sign in with</Link></label>
    <div id="iconGroup">
    </div>
  </div>
);
export default Login;