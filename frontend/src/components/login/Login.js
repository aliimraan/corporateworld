import React ,{useState} from 'react'
import Input from '../../container/Input'
import './index.css'


export default function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const submitHandler=(e)=>{
        e.preventDefault();

    }
    return (
        <div>
          <div className="container px-4 py-5 mx-auto">
    <div className="card card0">
        <div className="d-flex flex-lg-row flex-column-reverse">
            <div className="card card1">
                <div className="row justify-content-center my-auto">
                    <div className="col-md-8 col-10 my-5">
                        <div className="row justify-content-center px-3 mb-3"> </div>
                        <h3 className="mb-5 text-center heading">Welcome Back</h3>
                        <h6 className="msg-info">Please login to your account</h6>
                    <form onSubmit={submitHandler}>
                        <Input type="text" placeholder="Enter Email" label="E-mail" onChange={(e)=>setEmail(e.target.value)} />
                        <Input type="password" placeholder="Enter Password" label="Password" onChange={(e)=>setPassword(e.target.value)} />
                            <div className="row justify-content-center my-3 px-3"> 
                                <button className="btn-block btn-color">Login</button>
                                <button className="btn-block btn-color">Reset</button>
                            </div>
                    </form>
                        <div className="row justify-content-center my-2"> <a href="#"><small className="text-muted">Forgot Password?</small></a> </div>
                    </div>
                </div>
                <div className="bottom text-center mb-5">
                    <p href="#" className="sm-text mx-auto mb-3">Don't have an account?<button className="btn btn-white ml-2">Create new</button></p>
                </div>
            </div>
            <div className="card card2">
                <div className="my-auto mx-md-5 px-md-5 right">
                    <h3 className="text-white">We are more than just a company</h3> 
                    <small className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
        
    )
}
