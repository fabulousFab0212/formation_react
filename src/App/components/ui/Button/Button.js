import React from 'react'
import style from './Button.module.css'
import PropTypes from 'prop-types';

const Button = (props)=>{
    console.log(props)
    return (
        <button
            className={style.Button}
            style={ {...props.style, backgroundColor:props.bgColor, color:props.color} }
            type={props.type}
            onClick={(evt)=>{
                props.onButtonClicked();
            }}
        >
            {props.children}
        </button>
    );
}

Button.propTypes={
    children: PropTypes.any.isRequired,
    bgColor: PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
    style : PropTypes.object,
    onButtonClicked : PropTypes.func.isRequired
}

Button.defaultProps={
    bgColor : 'red',
    children : 'defaultProps children',
    color : 'white',
    type: 'button',
    onButtonClicked : ()=>{}
}
export default Button