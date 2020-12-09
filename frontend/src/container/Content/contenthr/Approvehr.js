import React from 'react'

export default function Approvehr() {
    return (
        <div>
        <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card" style={{marginTop:150+"px"}}>
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Approve/Decline User Job</h4>
                  <p class="card-category"> All Jobs Applied By User</p>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Country</th>
                      </thead>
                      <tbody class=" text-primary">
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Country</td>
                            <td> <a href ="/contenthr/approve"><button className="btn btn-success">Approve</button></a> </td>
                            <td><button className="btn btn-danger">Decline</button></td>
                        </tr>
                      </tbody>
                      </table>
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
