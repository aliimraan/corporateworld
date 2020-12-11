import React from 'react'

export default function Viewcontenthr({allJobs}) {

  const getRecords=(el)=>{
    if(el==undefined){
      return<h4>loading...</h4>
    }
    return el.map((item,index)=>{
      if(el===undefined){
        return <h3>loading...</h3>
      }
      const {role,profile,description,userId}=item
      // if(userId===null){
      //   return 'user deleted'
      // }
      index++
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{role}</td>
          <td>{profile}</td>
          <td>{userId===null?'user is deleted by admin':userId.fullname}</td>
          <td>{userId===null?'user deleted':userId._id}</td>
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
                  <h4 class="card-title ">User Jobs Applied </h4>
                  <p class="card-category"> All Jobs Applied By User</p>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>S.No</th>
                        <th>ROLE</th>
                        <th>PROFILE</th>
                        <th>CANDIDATE NAME</th>
                        <th>CANDIDATE ID</th>
                      </thead>
                      <tbody class=" text-primary">
                        {getRecords(allJobs)}
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
