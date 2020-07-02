import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { BASE_URL } from "../../../utils/api";
import FlexDiv from '../../design-system/FlexDiv';
import { Card } from '@material-ui/core';
import moment from 'moment'
const AdminDonations = () => {
    const [donations, setDonations] = useState()
    useEffect(()=>{
        Axios.get(BASE_URL + "/api/donations").then((res)=>{
            console.log(res);
            if(res.data.success) {

                setDonations(res.data.donations)
            }
        })
    })
    return (
        <div className="container">
            <h1>Admin Donations</h1>
            {donations && donations.map((donation, i) =>{
                return <FlexDiv vert style={{marginBottom:20}}>
                    <Card style={{padding:20}}>
   <p>{donation.title}</p>
                    <p>{donation.name}</p>
                    <p>{donation.amount}</p>
                    <p>fulfilled: {donation.fulfilled ? "true" : "false"}</p>

                    <p>{moment(donation.date).format('YYYY-MM-DD HH:mm:ss')}</p>
                    <p>{donation._id}</p>

                    </Card>
                 
                </FlexDiv>

            })}


        </div>
    )
}

export default AdminDonations