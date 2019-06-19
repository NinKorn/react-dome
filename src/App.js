// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>react</h2>
//         <code>src/App.js</code>
//       </header>
//     </div>
//   );
// }

// export default App;


// --- 父子组件传值
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import routes from './assets/router';
import Button from './Button';
import Dialog from './Dialog';
// import Home from './Home';
// import News from './News';
import './style.css';



// @observer
class App extends Component {
    state = {
        loading: false,
        dialog: false,
        message: 'xxx'
    }

    submit = () => {
        this.setState({
            loading: true
        })

        // 模拟数据请求的过程，假设数据请求会经历1s得到结果
        setTimeout(() => {

            // 通过随机数的方式模拟可能出现的成功与失败两种结果
            const res = Math.random(1);
            if (res > 0.5) {
                this.setState({
                    dialog: true,
                    message: '提交成功！'
                })
            } else {
                this.setState({
                    dialog: true,
                    message: '提交失败！'
                })
            }
            this.setState({ loading: false })
        }, 1000)
    }

    close = () => {
        this.setState({
            dialog: false
        })
    }

    render() {

        const { loading, dialog, message } = this.state;

        return (
            <div className="app-wrap">
                <Button loadingButton={loading} submitButton={this.submit}>提交</Button>
                {dialog && <Dialog message={message} close={this.close} />}
                {/* <News></News> */}
                <Router>
                    <div>
                        <Switch>
                            {/* //主要逻辑在这里 */}
                            {
                                routes.map((item, i) => {
                                    if (item.exact) {
                                        return <Route exact path={item.path} component={item.component} key={i} />
                                    } else {
                                        return <Route path={item.path} component={item.component} key={i} />
                                    }
                                })
                            }
                        </Switch>
                    </div>
                </Router>
            </div>
        )
       
    }
}

export default App;
// --- 父子组件传值
