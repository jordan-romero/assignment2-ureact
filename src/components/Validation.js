import React from 'react'

const Validation = (props) => {

    if (props.text <= 5) {
        return <p>Text too Short</p>
    } else {
    return (
        <p>
          Text long enough  
        </p>
    )
    }
}

export default Validation
