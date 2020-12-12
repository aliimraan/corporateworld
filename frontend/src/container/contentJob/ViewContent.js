import React from 'react'
export default function ViewContent({appliedJob}) {

  const getRecords=(el)=>{
    if(el[0]===undefined){
      return<h4>loading...</h4>
    }
    return el[0].map((item,index)=>{
      if(el===undefined){
        return <h3>loading...</h3>
      }
      const {role,profile,description}=item
      index++
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{role}</td>
          <td>{profile}</td>
          <td>{description}</td>
        </tr>
      )
    })
  }
    return (
        <div>
        <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card" style={{marginTop:150+"px"}}>
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Applied Jobs</h4>
                  <p class="card-category"> Here is a You Applied</p>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>S.No</th>
                        <th>ROLE</th>
                        <th>PROFILE</th>
                        <th>DESCRIPTION</th>

                      </thead>
                      <tbody class=" text-primary">
                      {getRecords(appliedJob)}
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
