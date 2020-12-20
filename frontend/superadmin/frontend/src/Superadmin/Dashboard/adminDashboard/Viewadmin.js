import React,{useEffect,useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../adminDashboard/Components/Sidebar/Sidebar'
import Navbar from '../adminDashboard/Components/Navbar'
import {Redirect,useHistory} from 'react-router-dom'
import Createadmin from './Content/Createadmin'
import '../adminDashboard/Css/material-dashboard.css'
export default function Viewadmin() {
    const [Token,SetToken]=useState('')
    const history=useHistory()
    

    useEffect(()=>{
        SetToken(localStorage.getItem('token'))
        if(localStorage.getItem('role')!=='admin'){
            return history.push('/')
        }
        
    },[])
    return (
        Token===null?<Redirect to="/login" />:
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list ={
                [
                    {label:'ADD ADMIN',icon:'dashboard',link:'/create_admin',active:"active"},
                    {label:'ADD HR',icon:'table',link:'/create_hr'},
                ]
            } 

            />
            </Col>
                <Col md={9}>
                    <Navbar label={"Create Admin"} />
                   <Createadmin />
                </Col>
            </Row>
            </div>
    )
}
