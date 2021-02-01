import React from 'react'

const Char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'

    }
    console.log(props.char)
    return (
        <div style={style}>
            {props.char}
        </div>
    )
}

export default Char
