import React,{useState} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Input from '../../../Input';



export default function Editadmin() {
    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [fullname,setName]=useState('');
    const [dob,setDob]=useState('');
    const [mobile,setMobile]=useState('');
    const [error,setError]=useState('')
    
    

    const submitHandler=(e)=>{
        e.preventDefault();
        
       
        
        }
    
    return (
        <div>
        <Container>
            <Row>
              <div className="card card1">
                <div className="row justify-content-center my-5">
                    <div className="col-md-12 col-10 my-8">
                        <div className="row justify-content-center px-3 mb-3"> </div>
                        <h3 className="mb-5 text-center heading">Edit Profile</h3>
                        <h6 className="msg-info">Update Fields</h6>
                            
                    <form onSubmit={submitHandler}>
                    <Row>
                        <Col md={12}> <Input type="text" placeholder="Enter Name" label="Full Name" onChange={(e)=>setName(e.target.value)} /></Col>
                        <Col md={6}> <Input type="text" placeholder="Enter Username" label="Username" onChange={(e)=>setUsername(e.target.value)} /></Col>
                        <Col md={6}> <Input type="date" placeholder="Date Of Birth" label="Date Of Birth" onChange={(e)=>setDob(e.target.value)} /></Col>
                        <Col md={6}> <Input type="number" placeholder="Enter Mobile Number" label="Mobile" onChange={(e)=>setMobile(e.target.value)} /></Col>
                        <Col md={6}> <Input type="email" placeholder="Enter Email" label="E-mail" onChange={(e)=>setEmail(e.target.value)} /></Col>

                    </Row>
                    
                    
                    <Row>    
                            <Col md={6}>   <button className="btn-block btn-color">Update</button></Col>
                            <Col md={6}>  <button className="btn-block btn-color">Cancel</button></Col> 
                     </Row>  

                              

              
                    
                    </form>
                    </div>
                    </div>
                    </div>
      
            
  </Row>
 
</Container>
           
        </div>
    )
}
