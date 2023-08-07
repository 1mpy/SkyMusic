import React, { useContext } from 'react'

const UserContext = React.createContext(null) // контекст

// в каких-то случаях необходимо "достать" только юзера(объект), а где-то изменить его (юзера) с помощбю функции,
// поэтому разбил на 2 части
export function useUser() {
  const { user } = useContext(UserContext)
  return user
}

export function useSetUser() {
  const { setUser } = useContext(UserContext)
  return setUser
}

export default UserContext
