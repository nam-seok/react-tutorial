
import React from 'react'

function Wrapper ({childen}){
    const style={
        border: '2px solid black',
        padding: '16px'

    }
    return(
        <div style={style}>
            {childen}
        </div>
    )
}

export default Wrapper;