import React from 'react'
import '../App.css'

const MyStyles = () => {
  const myStyle = {
    color: '#F0F3F4 ',
    backgroundColor: '#F65504',
    padding: '10px',
    fontFamily: 'Arial',
    fontSize: '14px',
    
  }

  return (
    <div
      style={myStyle}
      // className="component-one"
    >
      <h1>
      I am more familiar with React than Angular now. Angular is kind of slow
      </h1>
    </div>
  )
}

export default MyStyles;
