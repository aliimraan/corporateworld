import React,{useEffect,useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Navbar from '../../../container/Content/Navbar'
import Viewadminn from '../../../container/Content/contentadmin/Viewadminn'
import axiosInstance from '../../../helpers'


export default function Viewadmin() {
    const [hrList,setHrList]=useState('')
    const [userList,setUserList]=useState('')

    useEffect(()=>{
        getHrList()
        getUserList()
    },[])

    const getHrList=()=>{
        const token=localStorage.getItem('token')
        const config={
            'headers':{'jwt_react':token}
        }
        axiosInstance.get('/api/hr/registered/show/all',config).then(data=>{
            setHrList([data.data])
        }).catch(err=>{
            console.log(err)
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
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list ={
                [
                    {label:'View Application',icon:'dashboard',link:'/admin_dashboard/view_apps',active:"active"},
                    {label:'Approve',icon:'table',link:'/admin_dashboard/approve_apps'},
                    {label:'Decline',icon:'table',link:'/admin_dashboard/decline_apps'},
                    {label:'Jobs',icon:'person',link:'/admin_dashboard/jobs'},
                ]
            } 

            />
            </Col>
                <Col md={9}>
                    <Navbar label={"View Application"} />
                   <Viewadminn hrList={hrList} userList={userList}/>
                </Col>
            </Row>
            </div>
    )
}
