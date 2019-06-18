import React from 'react'

// class Button extends Component {
//     state = {}
//     clickHander = () => {
//         console.log('ok');
//         // const { children, loading, submit } = props
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={ this.clickHander }></button>
//             </div>
//         )
//     }
// }

const Button = (props) => {
    const { children, loadingButton, submitButton } = props
    return (
        <button onClick={submitButton} disabled={loadingButton ? 'disabled' : null}>
            {loadingButton && <i className="loading"></i>}
            {children}
        </button>
    )

}

export default Button;