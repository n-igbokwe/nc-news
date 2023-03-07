import React from 'react'
import { useEffect} from 'react'
import { getUser } from '../utils/api'

function User({username, setUsername, allUsers, setAllUsers}) {



    useEffect(() => {
      getUser()
      .then(({users}) => {
        setAllUsers(users)
       users.map((user) => {
        if (user.username === username){
           setUsername(user)
        } 
        return user
        })
      })
    }, [username, setAllUsers, setUsername])

    const changeUser = (e) =>{
      const newUser = allUsers.filter((user) => {
        return user.username === e.target.value;
      })
      setUsername(newUser)

    }

  return (
    <section>
    <h2>{username.username}'s settings page</h2>
    <label htmlFor='users'> Change User: </label>
    <select name="users" id="users" onChange={changeUser}>
      {allUsers.map((user, index) => {
        return (
          <option key={index} value={user.username}>{user.username}</option>
        )
      })}
    </select>
    </section>
  )
}

export default User