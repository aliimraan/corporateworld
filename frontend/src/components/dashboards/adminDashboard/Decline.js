import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Navbar from '../../../container/Content/Navbar'
import Declineadmin from '../../../container/Content/contentadmin/Declineadmin'


export default function Decline() {
    return (
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list ={
                [
                    {label:'View Application',icon:'dashboard',link:'/admin_dashboard/view_apps'},
                    {label:'Approve',icon:'table',link:'/admin_dashboard/approve_apps'},
                    {label:'Decline',icon:'table',link:'/admin_dashboard/decline_apps',active:"active"},
                    {label:'Jobs',icon:'person',link:'/admin_dashboard/jobs'},
                ]
            } 

            />
            </Col>
                <Col md={9}>
                    <Navbar label={"Approve/Decline List"} />
                   <Declineadmin />
                </Col>
            </Row>
            </div>
    )
}
