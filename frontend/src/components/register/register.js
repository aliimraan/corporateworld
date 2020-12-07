import React,{useState} from 'react'
import Input from '../../container/Input';
import {Container,Row,Col} from 'react-bootstrap'
import './register.css'
export default function Register() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [username,setUsername]=useState('');
    const [name,setName]=useState('');
    const [dob,setDob]=useState('');
    const [mobile,setMobile]=useState('');
    const [confirmpassword,setConfirmpassword]=useState('');
    const submitHandler=(e)=>{
        e.preventDefault();
    }
    return (
    <div>
        <Container>
            <Row>
              <Col md={2}></Col>
                <Col md={8}>
    <div className="card card1">
                <div className="row justify-content-center my-5">
                    <div className="col-md-12 col-10 my-8">
                        <div className="row justify-content-center px-3 mb-3"> </div>
                        <h3 className="mb-5 text-center heading">Register Here !!</h3>
                        <h6 className="msg-info">Fill up all Details Correctly</h6>
                    <form onSubmit={submitHandler}>
                    <Row>
                        <Col md={12}> <Input type="text" placeholder="Enter Name" label="Full Name" onChange={(e)=>setName(e.target.value)} /></Col>
                        <Col md={6}> <Input type="text" placeholder="Enter Username" label="Username" onChange={(e)=>setUsername(e.target.value)} /></Col>
                        <Col md={6}> <Input type="password" placeholder="Enter Password" label="Password" onChange={(e)=>setPassword(e.target.value)} /></Col>
                        <Col md={6}> <Input type="password" placeholder="Confirm Password" label="Confirm Password" onChange={(e)=>setConfirmpassword(e.target.value)} /></Col>
                        <Col md={6}> <Input type="date" placeholder="Date Of Birth" label="Date Of Birth" onChange={(e)=>setDob(e.target.value)} /></Col>
                        <Col md={6}> <Input type="number" placeholder="Enter Mobile Number" label="Mobile" onChange={(e)=>setMobile(e.target.value)} /></Col>
                        <Col md={6}> <Input type="email" placeholder="Enter Email" label="E-mail" onChange={(e)=>setEmail(e.target.value)} /></Col>

                    </Row>

                    
                    
                    <Row>    
                            <Col md={6}>   <button className="btn-block btn-color">Sign Up</button></Col>
                            <Col md={6}>  <button className="btn-block btn-color">Reset</button></Col> 
                     </Row>  

                              

                              <div className="bottom text-center mb-5">
                    <p href="#" className="sm-text mx-auto mb-3">Already have an account?<button className="btn btn-white ml-2">Login Here</button></p>
                </div>
                    
                    </form>
                    </div>
                    </div>
                    </div>
        </Col>
            <Col md={2}></Col>
  </Row>
 
</Container>
           
        </div>
    )
}
