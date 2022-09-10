import { GithubAuthProvider 
} from 'firebase/auth'
import { FB } from '@/firebase/client'
import * as TE from 'fp-ts/TaskEither'
export type UserId = string
export const login = () : TE.TaskEither<Error, UserId> => {  
  const auth = FB.auth() 
  const provider =  new GithubAuthProvider()  
  return TE.tryCatch(
    async () => {  
      const cred = await auth.signInWithPopup(provider)
      const uid =  cred.user?.uid
      if (typeof uid === "undefined") {
        throw Error("uidを取得できませんでした．")
      }
      return uid
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