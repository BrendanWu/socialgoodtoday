import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { BASE_URL } from '../../utils/api'
import { Avatar } from '@material-ui/core'
import FlexDiv from '../design-system/FlexDiv'

const LatestDonations = ()=> {
    const [donations, setDonations] = useState()
    useEffect(()=>{
        Axios.get(BASE_URL + "/api/donations").then((res)=>{
            if(res.data.success){
                setDonations(res.data.donations.reverse())
            }
        })
    })
    return (
        <div className="site-section fund-raisers">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <h2>Donor Ledger</h2>
            </div>
          </div>
          <div className="row">
              {donations && donations.map((donation)=> {
                  return (
                      <div className="col-md-6 col-lg-3 mb-5">
              <div className="person-donate text-center bg-light pt-4">
                  <FlexDiv justify="center">
                      
                      <Avatar
                alt={`Avatar`}
                src={donation.avatar}
                style={{width:50,height:50}}
              />
                  </FlexDiv>
              
                <div className="donate-info">
                  <h2>{donation.name ?donation.name: "Anonymous"}</h2>
                  <span className="time d-block mb-3">Donated 3 hours ago</span>
                  <div className="donate-amount d-flex">
                    <div className="label">Donated</div>
                    <div className="amount">${donation.amount}</div>
                  </div>
                </div>
              </div>    
            </div>
          
                  )
              })}
            
          </div>
        </div>
      </div> 
    )
}

export default LatestDonations;