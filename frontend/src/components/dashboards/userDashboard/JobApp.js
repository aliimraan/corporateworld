import React,{useEffect, useState} from 'react'
import JobContent from '../../../container/contentJob/JobContent'
import Mainpanel from '../../../container/Main/Mainpanel'
import Sidebar from '../../../container/Sidebar/Sidebar'
import {Row,Col} from 'react-bootstrap'
import Navbar from '../../../container/Content/Navbar'
import axiosInstance from '../../../helpers'

export default function JobApp(props) {
    const [singleJob,setSingleJob]=useState([])
    const [perJobId,setPerJobId]=useState('')
    useEffect(()=>{
        getDetail()
    },[])

    const getDetail=()=>{
        const jobId=props.match.params.id
        setPerJobId(jobId)
    axiosInstance.get(`application/job/show/single/${jobId}`).then(data=>{
        return setSingleJob(data.data.data)
    }).catch(err=>{
        console.log(err)
    })
    }


    return (
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list={
                [
<<<<<<< HEAD

=======
                    {label:'Job Content Application',icon:'dashboard',link:'/user_dashboard',active:"active"},
>>>>>>> 0b0b96470472cf6e518e898c993c46a123ed5b04
                    {label:'View Application',icon:'person',link:'/user_dashboard/view_application'},
                    {label:'Status',icon:'table',link:'/user_dashboard/status'},
                ]
            } />
            </Col>
            <Col md={9}>
                <Navbar label={"Job Application"}/>
                <JobContent singleJob={singleJob}/>
            </Col>
        </Row>
        </div>
    )
}
