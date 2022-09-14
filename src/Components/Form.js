import { useState } from "react";
import React from "react";
import "./Form.css";

function Form() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [entry, setEntry] = useState ([])

    const submitForm = (e) =>{
        e.preventDefault();
        const newEntry =  {email:email, password:password};
        setEntry([...entry, newEntry])
        console.log(newEntry);
    }


  return (
    <>
    <form className="main_form" onSubmit={submitForm}>
        <div className="email_content">
            <label htmlFor="email">Email/Username</label><br />
            <input className="input" type="text" name='email'  id='email' autoComplete='off' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className="passward">
        <label htmlFor="password">Password</label><br />
            <input className="input" type="password" name='password'  id='password' autoComplete='off' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </div><br />
        <button type='submit' className="btn-primary">Login</button>
    </form>
    
    </>
  )
}

export default Form