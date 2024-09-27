import React from 'react'

function Search({
    type,
    onChange,
    className,
    onClick
}) {

    return (
        <>
            <div className={`${className} `}>
                <input 
                type={type}
                placeholder='Enter City'
                onChange={(e)=> onChange(e.target.value)}
                />
                <button onClick={()=> onClick()}>Search</button>
            </div>
        </>
    )
}

export default Search