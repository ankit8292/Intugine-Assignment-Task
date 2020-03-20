import React, {Component} from 'react';
import { Table } from 'reactstrap';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import destination from '../img/destination.svg'
import warehouse from '../img/warehouse.svg'
import axios from 'axios';
import {Link} from 'react-router-dom';

class Hero extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            results: [],
            scan_rev: []   
        }
           
    }
    
    fetchDetails = (result) =>
    {
      const scan_rev = result.scan;
      this.setState({scan_rev})
    
    }
    
    
    
       
    
    
          componentDidMount()
          {
            axios({ method: 'POST', url: 'https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank', headers: {Authorization: 'Bearer tTU3gFVUdP'}, data: { email: 'mayankmittal@intugine.com' } })
            .then(res=>{
                    const results = res.data.data;
                    const fetch = res.data.data[0].scan;
                    const scan_rev = fetch.reverse();
                    this.setState({results})
                    this.setState({scan_rev})
        
                   
          })
        }
    
        TableData()
        {
            return this.state.results.map((result, index) => {
             
               const {_id, awbno, carrier, from, to ,pickup_date , extra_fields,current_status} = result
               return(
               
                <tr key={index}  onClick={() => this.fetchDetails(result)} >
                    <Link to="/" style={{textDecoration:" none"}}>   <td className="td">{awbno}</td>  </Link>
                     <td className="td">{carrier}</td>
                     <td className="td">{from}</td>
                     <td className="td">{to}</td>
                     <td className="td">{carrier}</td>
                     <td className="td">{pickup_date}</td>
                     <td className="td">{extra_fields? extra_fields.expected_delivery_date: ''}</td>
                     <td className="td" style = {current_status==='Delivered'?{color:'green'}:null}>{current_status}</td>
                     
                </tr>
                 
               )
            })
         }
        
        
    
    
    
     TimeLineData()
     {
        return this.state.scan_rev.map((scan, index) =>
        {
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
        
        )
    }
    
     
    
     
    
      render()
      {
   
            const TimelineList = () => {
            return(
            
                <div>
                <Timeline lineColor={'#ddd'}>
                    <div className="timeline_image1">
                        <img src={destination} alt="" />
                    </div>
                    {this.TimeLineData()}

                    <div className="timeline_image2">
                        <img src={warehouse} alt="" />
                    </div>
                </Timeline> 
            </div>
          
          );
        }
    
    
    
        return (
   
            <div class="row row-content ">
                <div class="col-12 col-sm-6">
                    <TimelineList/>
                </div>
                <div class="col-12 col-sm-4 order-sm-last col-md-6">
                    <Table className="table table-fixed">
                        <thead >
                            <tr>
                                <th className="th">AWB NUMBER</th>
                                <th className="th">TRANSPORTER</th>
                                <th className="th">SOURCE</th>
                                <th className="th">DESTINATION</th>
                                <th className="th">BRAND</th>
                                <th className="th">START DATE</th>
                                <th className="th">ETD</th>
                                <th className="th">STATUS</th>
                            </tr>
                        </thead>
                        <tbody >
                            {this.TableData()}
                        </tbody>
                    </Table>
        
                </div>
    
        </div>         
        )
      }
    }
        
export default Hero;