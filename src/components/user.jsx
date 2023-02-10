import React from 'react'
import DeleteComment from './deleteComment'
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
    }, [username])


  return (
    <section>
    <h2>{username.username}'s settings page</h2>
    <DeleteComment />
    </section>
  )
}

export default User