import React,{useState} from 'react'
import axiosInstance from '../../../helpers'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useHistory} from 'react-router-dom'


export default function Createhr() {
    
    const [name,setName]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPasssword]=useState('')
    const [confirm,setConfirm]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const history=useHistory()
   

    const submitHandler=(e)=>{
        e.preventDefault();
        
            const formdata={name,username,password,confirm,phone,email}
            const token=localStorage.getItem('token');
            const config={
                'headers':{'jwt_react':token}
            }
            axiosInstance.post('/application/admin/job/create',formdata,config).then(data=>{
                if(data.status===200){
                    toast.success(data.data.msg)
                    setTimeout(() =>history.go(0),5000);
                }
            }).catch(err=>{
                 if(!err){
                     console.log('all is well')
                 }else{
                     if(err.response===undefined){
                         return 0;
                     }else{
                         err.response.data.error?toast.error(err.response.data.error)
                         :toast.error(err.response.data.msg)
                     }
                   
                 }
             })
       
    }
    return (
        <div>
        
        <div className="card" style={{marginTop:150+"px"}}>
        
                        <div className="card-header card-header-tabs card-header-primary">
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                                <span className="nav-tabs-title"><h5>CREATE NEW HR</h5></span>
                            </div>
                
                        </div>
                        </div>
                        <div className="card-body">
                        <ToastContainer/>
                        <div className="tab-content">
                            <div className="tab-pane active" id="profile">
                    <form onSubmit={submitHandler}>
                               
            <div className="form-group">
                <label for="exampleFormControlInput1"> FULL NAME</label>
                <input type="text" className="form-control"  placeholder="Enter Job Title" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">USERNAME</label>
                <input type="text" className="form-control"  placeholder="Enter User Name" onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">PASSWORM</label>
                <input type="text" className="form-control"  placeholder="Enter Password" onChange={(e)=>setPasssword(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">CONFIRM PASSWORD</label>
                <input type="text" className="form-control"  placeholder="Confirm Password" onChange={(e)=>setConfirm(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">PHONE NUMBER</label>
                <input type="number" className="form-control"  placeholder="Enter Mobile Number" onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">EMAIL</label>
                <input type="email" className="form-control"  placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            
            <button className="col-md-2 col-lg-2 btn btn-primary">Add HR</button>

            
        </form>
                </div>
            </div>
        </div>
    </div>
    </div>

            )
        }
