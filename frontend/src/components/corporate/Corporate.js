import React from 'react'
import {Row,Col} from 'react-bootstrap'

export default function Corporate() {
    return (
        <div className="main">
        <Row>
            <Col md={2}></Col>
            <Col md={8}>
            <form>
            <h3 className="text-center">Sign In</h3>
    
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
    
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>
    
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
    
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
            </Col>
            <Col md={2}></Col>
        </Row>
        </div>
    )
}
