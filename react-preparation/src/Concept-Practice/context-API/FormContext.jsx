import React, { useContext, useState } from 'react'

function FormContext() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const {setUsername} = useContext(FormContext)
  function handleSubmit(){
    e.preventDefault();
    setUsername(name);
  }
  return (
    <>
        <form onSubmit={handleSubmit}>
          <input type="text" name='username' value={name} onChange={(e)=> setName(e.target.value)}/>
          <input type="password" name='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
          <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default FormContext