import React,{useEffect,useState} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Css/Slider.css'
import axiosInstance from '../../../helpers'
import {Link} from 'react-router-dom'


export default function Image(props) {
    
    const settings = {
        dot:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        cssEase:"linear", 
    }

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
         return <h1>Loading...</h1>
     }
     if(el.length<1){
         return <h1>no records</h1>
     }
        return el.map((item,index)=>{
            
            return (
                <div key={index}>

            <div className="card-wrapper inner">
                <div className="card">
                    <div className="card-image" >
                        <h1>{item.profile}</h1>
                        <h2>{item.role}</h2>
                        <p>{item.description}</p>
                    </div>
                   
                    <div className = "details">
                    <Link className="btn btn-danger" to={`/user_dashboard/job_application/${item._id}`}>view details</Link>
                    </div>
                </div>
            </div>

                    
                    
                    
                </div>
            )
        })
    }

    return (
        
       <Slider {...settings} className="Slider">
           
       {/* <div className="container mt-5 carousel">
            <h1 className ="slider_title">Latest Jobs</h1>
            </div> */}
            {renderAllJobs(allJobs[0])}
            
            
            
       </Slider>
       
    )
}
