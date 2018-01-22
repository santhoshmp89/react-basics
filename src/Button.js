import React from 'react';

const Button = (props) => {
  return(
    <button>
     I {props.children} React
    </button>
  )
}

const ButtonContent = (props) => {
  return(
    <p>Button text Added</p>
  )
}

export {Button, ButtonContent}


