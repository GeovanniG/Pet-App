import React, { useState } from 'react';

const SignUpForm = ({ signUp=true, btn='Sign Up' }) => {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('This component currently serves no purpose.');

    const isValidEmail = () => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.match(emailRegex)) {
            setMsg('Invalid Email');
            return false;
        }
        return true;
    }

    const isValidPassword = () => {
        // Use regex in future
        if (!password) {
            setMsg('Invalid Password');
            return false;
        }
        return true;
    }

    const clearInput = () => {
        setFName('');
        setLName('');
        setEmail('');
        setPassword('');
        setMsg('');
    }

    const callRegister = async () => {
        try {
            const res = await fetch('/user/register');
            const body = await res.json();
            console.log(body);
        } catch (e) {
            console.log(e);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!isValidEmail()) return;

        if (!isValidPassword()) return;

        clearInput();

        callRegister();

        // redirect
    }

    return (
        <form className="sign-up-form" onSubmit={onSubmit}>
            {msg && <p className="sign-up-form--red-bold">{msg}</p>}
            {signUp && (
                <>
                    <input type="text" name="fname" placeholder="First Name" className="sign-up-form__input" value={fname} 
                        onChange={(e) => {setFName(e.target.value)}}
                    />
                    <input type="text" name="lname" placeholder="Last Name" className="sign-up-form__input" value={lname} 
                        onChange={(e) => {setLName(e.target.value)}}
                    />
                </>
            )}
            <input type="text" name="email" placeholder="* Email" className="sign-up-form__input" value={email} 
                onChange={(e) => {setEmail(e.target.value)}}
            />
            <input type="password" name="password" placeholder="* Password" className="sign-up-form__input" value={password} 
                onChange={(e) => {setPassword(e.target.value)}}
            />
            <button className="sign-up-form__btn">{btn}</button>
        </form>
    )
}

export default SignUpForm;