import React,{useState,useEffect} from 'react'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Mainpanel from '../../../container/Main/Mainpanel'
import StatusContent from '../../../container/contentJob/StatusContent'
import {Row,Col} from 'react-bootstrap'
import Navbar from '../../../container/Content/Navbar'
export default function ViewApp() {
import axiosInstance from '../../../helpers'
export default function Status() {
   

    
    return (
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list={
                [
                    {label:'Job Application',icon:'dashboard',link:'/user_dashboard/job_application/:id'},
                    {label:'View Application',icon:'person',link:'/user_dashboard/view_application'},
                    {label:'Status',icon:'table',link:'/user_dashboard/status',active:"active"},
                ]
            } />
            </Col>
            <Col md={9}>
            <Navbar label={"Manage Password"}/>
            <StatusContent/>
            </Col>
        </Row>
        </div>
    )
}
