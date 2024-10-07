import React from 'react';

var Button = ({title, task}) => {
    return (
        <button onClick = { task }>{ title }</button>
    );
}

export default Button;