import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Input from '../../../../container/Input';
import axiosInstance from '../../../../helpers';



export default function Approveuser(props) {
    const [interview_date,setDate]=useState('');
    const [conference_link,setCL]=useState('');
    const [data,setData]=useState([]);
    const [error,setError]=useState('');

    useEffect(()=>{
        const commingData=props.location.userData
        setData([commingData])
    },[])
    

    const submitHandler=(e)=>{
        e.preventDefault();
        if(interview_date===''){
            return setError('Interview Date required')
        }
        if(conference_link===''){
            return setError('Interview Date required')
        }

        const userId=(data[0].item.userId._id)
        const jobId=props.match.params.id
        const token=localStorage.getItem('token')
        const config={
            'headers':{'jwt_react':token}
        }
        const formData={interview_date,conference_link,userId,jobId}
        axiosInstance.post('/application/hr/job/approved',formData,config).then(data=>{
            console.log(data)
        }).catch(err=>{
            console.log(err)
        })
        
       }
    
    return (

        
       <div>
       <div id="login">
          
          <div className ="row">
              <div className ="col-md-10 offset-md-1">
                  <div className="row">
                      
                      <div className="col-md-7 loginarea">
                              <h2>Appoint For InterView</h2>
                              <div className="login-form">
                              <div class="alert alert-danger" role="alert" style={error===''?{display:'none'}:{display:'block'}}>
                        {error}
                        </div>
                                  <form onSubmit={submitHandler}>
                                  <Input type="date" placeholder="Interview Date" label="Interview Date" onChange={(e)=>setDate(e.target.value)} />
                                 <Input type="text" placeholder="Conference Link" label="Conference Link" onChange={(e)=>setCL(e.target.value)} />
                                  <button className="btn btn-primary">Cancel</button> 

                                  <button className="btn btn-primary">Send</button>

                              </form>
                             
                      </div>
                      
                  </div>
                  </div> 
          </div>
      </div>
           </div>
        </div>
           
        
        
    )
}
