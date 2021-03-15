import { render } from "@testing-library/react";
import React from "react";



const LoginForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
          username: nameEl.current.value,
          email:emailEl.current.value,
          password: passwordEl.current.value,
          rememberMe: rememberMeEl.current.checked,
        }
        // it would be a more completely correct REACT approach
        // to make a JSX component to render formData out to a selector on the HTML
        console.log(formData);
      };
      const nameEl = React.useRef(null);
      const emailEl = React.useRef(null);
      const passwordEl = React.useRef(null);
      const rememberMeEl = React.useRef(null);

      
    
    return (
      
        <form onSubmit={handleSubmit}>
       <form> <input type="text" placeholder="Enter your username " className='input' id="name" ref={nameEl} /></form>
       <form><input type="email" placeholder="Enter your email ID" className='input' id="email" ref={emailEl} /></form>
        <form><input type="password" placeholder="Enter password here" className='input' id="passwrd" ref={passwordEl} /></form>
            
      
            
         <label>
          <input type="checkbox" className='checkbox' ref={rememberMeEl} />
          Remember me
        </label>

   <p><input type="submit" className="myButton"   value="SUBMIT" id="button" /></p>

      
</form>
      
    )
    

    }

export default LoginForm;