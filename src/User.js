import { useState } from "react";
import { TextField } from "@mui/material";
import {useHistory} from "react-router-dom"
import Footer from "./Footer";



const User = () => {
    const [fullname,setFullName] = useState('')
    
    const [userDOB, setUserDOB] = useState('');

    const [userSSN, setUserSSN] = useState('');

    const [useremail, setUseremail] = useState('');

    let history = useHistory()
    


    const handleSubmit = (e)=> {
        e.preventDefault()
        const userdetails = {fullname, userDOB, userSSN, useremail}
        
        fetch('https://project5k.herokuapp.com/userdetails', {
            method: 'POST',
            headers:{"Content-type": "application/json"},
            body: JSON.stringify(userdetails)
        }).then(()=>{
            history.push('/verified')
        })
    }

    return (
        <> 
        <div className="simple-form">
            <h2>Please complete this to proceed</h2>
            <form onSubmit={handleSubmit}>
                <div className="float">
                    <TextField className="input" style={{ width: 300 }} error variant="filled" id="standard-basic" label="Full name" type="text" value={fullname} onChange={(e)=> setFullName(e.target.value)} required />
                </div>
                <div className="float">
                    <TextField className="input" style={{ width: 300 }} error id="standard-basic" variant="filled" label="Date Of Birth" type="date" value={userDOB} onChange={(e)=> setUserDOB(e.target.value)} required />
                </div>
                <div className="float">
                    <TextField className="input" style={{ width: 300 }} error id="standard-basic" variant="filled" label="S S N" type="number" value={userSSN} onChange={(e)=> setUserSSN(e.target.value)} required />
                </div>
                <div className="float">
                    <TextField className="input" style={{ width: 300 }} error id="standard-basic" variant="filled" label="email" type="email" value={useremail} onChange={(e)=> setUseremail(e.target.value)} required />
                </div>
                <button>Continue</button>

            </form>
        </div>
        <Footer/>
        </>
     );
}
 
export default User;