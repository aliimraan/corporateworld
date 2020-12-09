import React,{useState} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Input from '../../../../container/Input';



export default function Approveuser() {
    const [date,setDate]=useState('');
    const [time,setTime]=useState('');
    

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
                        <h3 className="mb-5 text-center heading">Appoint For Interview</h3>
                        <h6 className="msg-info">Schedule the Interview</h6>
                            
                    <form onSubmit={submitHandler}>
                    <Row>
                        <Col md={12}> <Input type="date" placeholder="Interview Date" label="Interview Date" onChange={(e)=>setDate(e.target.value)} /></Col>
                        <Col md={12}> <Input type="time" placeholder="Interview Time" label="Interview Time" onChange={(e)=>setTime(e.target.value)} /></Col>

                    </Row>

                    
                    
                    <Row>    
                            <Col md={6}>   <button className="btn-block btn-color">Send</button></Col>
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
