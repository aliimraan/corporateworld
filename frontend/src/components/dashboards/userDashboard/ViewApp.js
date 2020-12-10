import React, { useEffect,useState } from 'react'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Mainpanel from '../../../container/Main/Mainpanel'
import ViewContent from '../../../container/contentJob/ViewContent'
import {Row,Col} from 'react-bootstrap'
import Navbar from '../../../container/Content/Navbar'
import axiosInstance from '../../../helpers'
export default function ViewApp() {
    const [appliedJob,setAppliedJob]=useState([])

    useEffect(()=>{
        const userId=localStorage.getItem('id')
        const token=localStorage.getItem('token')
        const config={
            'headers':{jwt_react:token}
        }
    axiosInstance.get(`/application/user/job/applied/show/${userId}`,config).then(data=>{
        setAppliedJob([data.data.data])
    }).catch(err=>{
        console.log(err)
    })
    },[])
    
    console.log(appliedJob[0])
    return (
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list={
                [
                    {label:'Job Application',icon:'dashboard',link:'/user_dashboard/job_application/:id'},
                    {label:'View Application',icon:'person',link:'/user_dashboard/view_application',active:"active"},
                    {label:'Status',icon:'table',link:'/user_dashboard/status'},
                ]
            } />
            </Col>
            <Col md={9}>
            <Navbar label={"View Application"}/>
            <ViewContent appliedJob={appliedJob}/>
            </Col>
        </Row>
        </div>
    )
}
