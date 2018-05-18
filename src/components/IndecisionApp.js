import React from 'react'
import AddOption from './addOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
class IndecisionApp extends React.Component {
    state = {
        options:[],
        selectedOption: undefined
    }
    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }))
    }
    handleAddOption = (option) => {
        if (option == '') {
        return "Please Enter Valid Option"
        } else if (this.state.options.indexOf(option) > -1) {
        return "Please Don't Enter the same Option twice"
        }
        this.setState((prevState) => ({options: prevState.options.concat(option) }))
    }
    handleRemoveModal = () => {
        this.setState(() => ({selectedOption: undefined }))
    }
    handlePickRandom = () => {
        const x = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[x]
        this.setState(() => ({
            selectedOption:option
        }))    
    }
    handleRemoveOne = (option) => {
        this.setState(() => ({ 
            options: this.state.options.filter((optione) => optione !== option)
        }))
    }
    componentDidMount() {
        try {
        const json = localStorage.getItem('options');
        const option = JSON.parse(json);
        if (option){
            this.setState(() => ({ options: option }))
        }
        } catch(e){

        }
    } 
    componentDidUpdate(prevProps,prevState) {
        console.log('hello')
        if (this.state.options.length !== prevState.options.length){
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options',json);
        }
    }
    
    render() {
        const title = "Indecisions";
        const subtitle = "Put your life in the hands of a Computer";
        return (
        <div>
            <Header subtitle = {subtitle} title = {title}/>
            <div className = 'container container__body'>   
                <Action
                handlePick = {this.handlePickRandom}
                hasOptions = {this.state.options.length > 0}
                />
                <div className = 'widget'>
                    <Options
                        handleRemoveOne = {this.handleRemoveOne}
                        deleteprops = {this.handleRemoveAll}
                        options = {this.state.options}
                        />
                
                    <AddOption
                    add = {this.handleAddOption}
                    />
                </div>
                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    removeModal = {this.handleRemoveModal}
                />
            </div>
        </div>
        
        )
    }
}

export default IndecisionApp