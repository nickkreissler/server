import React from 'react';
const Option = (props) => (
  <div className = 'widget-header widget widget--options'>
    <p>{props.option}</p>
    <button onClick = {() => {
        props.handleRemoveOne(props.option)

      }
    }
    className = 'button button--link'
    >
      Remove
    </button>
  
  </div>
)
  

export default Option;