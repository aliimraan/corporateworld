import React from 'react'
import { Jumbotron , Container } from 'reactstrap'
import Header from './Header'
import './Home.css'
import Image from './Slider/Slider'
import './Slider/Css/Slider.css'

import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
    
   
    return (
        <div>
            <div id="main">
          
          <Header />
          <Jumbotron style ={{backgroundColor :'#262431'}}>
       <div className="head">
         <h1 className ="heading">Welcome To Job Portol</h1>
         </div>
        <span className="reg"><Link className="link_btn text-decoration-none" to ={`./register`}>get started</Link></span>
         </Jumbotron>
        <div className="container mt-5 carousel">
           <h1 className ="slider_title">Latest Jobs</h1>
           <Image />
        </div>
        
   
         </div>
            
        </div>
    )
}
