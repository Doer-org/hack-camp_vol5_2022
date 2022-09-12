import * as AuthService from '@/firebase/auth'
import { User } from "firebase/auth"

interface IApis {
	githubLogin: () => Promise<void>
	githubLogout: () => Promise<void>
  setUserToState: (func: (user: User|null) => void) => void
}

export const useFirebase = (): IApis => {
  const githubLogin = async (): Promise<void> => {
    await AuthService.githubLogin()
  }

  const githubLogout = async () : Promise<void> => {  
    return await AuthService.logout()
  }

  const setUserToState = (func: (user: User|null) => void): void => {
    AuthService.detectStatusChanges(func)
  }

  return { githubLogin, githubLogout, setUserToState }
}
