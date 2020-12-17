import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import './corporate.css'
import axiosInstance from '../../helpers'
import Input from '../../container/Input'

export default function Corporate() {
	const [role,setRole]= useState('')
	const [email,setEmail]= useState('')
	const [pass,setPass]= useState('')
	const history=useHistory()

	const submitHandler=(e)=>{
		e.preventDefault()
		const FormDate={email,pass,role}
		
		axiosInstance.post('/api/user/login',FormDate).then(data=>{
			if(data.status===200){
				console.log(data.data.user)
				const {email,fullname,_id}=data.data.user
				localStorage.setItem('token',data.data.token)
				localStorage.setItem('fullname',fullname)
				localStorage.setItem('email',email)
				localStorage.setItem('id',_id)
				localStorage.setItem('role',role)
				if(role==='admin'){
					return history.push('/admin_dashboard/view_apps')
				}else{
					return history.push('hr_dashboard')
				}
			}
		}).catch(err=>{
			console.log(err)
		})
	}
    return (
			<div>
			<div id="corp">

			
				<div className="box">
					<input type="checkbox" className="togg-btn" onChange={(e)=>setRole(e.target.value)}></input>
					<div className="hrarea">
				<form onSubmit={submitHandler}>
				<h2>HR LOGIN</h2>
				<Input type="text" placeholder="Enter Email" label="Email" onChange={(e)=>setEmail(e.target.value)} />
                <Input type="password" placeholder="Enter Password" label="Password" onChange={(e)=>setPass(e.target.value)} />
                <button type="submit" className="btn btn-primary">Login</button>

				</form>
				</div>
				<div className="adminlogin">
				<form onSubmit={submitHandler}>
				<h2>ADMIN LOGIN</h2>
				<Input type="text" placeholder="Enter Email" label="Email" onChange={(e)=>setEmail(e.target.value)} />
                <Input type="password" placeholder="Enter Password" label="Password" onChange={(e)=>setPass(e.target.value)} />
                <button type="submit" className="btn btn-primary">Login</button>

				</form>
				</div>
				</div>
			</div>
			</div>
    )
}
