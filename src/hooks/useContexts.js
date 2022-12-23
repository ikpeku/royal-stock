import { useContext } from "react"
import { userContext } from "../contexts/userContext"

export const UserContexts = () => {

    const user = useContext(userContext)

    if(!user) throw Error("out of context area")
  return user;
}
