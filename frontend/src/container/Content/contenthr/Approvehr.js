import React from 'react'
import {Link, useHistory} from 'react-router-dom'

export default function Approvehr({allJobs}) {
  const history=useHistory()

  const approveHandler=(id,item)=>{
   history.push({
      pathname:'/contenthr/approve/'+id,
      userData:{
          item:item
       }
     });
 
  }

  const getRecords=(el)=>{
    if(el==undefined){
      return<h4>loading...</h4>
    }
    return el.map((item,index)=>{
      if(el===undefined){
        return <h3>loading...</h3>
      }
      const {_id,role,profile,userId}=item
      index++
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{role}</td>
          <td>{profile}</td>
          <td>{userId.fullname}</td>
          <td> <button className="btn btn-success" onClick={()=>approveHandler(_id,item)}>Approve</button>
          <button className="btn btn-danger" >Decline</button></td>
          
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
                  <h4 class="card-title ">Approve/Decline User Job</h4>
                  <p class="card-category"> All Jobs Applied By User</p>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>S.NO</th>
                        <th>ROLE</th>
                        <th>PROFILE</th>
                        <th>CANDIDATE</th>
                        <th>ACTIONS</th>
                        
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
