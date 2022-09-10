import { TwitterAuthProvider 
} from 'firebase/auth'
import { FB } from '@/firebase/client'
import * as TE from 'fp-ts/TaskEither'
type UserId = string
export const login = () : TE.TaskEither<void, UserId> => {  
  const auth = FB.auth() 
  const provider =  new TwitterAuthProvider() 
  return TE.tryCatch(
    async () => {   
      const cred = await auth.signInWithPopup(provider)
      console.log(cred)
      const uid = cred.user?.uid
      // TwitterAuthProvider.credentialFromResult(cred)
      // TwitterAuthProvider.credentialFromResult(cred)
      console.log("aaaa")
      if (typeof uid === "undefined") {
        throw Error("uidを取得できませんでした．")
      }
      return uid
    },
    (e) => {  
    }
  ) 
}

export const logout = async () : Promise<void> => { 
  const auth = FB.auth()
  await auth.signOut() 
}
 