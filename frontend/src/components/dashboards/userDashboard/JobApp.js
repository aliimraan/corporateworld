import React from 'react'
import JobContent from '../../../container/contentJob/JobContent'
import Mainpanel from '../../../container/Main/Mainpanel'
import Sidebar from '../../../container/Sidebar/Sidebar'
import {Row,Col} from 'react-bootstrap'

export default function JobApp() {
    return (
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list={
                [
                    {label:'Job Application',icon:'dashboard',link:'/user_dashboard'},
                    {label:'View Application',icon:'person',link:'/user_dashboard/view_application'},
                    {label:'Status',icon:'table',link:'/user_dashboard/status'},
                ]
            } />
            </Col>
            <Col md={9}>
            <JobContent/>
            </Col>
        </Row>
        </div>
    )
}