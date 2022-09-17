import { GithubAuthProvider, signInWithRedirect, User, onAuthStateChanged } from 'firebase/auth'
import { Auth } from '@/firebase/client'

export const githubLogin = async () : Promise<void> => {
  const GHProvider =  new GithubAuthProvider()
  await signInWithRedirect(Auth, GHProvider)
}

export const logout = async () : Promise<void> => {
  await Auth.signOut()
}

export const detectStatusChanges = (func: (user: User|null) => void): void => {
  onAuthStateChanged(Auth, (user) => {
    func(user)
  })
}

// export const getCurrentUser = () : void => {
//   const auth = FB.auth()
//   auth.onAuthStateChanged()
//   // auth.on
// }