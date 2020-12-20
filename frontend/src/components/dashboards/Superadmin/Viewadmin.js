import React,{useEffect,useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Navbar from '../../../container/Content/Navbar'
import {Redirect,useHistory} from 'react-router-dom'
import Createadmin from '../../../container/Content/contentsuper/Createadmin'
import '../css/material-dashboard.css'
export default function Viewadmin() {
    const [Token,SetToken]=useState('')
    const history=useHistory()
    

        
    
    return (
        
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list ={
                [
                    {label:'ADD ADMIN',icon:'dashboard',link:'/create_admin',active:"active"},
                    {label:'ADD HR',icon:'table',link:'/create_hr'},
                    {label:'ADMIN/HR',icon:'table',link:'/admin_hr'},
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
