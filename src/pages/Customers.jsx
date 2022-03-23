import React, { useEffect, useState} from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'

import api from '../services/api'

const customerTableHead = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
)



const Customers = () => {

    const [channelStatus, setChannelStatus] = useState([ {
        
      }]);

      console.log("olha aqui", channelStatus)

      for(var i = 0; i < channelStatus.length; i++) {
          console.log("o canal converted", i)

      }
    useEffect(() => {

        api
       .get('/monitoring/getChannelUnicastStatuses')
       
       .then((response) => {
         console.log("resultado", JSON.stringify(response.data.response))
         console.log("resultado2", response.data.response)
         setChannelStatus(response.data.response)
         // handle success
         console.log("aq oe", response.data);
         console.log("aq oe2", response);
 
   })
       .catch((error) => {
         // handle error
           console.log(error);
   })
       .then(function () {
         // always executed
   });
 
     }, [])
    
    return (
        <div>
            <h2 className="page-header">
                customers
            </h2>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
