import React from 'react'

function GithubProfile({
  photoUrl="",
  name = "",
  followers = "0",
  following = "0",
  bio = ""
}) {
  return (
    <>
    <div className=''>
      <div>
        <img src={photoUrl} width="100px" alt={name} />
      </div>
      <div className='flex'>
        <h2>{name}</h2>
        <h4>Follwers : {followers}</h4>
        <h4>Follwing : {following}</h4>
        <p>{bio}</p>
      </div>
    </div>
    </>
  )
}

export default GithubProfile