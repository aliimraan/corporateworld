import React , {useState} from 'react'
import { Container, Row , Col } from 'react-bootstrap';
import Input from '../../container/Input'
import './corporate.css'

export default function Corporate() {
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
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
                        <h3 className="mb-5 text-center heading">Login As HR</h3>
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
                
            </div>
            <div className="card card1">
                <div className="row justify-content-center my-auto">
                    <div className="col-md-8 col-10 my-5">
                        <div className="row justify-content-center px-3 mb-3"> </div>
                        <h3 className="mb-5 text-center heading">Login As Admin</h3>
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
                
            </div>
            
        </div>
    </div>
</div>
        </div>
    )
}
