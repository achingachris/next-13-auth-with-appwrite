import React from "react"

export const UserContext = React.createContext({
  user: null,
  setUser: () => {}
})

export default ({ children }) => {
  const [user, setUser] = React.useState(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
