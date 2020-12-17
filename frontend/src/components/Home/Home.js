import React from 'react'
import { Jumbotron , Container } from 'reactstrap'
import Header from './Header'
import './Home.css'
import Image from './Slider/Slider'
import './Slider/Css/Slider.css'


import './Home.css'
import { Link } from 'react-router-dom'
import Contact from './Contact/Contact'

export default function Home() {
    
   
    return (
        <div>
        <Header />
            <div id="main">
          
         
          <Jumbotron style ={{backgroundColor :'#290058',marginBottom:'0px',borderRadius:'0px'}}>
       <div className="head">
         <h1 className ="heading">Welcome To Job Portol</h1>
         </div>
        
         </Jumbotron>
         <section>
            <div className="showcase_area">
              <div className="text_side">
                start your<br/> carrier now
                <p>Lorem Ipsum is simply dummy text of the printing and </p>
                <span className="reg"><Link className="link_btn text-decoration-none" to ={`./register`}>get started</Link></span>
              </div>
              <div className="picture_area">
                  <img src="/assets/images/success.svg" alt="image"/>
              </div>
            </div>
         </section>
         <section className="browse_job_area">
          <div className="container carousel ">
            <h1 className ="slider_title">Browse Jobs</h1>
            <Image />
          </div>
          </section>
        
        <Contact/>
         </div>
            
        </div>
    )
}
