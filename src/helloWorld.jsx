import React, { Component } from 'react'

class HelloWord extends Component {
    clickHander = () => {
        console.log(this.props)
    }

    render() {
        return (
            <div onClick={this.clickHander}>{this.props.name} say:HelloWord</div>
        )
    }
}


export default HelloWord;