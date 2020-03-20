import React, { Component, PropTypes } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './Hero';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import axios from 'axios';

class HeroSection extends Component
{

    constructor(props)
    {
        super(props)
        this.state =
        {
            results: [],
            scan_rev:[],
            fetch:[]
        }
        
    }
    

    
    
          
    
            componentDidMount()
            {
                axios({ method: 'POST', url: 'https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank',
                headers: {Authorization: 'Bearer tTU3gFVUdP'}, data: { email: 'mayankmittal@intugine.com' } })
                .then
                (res=>
                    {
                        const results = res.data.data;
                        fetch = res.data.data[0].scan;
                        const scan_rev = fetch;
                        this.setState({results})
                        this.setState({scan_rev})
                    }
                )
            }
    
          renderTableData() 
          {
            return this.state.results.data.map((result, index) =>
            {
               
               const {_id, awbno, carrier, from, to ,pickup_date , extra_fields,current_status} = result
             
               return (
               
                  <tr key={_id}  >
                    
                     <td>{awbno}</td>
                     <td>{carrier}</td>
                     <td>{from}</td>
                     <td>{to}</td>
                     <td>{carrier}</td>
                     <td>{pickup_date}</td>
                     <td>{extra_fields? extra_fields.expected_delivery_date: ''}</td>
                     <td>{current_status}</td>
                    
                  </tr>
               )
            })
         }
    
         renderTimeLineData(){
          return this.state.scan_rev.map((scan, index) => {
            const {time, location, status_detail} = scan
            return(
              <TimelineItem>
              <p className="timeline_content">
                <span className="timeline_status">
                  {status_detail}
              </span>
                <span className="timeline_date">
                  {time}
              </span>
                <span className="timeline_time">
                  {location}
              </span>
              </p>
            </TimelineItem>
            )
    
          }
            
          )}
    
         
        
        
    
        render()
        {
            const a =this.state.results;
            let DEL =0,INT=0,OOD=0,DEX=0,NFI=0;
            if(this.state.results)
            {
                    a.map(data => data.current_status_code === 'DEL' ? DEL=DEL+1:DEL=DEL)
            }
            if(this.state.results)
            {
                    a.map(data => data.current_status_code === 'INT' ? INT=INT+1:INT=INT)
            }
            if(this.state.results)
            {
                    a.map(data => data.current_status_code === 'OOD' ? OOD=OOD+1:OOD=OOD)
            }
            if(this.state.results)
            {
                    a.map(data => data.current_status_code === 'DEX' ? DEX=DEX+1:DEX=DEX)
            }
            if(this.state.results)
            {
                    a.map(data => data.current_status_code === 'NFI' ? NFI=NFI+1:NFI=NFI)
            }
                return (
            <BrowserRouter className="">
             <div className="container ">      
            <div className="cards mr">
            <div className="card">
            <p className="card_head">DEL</p>
                <p className="card_no">{DEL}</p >
            </div>
            <div className="card">
            <p className="card_head">INT</p>
                <p className="card_no">{INT}</p >
            </div>
            <div className="card">
            <p className="card_head">OOD</p>
                <p className="card_no">{OOD}</p >
            </div>
            <div className="card">
            <p className="card_head">DEX</p>
                <p className="card_no">{DEX}</p >
            </div>
            <div className="card">
            <p className="card_head">NFI</p>
            <p className="card_no">{NFI}</p >
            </div>
            </div>
            </div>   
            
            <Hero/>
        
            </BrowserRouter>
                
            );
        }
}

export default HeroSection;