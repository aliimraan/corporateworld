import React ,{useState} from 'react'
import Input from '../../container/Input'
import './login.css'
import {Link, useHistory} from 'react-router-dom'
import axiosInstance from '../../helpers'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Superadmin() {
    const [email,setEmail]=useState('');
    const [pass,setPassword]=useState('');
    const history=useHistory()

    const submitHandler=(e)=>{
        e.preventDefault();
        const data={email,pass}
        axiosInstance.post('/api/user/login',data).then(data=>{
            if(data.status===200){
                const {role}=data.data.user
                if(role==='admin'||role==='hr'||role==='user')
                {
                    return toast.error('Only Super admin can access this')
                }

                localStorage.setItem('token',data.data.token)
                localStorage.setItem('email',data.data.user.email)
                localStorage.setItem('fullname',data.data.user.fullname)
                localStorage.setItem('id',data.data.user._id)
                localStorage.setItem('role',data.data.user.role)
                history.push('/create_admin')
            }
            
        }).catch(err=>{ 
            if(!err){
                return 0;
            }else{
                err.response.data.error?toast.error(err.response.data.error)
                :toast.error(err.response.data.msg)
            }
           
        })
    }
    return (
        <div >
            <div id="login">
          
                <div className ="row">
                    <div className ="col-md-10 offset-md-1">
                        <div className="row">
                            
                            <div className="col-md-7 loginarea">
                                    <h2>Login Here</h2>
                                    <ToastContainer  />
                                    <div className="login-form">
                                        <form onSubmit={submitHandler}>
                                    <Input type="text" placeholder="Enter Email" label="Email" onChange={(e)=>setEmail(e.target.value)} />
                                    <Input type="password" placeholder="Enter Password" label="Password" onChange={(e)=>setPassword(e.target.value)} />
                                    <Link className="forget" to={`/login/forget_pass`}>Forget Password</Link><br/>
                                    <button type="submit" className="btn btn-primary">Login</button>
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
