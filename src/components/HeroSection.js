import React, { Component, PropTypes } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './Hero';
import { Timeline,Icon } from 'rsuite';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardHeader, CardGroup
  } from 'reactstrap';
import ReactDOM from 'react-dom'
import axios from 'axios';
class HeroSection extends Component {
    
    state = {
        orders: []
      }

      

      componentDidMount()
      {
        axios({ method: 'POST', url: 'https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank', headers: {Authorization: 'Bearer tTU3gFVUdP'}, data: { email: 'mayankmittal@intugine.com' } })
        .then(res=>{
                const orders = res.data.data;
                
                this.setState({orders})
                console.log(this.state.orders)
    
               
      })
          
      }
      renderTableData() {
        return this.state.orders.map((order, index) => {
           // const { order.extra_fields.expected_delivery_date}=order;
           const {_id, awbno, carrier, from, to ,pickup_date , extra_fields,current_status} = order
          
           return (
           
              <tr key={_id}>
                
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

     render(){

        const TimelineList = () => {
            return(
                <Timeline>
                <Timeline.Item dot={<Icon icon="check-circle" style={{ color: 'green' }} />}>
                  <p>2018-03-01</p>
                  <p>Your order starts processing</p>
                </Timeline.Item>
                <Timeline.Item dot={<Icon icon="exclamation-triangle" style={{ color: 'orange' }} />}>
                  <p>2018-03-02</p>
                  <p>Order out of stock</p>
                </Timeline.Item>
                <Timeline.Item dot={<Icon icon="info-circle" style={{ color: 'blue' }} />}>
                  <p>2018-03-10</p>
                  <p>Arrival</p>
                </Timeline.Item>
                <Timeline.Item dot={<Icon icon="check-circle" style={{ color: 'green' }} />}>
                  <p>2018-03-12</p>
                  <p>Order out of the library</p>
                </Timeline.Item>
                <Timeline.Item dot={<Icon icon="spinner" spin style={{ borderRadius:'50%' }} />}>
                  <p>2018-03-15</p>
                  <p>Sending you a piece</p>
                </Timeline.Item>
              </Timeline>
            );
          }

      
      

      

        return (
            <BrowserRouter>

                <div>
            
                      
    
  
      
    <div className="cards">
          <div className="card">
            <p className="card_head">DEL</p>
            <p className="card_no">916</p >
          </div>
          <div className="card">
            <p className="card_head">DEL</p>
            <p className="card_no">916</p >
          </div>
          <div className="card">
            <p className="card_head">DEL</p>
            <p className="card_no">916</p >
          </div>
          <div className="card">
            <p className="card_head">DEL</p>
            <p className="card_no">916</p >
          </div>
          <div className="card">
            <p className="card_head">DEL</p>
            <p className="card_no">916</p >
          </div>
        </div>
     
    


    <div class="row row-content ">
       
    <div class="col-sm-4 col-md-4 order-2">
        <TimelineList/>
    </div>
    <div class="col-12 col-sm-4 order-sm-last col-md-7">
        <Hero/>
    </div>

    </div>
           
    </div>

              

                   


            </BrowserRouter>
           
          );
          }
        }

export default HeroSection;