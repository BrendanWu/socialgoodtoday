import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { BASE_URL } from "../../../utils/api";
import FlexDiv from '../../design-system/FlexDiv';
import { Card } from '@material-ui/core';
import moment from 'moment'
const AdminUsers = () => {
    const [users, setUsers] = useState()
    useEffect(()=>{
        Axios.get(BASE_URL + "/api/users").then((res)=>{
            console.log(res);
            if(res.data.success) {

                setUsers(res.data.users)
            }
        })
    })
    return (
        <div className="container">
            <h1>Admin Users</h1>
            {users && users.map((user, i) =>{
                return <FlexDiv justify="space-between" align="center" style={{marginBottom:20, padding:20, border:"1px solid gray"}}>
          
                <img src={user.avatar} style={{width:50}}/>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    
                 
                 
                </FlexDiv>

            })}


        </div>
    )
}

export default AdminUsers