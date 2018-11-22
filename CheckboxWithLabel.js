import React from 'react';
import ReactDOM from 'react-dom';

export default class CheckboxWithLabel extends React.Component {
    constructor(props){
        super(props);
        this.state = {isCheckboxOn:false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){this.setState(prevState => ({isCheckboxOn:!prevState.isCheckboxOn}));}

        render() {
            return(
                <label htmlFor="name">
                    {this.state.isCheckboxOn?'labelOn':'labelOff'}
                    <input type ="checkbox" id = "name" onClick={this.handleClick}/>
                </label>
            )}
    }
   

