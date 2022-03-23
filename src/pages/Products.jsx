import React, {useEffect, useState} from 'react';

import api from '../services/api2'

const Products = () => {

    const [channelD, setChannelData] = useState([ {
        channels_active: '',
        channels_allowed_timeshit: '',
        channels_avsync_check: '',
        channels_avsync_setup: '',
        channels_broadcast: [],
        channels_channels_categories: [],
        channels_devices: [],
        channels_enabled_broadcast: '',
        channels_enabled_multicast: '',
        channels_enabled_unicast: '',
        channels_epg_custom_image: '',
        channels_epg_image: '',
        channels_epg_screenshot: '',
        channels_forced_pin: '',
        channels_id: '',
        channels_include_in_recommendations: '',
        channels_logo: '',
        channels_logo_widescreen: '',
        channels_multicast: [{}],
        channels_name: '',
        channels_note: '',
        channels_notify_on_fail: '',
        channels_order: '',
        channels_package_override_enabled: '',
        channels_packages: [],
        channels_packages_locked: [],
        channels_rating: '',
        channels_recording_expiration: '',
        channels_remote: '',
        channels_restart_on_fail: '',
        channels_source: '',
        channels_type: '',
        channels_unicast: [{}],
    }]);

    //console.log("o canal está aqui", channelD)

  useEffect(() => {
      api
      .post('/channel/getData', { "data":{ "channelsId": 122 } })
      .then((response) => {
          //console.log("resultado", JSON.stringify(response.data.response))
          //console.log("resultado2", response.data.response)
          console.log("o response deu:", response.data.response)
        setChannelData(response.data.response)
          // handle success
          //console.log("aq oe", response.data);
          //console.log("aq oe2", response);

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
                Channel Details
            </h2>

            <div className="row" style={{display: 'flex'}}>
                <div className="col-12">
                    <div className="card">
                        <div className="card__body" style={{display: 'flex',}}>
                            <div className="col-4" style={{
                                
                            }}>
                            <img src={channelD.channels_logo} style={{width: 200}}></img>

                            </div>
                            <div className="col-8" >
                                <h2 style={{paddingLeft: '15%'}}>
                                    {channelD.channels_name} ({channelD.channels_id})
                                </h2>
                            </div>

                            <div className="col-2" style={{ paddingLeft: '10%'}}>
                                {channelD.channels_active == 1 ? 
                                 
                                 <div style={{
                                     width: 15,
                                     height: 15,
                                     backgroundColor: '#0da332',
                                     borderRadius: 30,
                                 }}></div>
                                :
                                 ''
                                }
                                {channelD.channels_active == 0 ? 
                                 
                                 <div style={{
                                     width: 15,
                                     height: 15,
                                     backgroundColor: '#ff0000',
                                     borderRadius: 30,
                                 }}></div>
                                :
                                 ''
                                }
                                {channelD.channels_active > 1 ? 
                                 
                                 <div style={{
                                    width: 15,
                                    height: 15,
                                    backgroundColor: '#ffd400',
                                    borderRadius: 30,
                                }}></div>
                                :
                                    ''
                                }

                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
