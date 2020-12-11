import React,{useEffect,useState} from 'react'
import axiosInstance from '../../helpers'
import {Link, Redirect} from 'react-router-dom'

export default function Home() {
    const [allJobs,setAllJobs]=useState([])
   
    useEffect(()=>{
        getAllJobs()
        
    },[])
    
    const getAllJobs=()=>{
        axiosInstance.get('/application/job/show/all').then(data=>{
            console.log(data.data.data)
            return setAllJobs([data.data.data])
        }).catch(err=>{
            console.log(err)
        })
    }

    const renderAllJobs=(el)=>{
     if(el===undefined){
         return <h1>loading...</h1>
     }
     if(el.length<1){
         return <h1>no records</h1>
     }
        return el.map((item,index)=>{
            
            return (
                <div>
                    {item.profile}
                    {item.role}
                    {item.description}
                    <Link className="btn btn-info" to={`/user_dashboard/job_application/${item._id}`}>view details</Link>
                </div>
            )
        })
    }
   
    return (
        <div>
            <h1>The Test</h1>
            {renderAllJobs(allJobs[0])}
        </div>
    )
}
