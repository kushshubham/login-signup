
import {useNavigate} from 'react-router-dom'

function Signup(){
const navigate = useNavigate()
  
    return(
        <>
        <div>
            <h1 style={{color : "GrayText"}}>
                Welcome to the register page !
            </h1>
            <div>
                <p>Name</p>
                <input type="Name" placeholder="Enter Name" />
            </div>
            <div>
                <p>Email</p>
                <input type="Email" placeholder="Enter Email" />
            </div>
            <div>
                <p>Password</p>
                <input type="password" placeholder="Enter Password" />
            </div>
            <div>
                <button>Register</button>
            </div>
            <div>
                <a href="#">Already have an account</a>
            </div>
            <div>
                <button onClick={()=>{navigate('/Login')}} >Login</button>
            </div>
        </div>
        </>
    )
}


export default Signup