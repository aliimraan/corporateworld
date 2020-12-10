import React,{useEffect,useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Navbar from '../../../container/Content/Navbar'
import Approvehr from '../../../container/Content/contenthr/Approvehr'
import axiosInstance from '../../../helpers'


export default function Approve() {
    const [allJobs,setAllJobs]=useState([])
 
    useEffect(()=>{
        getAllDetail()
    },[])

    const getAllDetail=()=>{
        const token=localStorage.getItem('token')
        const config={
            'headers':{jwt_react:token}
        }
    axiosInstance.get('/application/user/all/jobs/applied',config).then(data=>{
        return setAllJobs(data.data.data)
    }).catch(err=>{
        console.log(err)
    })
    }
    return (
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list ={
                [
                    {label:'View Application',icon:'dashboard',link:'/hr_dashboard'},
                    {label:'Approve/Decline',icon:'table',link:'/hr_dashboard/approvedec_app',active:"active"},
                    {label:'Account',icon:'person',link:'/hr_dashboard/account'},
                ]
            } 

            />
            </Col>
                <Col md={9}>
                    <Navbar label={"Approve/Decline"} />
                    <Approvehr allJobs={allJobs}/>
                </Col>
            </Row>
            </div>
    )
}
