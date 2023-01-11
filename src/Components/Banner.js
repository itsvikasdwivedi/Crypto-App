import { Container } from '@mui/system'
import React from 'react'
import { Typography } from "@mui/material"
import Carousel from './Carousel'


const BannerStyle = {
  backgroundImage: "url(https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80)",

  height: "100vh",
  width: "100%",
}

const BannerContent = {
  height: 400,
  display: "flex",
  flexDirection: "column",
  paddingTop: 25,
  justifyContent: "space-around",
}
export const Banner = () => {
  return (
    <div style={BannerStyle}>
      <Container sx={BannerContent} >
        <div>
          <Typography variant='h2'
            style={{
              fontWeight: "bold",
              // marginBottom: 15,
              fontFamily: "Montserrat",
              color: "white",
              // marginLeft: 20
            }}>
            Crypto Bhaskar
          </Typography>
          <Typography variant='subtitle2'
            style={{
              color: "white",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              display: "flex",
              height: "10%",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center"
            }}>
            Get All The Information regarding your favorite Crypto
          </Typography>
        </div>
        <Carousel/>
      </Container>
    </div>
  )
}