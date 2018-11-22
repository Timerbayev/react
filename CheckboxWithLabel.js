import React from 'react';

export default class CheckboxWithLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: false};
        this.labelOn = 'On';
        this.labelOff = 'Off';
        this.HandleClick = this.HandleClick.bind(this)
        this.HandleChange = this.HandleChange.bind(this)

    }
    HandleClick = () => {
        };
    HandleChange = () => {
        this.setState({value:!this.state.value})};

    render() {

        return (
            <form onClick={this.HandleClick}>
             <label htmlFor="name">
                 {this.state.value ? this.labelOn : this.labelOff}
                <input type="checkbox" onChange={this.HandleChange}
                       value = {this.state.value} id="name"/>

            </label>
            </form>)
    }
}


