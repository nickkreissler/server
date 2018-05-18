import React from 'react'
import Option from './Option'
const Options = (props) =>  (
  <div>
      <div className = 'widget-header widget--header--border'>
        <h3 className = 'widget-header__title'>Your Options</h3>
        <button 
        onClick = {props.deleteprops}
        className = 'button button--link'
        >
          Remove All
        </button>
      </div>
      <div className = 'widget--options'>
        {props.options.length === 0 && <p className = 'center'>Add Items to make a decision</p>}
      </div>
      {
        props.options.map((option) => {
          return(
          <Option 
            key = {option} 
            option = {option}
            handleRemoveOne = {props.handleRemoveOne}
          />)
        }
      )
      }
      
  </div>      
)
export default Options