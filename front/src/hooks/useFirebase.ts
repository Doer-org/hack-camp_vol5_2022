
import * as AG from '@/firebase/authGithub'
import * as E from 'fp-ts/Either' 

interface IApis {
	githubLogin: () => Promise<AG.UserId>
	githubLogout: () => Promise<void>
}

export const useFirebase = (): IApis => { 
  const githubLogin = async () : Promise<AG.UserId> => {  
    return await AG.login()().then((ret) => { 
      if (E.isLeft(ret)) {
        throw ret.left
      } else {
        return ret.right
      }
    })
  }
  const githubLogout = async () : Promise<void> => {  
    return await AG.logout()
  }
  return { githubLogin, githubLogout }
}
