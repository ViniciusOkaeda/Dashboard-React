import React, {useEffect, useState} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import api from '../services/api'

import '../components/status-card/statuscard.css'

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";


import { Navigation, Pagination, Scrollbar, } from 'swiper';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, RadialBarChart, Tooltip, Legend, RadialBar, BarChart, Bar, CartesianGrid  } from 'recharts';

                                                              

const chartOptions = {
    series: [{
        name: 'Clientes Online',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: 'Clientes na Loja',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Agos', 'Set']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            "username": "João doe",
            "order": "490",
            "price": "R$15,70"
        },
        {
            "username": "Fabiana iva",
            "order": "250",
            "price": "R$12,51"
        },
        {
            "username": "Luana Gabriela",
            "order": "120",
            "price": "R$10,84"
        },
        {
            "username": "Maria Julieta",
            "order": "110",
            "price": "R$9,25"
        },
        {
            "username": "Fernanda Maki",
            "order": "80",
            "price": "R$8,80"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "João doe",
            date: "17 Jun 2021",
            price: "R$15,70",
            status: "enviado"
        },
        {
            id: "#OD1712",
            user: "Fabiana iva",
            date: "1 Jun 2021",
            price: "R$12,51",
            status: "pago"
        },
        {
            id: "#OD1713",
            user: "Luana Gabriela",
            date: "27 Jun 2021",
            price: "R$10,84",
            status: "pendente"
        },
        {
            id: "#OD1712",
            user: "Maria Julieta",
            date: "1 Jun 2021",
            price: "R$9,25",
            status: "pago"
        },
        {
            id: "#OD1713",
            user: "Fernanda Maki",
            date: "27 Jun 2021",
            price: "R$8,80",
            status: "recusado"
        }
    ]
}

const orderStatus = {
    "enviado": "primary",
    "pendente": "warning",
    "pago": "success",
    "recusado": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)


const Dashboard = () => {
    
    const [transcoderusage, setTranscoderusage] = useState([ {
        transcoders_api:'', 
        transcoders_catchup_active: '',
        transcoders_catchup_storages_id: '',
        transcoders_detectors_id: '',
        transcoders_id: '',
        transcoders_live_storages_id: '',
        transcoders_name: '',
        transcoders_usage: {
          cpu: '',
          cpu_load: '',
          ram: '',
          time: '',
          nvidia: [{
          }],
          transcoding: {
            cpu_decoders: '',
            deinterlacing: '',
            gpu_decoders: '',
            gpu_encoders: '',
            gpu_encoders_h264: '',
            gpu_encoders_hevc: '',
            live_bandwidth: '',
            marlin_channels: '',
            recording_bandwidth: '',
            unicast_channels: '',
          },
    
        },
        transcoders_vod_active: '',
        transcoders_vod_storages_id: '',
    
      }]);
    


      const json = JSON.stringify(transcoderusage);
      console.log("aqui", transcoderusage)

    const themeReducer = useSelector(state => state.ThemeReducer.mode)
    
    useEffect(() => {

       api
      .get('/transcoder/getAllTranscodersUsage')
      
      .then((response) => {
        console.log("resultado", JSON.stringify(response))
        console.log("resultado2", response.data.response)
        setTranscoderusage(response.data.response)
        // handle success
        console.log("aq oe", response.data);

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
            <h2 className="page-header">Dashboard</h2>

        <div className='status-card ' >
                
            <div className="status-card__icon " >

            </div>
                <div className="status-card__info " >
                    <div style={{width: '100%', height: 200}}>
                        <span></span>
                    </div>
                    
                    <span></span>
                </div>
        </div>


            <div className='status-card' >
                
            <div className="status-card__icon" >

            </div>
            {transcoderusage.map((item) => (
                <div className="status-card__info" key={item.transcoders_id}>
                    <div style={{width: '100%', height: '100%'}}>
                        <span>{item.transcoders_api}</span>
                    </div>
                    
                    <span></span>
                </div>
            ))}
        </div>

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} >
            <Grid container spacing={3} >
                <Grid item xs={12} md={12} lg={12} >
                    <Box >
                        <div  style={{width: '100%', height: '100%'}}>
                            <Swiper
                            modules={[Navigation, Pagination, Scrollbar,]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            {transcoderusage.map((item) => (
                                <SwiperSlide >

                            <div className='status-card' key={item.transcoders_api}>
                                <div className='status-card__info' style={{width: '100%', height: '100%'}} >
                                    <p>{item.transcoders_api}</p>



                                </div>                            
                            </div>
                                </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>
                    </Box>
                </Grid>

            </Grid>
        </Container>
           

                


            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Monitoramento */}
              <Grid item xs={12} md={12} lg={12} >
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    {transcoderusage.map((item) => (
                                    <StatusCard>

                <SwiperSlide key={item.transcoders_api} style={{display: 'flex', flexDirection: 'column'}}>

                    <h2 
                    style={{textAlign: 'center', fontWeight: 'bold', fontSize: 50, color: 'C2C2C2'}}>
                        {item.transcoders_name}</h2>

                </SwiperSlide>

                                    </StatusCard>
            ))}
                </Swiper>

            </Grid>
            </Grid>
            </Container>  
            
            <Box sx={{ display: 'flex' }}>

            <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} style={{zIndex: 0}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12}>

                </Grid>
            </Grid>

        </Container>
          </Box>
          </Box>







        </div>
    )
}

export default Dashboard
