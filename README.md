This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# 学习React
### 修改state
    this.setState({
        name: 'newName'
    })
### 给jsx添加class样式
    为了区分ES6语法中的class关键字，当我们在jsx中给元素添加class时，需要使用className来代替
### ref
    在jsx中，可以给元素添加ref属性，而这些拥有ref属性的元素，会统一放在组件对象的refs中，因此，当想要访问对应的真实DOM时，则通过this.refs来访问即可
    ref的值不仅仅可以为一个名字，同时还可以为一个回调函数，这个函数会在render渲染时执行，也就是说，每当render函数执行一次，ref的回调函数也会执行一次
### 生命钩子
    -- 组件第一次渲染完成的前后时刻，
    componentWillMount 渲染完成之前
    componentDidMount 渲染完成之后
    -- 组件属性(我们前面提到的props与state)更新的前后时刻
    componentWillReceiveProps接收到一个新的props时，在重新render之前调用
    shouldComponentUpdate 接收到一个新的state或者props时，在重新render之前调用
    componentWillUpdate 接收到一个新的state或者props时，在重新render之前调用
    componentDidUpdate 组件完成更新之后调用
    -- 组件取消挂载之前(取消之后就没必要提供钩子函数了)
    componentWillUnmount
`我们在实际开发中，常常需要通过ajax获取数据，而数据请求的这个行为，则最适合放在componentDidMount中来执行。`

## 组件之间的交互
### 父子交互
    App.js父组件 Dialog.jsx 子组件 Button.jsx 子组件
    情景 在点击Button组件按钮后获取数据 弹出模态框 此时Button不能点击
    在父组件中state  loading 控制按钮中的动画 并将button设置为disable 将dialog 设为true 模态框弹出
`不到万不得已，并不建议使用react-redux，除非你的项目确实非常庞大了，需要管理的状态非常多了，已经不得不使用，一定要记住，react-redux这类状态管理器是最后的选择`

## http请求
    安装axios
 ` 1、 若非特殊情况，尽量保证数据请求的操作在componentDidMount中完成。`
` 2、 react中的列表渲染通常通过调用数组的原生方法map方法来完成，具体使用方式可参考上例。`
`3、为了确保性能，被渲染的每一列都需要给他配置一个唯一的标识，正入上栗中的key={i}。我们来假想一个场景，如果我们在数组的最前面新增一条数据，如果没有唯一的标识，那么所有的数据都会被重新渲染，一旦数据量过大，这会造成严重的性能消耗。唯一标识会告诉react，这些数据已经存在了，你只需要渲染新增的那一条就可以了。`
`4、如果你想要深入了解该组件的具体变化，你可以在render方法中，通过console.log(this.state)的方式，观察在整个过程中，组件渲染了多少次，已经每一次this.state中的具体值是什么，是如何变化的。`

## react路由
    react-router 4.0 
    模块化路由

## 状态管理
### 下载mobx mobx-react
``` 1.定义你的状态并使其可观察 ```
import {observable} from 'mobx';

var appState = observable({
    timer: 0
});
``` 2.创建一个响应状态更改的视图 ```
import {observer} from 'mobx-react';

@observer
class TimerView extends React.Component {
    render() {
        return (
            <button onClick={this.onReset.bind(this)}>
                Seconds passed: {this.props.appState.timer}
            </button>
        );
    }

    onReset() {
        this.props.appState.resetTimer();
    }
};

ReactDOM.render(<TimerView appState={appState} />, document.body);
``` 3.修改状态 ```
appState.resetTimer = action(function reset() {
    appState.timer = 0;
});

setInterval(action(function tick() {
    appState.timer += 1;
}), 1000);
