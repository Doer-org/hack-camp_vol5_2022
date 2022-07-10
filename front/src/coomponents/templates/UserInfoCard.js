import UserName from "../parts/UserName";
import RadiusImage from "../parts/RadiusImage";
import twitter from "../../assets/img/twitter-logo.png";
import github from "../../assets/img/github-logo.png";

const UserCard = ({ user }) => {
  return (
  <div className="grid items-center bg-white mt-2 p-2 shadow-lg hover:shadow-2xl rounded cursor-pointer transitionshadow-lg rounded-2xl">
    <div className="card flex flex-col items-center justify-center p-4 ">
        {user.github ? (
          <div className="profile mx-auto rounded-full py-2 w-32">
            <img alt="profile" src={`https://github.com/${user.github}.png`} className="rounded-full"/>
          </div>
        ):
          <div className="profile mx-auto rounded-full py-2 w-32">
              <img alt="profile" src={`https://avatars.githubusercontent.com/u/90210216?s=200&v=4`}  className="rounded-full"/>
          </div>
        }

        <div className="name text-gray-800 text-2xl font-medium mt-4 ">
            <p>{user.name}</p>
        </div>
        <div className="work text-gray-700 mt-4">
            <p>Front-end developer 🧑‍💻</p>
        </div>
        <div className="work text-gray-700 mb-4">
            <p>好きな言語 : Golang, Python, C</p>
        </div>
        <div className="mt-2 text-sm flex">
            {user.twitter ? (
              <a
                className="flex items-center mr-2 hover:opacity-70"
                href={`https://twitter.com/${user.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-[20px]" src={twitter} alt="Twitter" />
                <span className="ml-1 text-[0.8rem]">@{user.twitter}</span>
              </a>
            ) : null}
            {user.twitter ? (
              <a
                className="flex items-center hover:opacity-70"
                href={`https://github.com/${user.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-[20px]" src={github} alt="Twitter" />
                <span className="ml-1 text-[0.8rem]">@{user.github}</span>
              </a>
            ) : null}
        </div>
    </div>
  </div>
  );
};
export default UserCard;

