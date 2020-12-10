import React from 'react'

export default function Jobsadmin() {
    return (
        

        
                
                
                
                    <div className="card" style={{marginTop:150+"px"}}>
                        <div className="card-header card-header-tabs card-header-primary">
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                            <span className="nav-tabs-title"><h5>About the Job</h5></span>
                            
                            </div>
                        </div>
                        </div>
                        <div className="card-body">
                        <div className="tab-content">
                            <div className="tab-pane active" id="profile">
        <form>
            <div className="form-group">
                <label for="exampleFormControlInput1">Job Title</label>
                <input type="text" className="form-control"  placeholder="Enter Job Title"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">Job Designation</label>
                <input type="text" className="form-control"  placeholder="Enter Job Designation"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Job Details</label>
                <textarea className="form-control"  rows="3"></textarea>
            </div>
            
            <input type="button" className="col-md-2 col-lg-2 btn btn-success"  value="POST"/>

            
        </form>
                </div>
            </div>
        </div>
    </div>


            )
        }
