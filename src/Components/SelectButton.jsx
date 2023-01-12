import { useMediaQuery } from '@mui/material'
import React from 'react'
import './selectBtn.css'
const SelectButton = ({children,selected,onClick}) => {
  const matches = useMediaQuery('(min-width:600px)')

  return (
    <span
    onClick={onClick}
    className="selectButton"
    style={
      {...matches?{
      border: '1px solid gold',
      borderRadius: '5px',
      padding: '10px',
      paddingLeft: '20px',
      paddingRight: '20px',
      fontFamily: 'Montserrat',
      cursor: 'pointer',
      backgroundColor: selected ? 'gold' : '',
      color: selected ? 'black' : '',
      fontWeight: selected ? 700: 500,
      // margin: 5
      width: "22%"
      }:{
        padding : 0,
        paddingLeft: 0,
        paddingRight: 0,
      border: '1px solid gold',
      cursor: 'pointer',
      }}
    }
    >
      {children}</span>
  )
}

export default SelectButton