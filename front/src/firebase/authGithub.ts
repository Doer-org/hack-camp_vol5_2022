import { GithubAuthProvider } from 'firebase/auth'
import { FB } from '@/firebase/client'
import * as TE from 'fp-ts/TaskEither'


export const login = () : TE.TaskEither<Error, firebase.default.User> => {  
  const auth = FB.auth() 
  const provider =  new GithubAuthProvider()  
  return TE.tryCatch(
    async () => {  
      const cred = await auth.signInWithPopup(provider) 
      if (cred.user === null) {
        throw Error("uidを取得できませんでした．") 
      } else {
        return cred.user 
      } 
    },
    (e) => {   
      return Error ("ログインに失敗しました．") 
    }
  ) 
}

export const logout = async () : Promise<void> => { 
  const auth = FB.auth()
  await auth.signOut() 
}

// export const getCurrentUser = () : void => {
//   const auth = FB.auth()
//   auth.onAuthStateChanged()
//   // auth.on
// }