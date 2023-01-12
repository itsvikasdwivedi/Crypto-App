import React from 'react'
import './selectBtn.css'
const SelectButton = ({children,selected,onClick}) => {

  return (
    <span
    onClick={onClick}
    className="selectButton"
    style={{
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
      widht: '100%',
      // margin: 5
    }}
    >
      {children}</span>
  )
}

export default SelectButton