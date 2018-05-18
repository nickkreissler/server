import React from 'react';

export default class AddOption extends React.Component {
    state = {
      error: undefined
    }
    handleAddOption = (e) => {
      
      e.preventDefault();
      
      const option = e.target.elements.option.value.trim();
      const error = this.props.add(option);
      this.setState(() => ({ error }))
      if (!error) e.target.elements.option.value =''
    }
    render() {
  
      return (
        <div>
          <div>
            {this.state.error && <p className= 'center'>{this.state.error }</p>}
          </div>
          <form onSubmit = {this.handleAddOption}>
            <div className = 'widget-header widget'>
              <input className = 'stretch' type = 'text' name = "option"></input>
              <button className = 'button'>Add option</button>
            </div>
          </form>
        </div>
      )
    }
  }