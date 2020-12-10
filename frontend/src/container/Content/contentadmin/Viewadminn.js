import React from 'react'

export default function Viewadminn() {
    return (
      <div className="card" style={{marginTop:150+"px"}}>
      <div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          HR LIST
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
      <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Salary</th>
                      </thead>
                      <tbody class=" text-primary">
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Country</td>
                            <td>City</td>
                            <td>Salary</td>
                        </tr>
                      </tbody>
                      </table>
                      </div>      
                      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          USER LIST
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
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
                            <td> <a href ="/contentadmin/editadmin"><button className="btn btn-success">EDIT PROFILE</button></a> </td>
                            <td><button className="btn btn-danger">DELETE</button></td>
                        </tr>
                      </tbody>
                      </table>
                      </div>
                    </div>
    </div>
  </div>
  
</div>
</div>
    )
}
