import React from 'react'

const List = (props) => {

    return (
        <ul>
            {props.items.map((item) => 
            <li key={item}>{item}<button onClick={() => props.removeItem(item)}>X</button></li>)}
        </ul>
    )
}

export default List