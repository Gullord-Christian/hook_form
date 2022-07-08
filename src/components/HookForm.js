import React, {useState} from 'react';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  

    return (
        <form>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                {!firstName ? <span> Please enter a first name </span> : null }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} />
                {!lastName ? <span> Please enter a last name </span> : null}
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                {!email ? <span> Please enter an email</span> : null}
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
                {!password ? <span> Please enter a password </span> : null}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                {!confirmPassword ? <span> Please enter password confirmation </span> : null}
            </div>
            <div>
                <p> First Name - {firstName} </p>
                <p> Last Name - {lastName} </p>
                <p> Email - {email} </p>
                <p> Password - {password} </p>
                <p> Confirm Password - {confirmPassword} </p>
            </div>
        </form>
    )
};
export default HookForm