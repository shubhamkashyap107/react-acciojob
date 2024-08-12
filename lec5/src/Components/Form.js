// import React, { useState } from 'react'

// const Form = () => {

//     const[email, setEmail] = useState("")
//     const[username, setUsername] = useState("")
//     const[password, setPassword] = useState("")
  

    

//   return (
//     <>
//         <div>
//             <label htmlFor={"mail"} >E-Mail</label><br></br>
//             <input id='mail' placeholder='heheheh@gmail.com' value={email} onChange={(e) =>{
//                 setEmail(e.target.value)
//             }}  />
//         </div>

//         <div>
//             <label htmlFor={"mail"} >Username</label><br></br>
//             <input id='mail' placeholder='munni' value={username} onChange={(e) =>{
//                 setUsername(e.target.value)
//             }}  />
//         </div>

//         <div>
//             <label htmlFor={"mail"} >Password</label><br></br>
//             <input type='password' id='mail' placeholder='********' value={password} onChange={(e) =>{
//                 setPassword(e.target.value)
//             }}  />
//         </div>
//     </>
//   )
// }

// export default Form


import React, { useState } from 'react';

const Form = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const[isSignIn, setIsSignIn] = useState(true)

    const containerStyle = {
        marginBottom: '15px',
    };

    const labelStyle = {
        fontWeight: 'bold',
        marginBottom: '5px',
        display: 'block',
    };

    const inputStyle = {
        width: '100%',
        padding: '8px',
        marginTop: '5px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    };

    return (
        <div style={{width : "350px", margin : "auto", marginTop : "100px"}}>
            <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
            
            {
                isSignIn === false ? <div style={containerStyle}>
                <label htmlFor="mail" style={labelStyle}>
                    E-Mail
                </label>
                <input
                    id="mail"
                    placeholder="heheheh@gmail.com"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    style={inputStyle}
                />
            </div> : ""
            }

            <div style={containerStyle}>
                <label htmlFor="username" style={labelStyle}>
                    Username
                </label>
                <input
                    id="username"
                    placeholder="munni"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    style={inputStyle}
                />
            </div>

            <div style={containerStyle}>
                <label htmlFor="password" style={labelStyle}>
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    style={inputStyle}
                />
            </div>


            <p>{!isSignIn ? <div>Already a user? <span onClick={() => {
                setIsSignIn(!isSignIn)
            }} style={{color : "blue", cursor : "pointer"}}>Sign In Instead</span></div> : <div>Not a user? <span onClick={() => {
                setIsSignIn(!isSignIn)
            }} style={{color : "blue", cursor : "pointer"}}>Sign Up</span></div>}</p>
        </div>
    );
};

export default Form;
