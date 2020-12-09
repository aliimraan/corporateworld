import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Navbar from '../../../container/Content/Navbar'
import Viewcontenthr from '../../../container/Content/contenthr/Viewcontenthr'


export default function Viewapp() {
    return (
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list ={
                [
                    {label:'View Application',icon:'dashboard',link:'/hr_dashboard',active:"active"},
                    {label:'Approve/Decline',icon:'table',link:'/hr_dashboard/approvedec_app'},
                    {label:'Account',icon:'person',link:'/hr_dashboard/account'},
                ]
            } 

            />
            </Col>
                <Col md={9}>
                    <Navbar label={"View Application"} />
                    <Viewcontenthr />
                </Col>
            </Row>
            </div>
    )
}
