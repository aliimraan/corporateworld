import React from 'react'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Mainpanel from '../../../container/Main/Mainpanel'
import ViewContent from '../../../container/contentJob/ViewContent'
import {Row,Col} from 'react-bootstrap'
import Navbar from '../../../container/Content/Navbar'
export default function ViewApp() {
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
            <ViewContent/>
            </Col>
        </Row>
        </div>
    )
}
