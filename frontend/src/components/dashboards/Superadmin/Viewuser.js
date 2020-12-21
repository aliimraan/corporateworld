import React,{useEffect,useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Navbar from '../../../container/Content/Navbar'
import axiosInstance from '../../../helpers'
import {Redirect,useHistory} from 'react-router-dom'
import '../css/material-dashboard.css'
import Adminhr from '../../../container/Content/contentsuper/Adminhr'


export default function Viewuser() {
    const [hrList,setHrList]=useState('')
    const [userList,setUserList]=useState('')
    const [Token,SetToken]=useState('')
    const history=useHistory()

    // useEffect(()=>{
       
    //     SetToken(localStorage.getItem('token'))
    //     getHrList()
    //     getUserList()
    // },[])

    const getHrList=()=>{
        const token=localStorage.getItem('token')
        const config={
            'headers':{'jwt_react':token}
        }
        axiosInstance.get('/api/hr/registered/show/all',config).then(data=>{
            setHrList([data.data])
        }).catch(err=>{
            if(err.response.status===400){
                return history.push('/')
              }
        })
        
    }

    const getUserList=()=>{
        const token=localStorage.getItem('token')
        const config={
            'headers':{'jwt_react':token}
        }
        axiosInstance.get('api/user/registered/show/all',config).then(data=>{
            setUserList([data.data])
        }).catch(err=>{
            console.log(err)
        })
    }
  
    return (
        Token===null ?<Redirect to="/login" />:
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list ={
                [
                    {label:'ADD ADMIN',icon:'dashboard',link:'/create_admin'},
                    {label:'ADD HR',icon:'table',link:'/create_hr'},
                    {label:'ADMIN/HR',icon:'table',link:'/admin_hr',active:"active"},

                ]
            } 

            />
            </Col>
                <Col md={9}>
                    <Navbar label={"Admin / HR List"} />
                   <Adminhr hrList={hrList} userList={userList}/>
                </Col>
            </Row>
            </div>
    )
}
