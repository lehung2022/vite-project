import React from 'react'
import '../App.css'

const MyStyles = () => {
  const myStyle = {
    color: '#F0F3F4 ',
    backgroundColor: '#1F39F3',
    padding: '10px',
    fontFamily: 'Arial',
  }

  return (
    <div
      style={myStyle}
      // className="component-one"
    >
      I don't believe in "Love". It is nothing more than the lust between both
      genders
    </div>
  )
}

export default MyStyles;
