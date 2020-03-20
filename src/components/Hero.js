import React, {Component} from 'react';
import { Table } from 'reactstrap';

import axios from 'axios';

 class Hero extends Component {
  state = {
    orders: []
  }

  componentDidMount() {
    axios({ method: 'POST', url: 'https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank', headers: {Authorization: 'Bearer tTU3gFVUdP'}, data: { email: 'mayankmittal@intugine.com' } })
    .then(res=>{
            const orders = res.data.data;
            // console.log(orders[0])
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

  render() {
    return (
 //     <div>
 //         <ul>
 //             {this.state.orders.map(order => {
 //                 return <li>{order.awbno}</li>
 //             })}
 //         </ul>
 //     </div>
 <Table responsive >
 <thead >
   <tr>
     <th>AWB NUMBER</th>
     <th>TRANSPORTER</th>
     <th>SOURCE</th>
     <th>DESTINATION</th>
     <th>BRAND</th>
     <th>START DATE</th>
     <th>ETD</th>
     <th>STATUS</th>
   </tr>
 </thead>
 <tbody>
 {this.renderTableData()}
 </tbody>
</Table>
            
    )
  }
}
export default Hero;