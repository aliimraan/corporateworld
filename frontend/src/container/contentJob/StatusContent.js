import React from 'react'

export default function StatusContent() {
    return (
        <div>
        <div className="content">
        <div className="container-fluid">
        <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8">
              <div class="card" style={{marginTop:150+"px"}}>
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Edit Profile</h4>
                </div>
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="bmd-label-floating">Old Password</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      
                     
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">New Passworde</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Confirm Password</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                   
                    <button type="submit" class="btn btn-primary pull-right">Update Profile</button>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
            
        </div>
        </div>
        </div>  
        </div>
        </div>  
        </div>
    )
}
