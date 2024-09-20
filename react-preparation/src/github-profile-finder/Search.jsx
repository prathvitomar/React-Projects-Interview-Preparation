import React from 'react'

function Search({
  value,
  type = "text",
  placeholder = "",
  onUserNameChange,
  findUser,
}) {
  return (
    <>
    <div>
      <input type={type} placeholder={placeholder} value={value} onChange={(e)=> onUserNameChange(e)}/>
      <button type='button' onClick={findUser}>Search</button>
    </div>
    </>
  )
}

export default Search