import React, { Component } from 'react'

class HelloWord extends Component {
    state = {
        name: this.props.name1,
        isfalg: true
    }
    clickHander = () => {
        if (this.state.isfalg) {
            this.setState({
                name: this.props.name1,
                isfalg: !this.state.isfalg
            })
        } else {
            this.setState({
                name: this.props.name2,
                isfalg: !this.state.isfalg
            })
        }

    }

    render() {
        return (
            <div onClick={this.clickHander}> 
                Hello! 我是
                <h2>{this.state.name}</h2>
            </div>
        )
    }
}


export default HelloWord;