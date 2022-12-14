import React from 'react'
import '../App.css'

const MyStyles = () => {
  const myStyle = {
    color: '#F0F3F4 ',
    backgroundColor: '#1F39F3',
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
      I don't believe in "Love". It is nothing more than the lust between both
      genders
      </h1>
    </div>
  )
}

export default MyStyles;
