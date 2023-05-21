import React, { useState } from 'react'
import {Card} from '@mui/material'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeSecondary from 'src/pages/HomeSecondary';

const Container=styled.div`
    width:100%;
    display: flex;
    justify-content:center;
    background-color: red;
    height: 100vh;
    align-items: center;
`;

const Button=styled.button`
    padding: 10px;
    margin: 10px;
    cursor: pointer;
`;


function Home() {
const [userData,setUserData]=useState(localStorage.getItem('userData'));

  return <HomeSecondary/>
  return (
    <Container>
        {/* <Button > <Link to='/dashboard/products'> Users</Link></Button> */}
        {/* <Button><Link to="/dashboard/user">Admin</Link></Button> */}
        {/* <Button>clients</Button> */}
    {/* <HomeSecondary/> */}

        <Button> <Link to='/dashboard/blog'> Drive</Link></Button>
       {
      
          !userData &&  <Button><Link to="/login">Login</Link></Button>

      } 
    </Container>
  )
}

export default Home