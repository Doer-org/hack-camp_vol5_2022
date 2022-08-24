import twitter from '../../assets/img/twitter-logo.png'
import github from '../../assets/img/github-logo.png'

const UserCard = ({ user }) => {
  return (
  <div className="transitionshadow-lg mt-2 cursor-pointer items-center rounded rounded-2xl bg-white p-2 shadow-lg hover:shadow-2xl sm:h-full sm:w-full">
    <div className="card flex flex-col items-center justify-center p-4 ">
        {user.github
          ? (
          <div className="profile mx-auto w-32 rounded-full py-2">
            <img alt="profile" src={`https://github.com/${user.github}.png`} className="rounded-full"/>
          </div>
            )
          : <div className="profile mx-auto w-32 rounded-full py-2">
              <img alt="profile" src={'https://avatars.githubusercontent.com/u/90210216?s=200&v=4'} className="rounded-full"/>
          </div>
        }

        <div className="name mt-4 text-2xl font-medium text-gray-800 ">
            <p>{user.name}</p>
        </div>

        <div className="work mt-4 text-gray-700">
            <p>{user.comment}</p>
        </div>

        {user.lang
          ? <div className="work mb-4 text-gray-700">
                <p>好きな言語 : {user.lang}</p>
            </div>
          : null
        }

        <div className="mt-2 flex text-sm">
            {user.twitter
              ? (
              <a
                className="mr-2 flex items-center hover:opacity-70"
                href={`https://twitter.com/${user.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-[20px]" src={twitter} alt="Twitter" />
                <span className="ml-1 text-[0.8rem]">@{user.twitter}</span>
              </a>
                )
              : null}
            {user.twitter
              ? (
              <a
                className="flex items-center hover:opacity-70"
                href={`https://github.com/${user.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-[20px]" src={github} alt="Twitter" />
                <span className="ml-1 text-[0.8rem]">@{user.github}</span>
              </a>
                )
              : null}
        </div>
    </div>
  </div>
  )
}
export default UserCard
