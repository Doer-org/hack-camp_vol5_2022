import UserName from "../parts/UserName";
import RadiusImage from "../parts/RadiusImage";
import twitter from "../../assets/img/twitter-logo.png";
import github from "../../assets/img/github-logo.png";

const UserPrepareCard = ({ user }) => {
  return (

    <div className="shadow-lg hover:shadow-xl my-4 border-double rounded-md w-72 px-4 py-2">
      <div className="flex justify-between">
        <div className="flex">
          <RadiusImage
            style="mr-7 w-[50px]"
            name={user.name}
            github={user.github}
          />
          <UserName style="text-[1.3rem] flex items-center" name={user.name} />
        </div>
        <div>
          <span className=" h-10 leading-10 font-bold text-green-500"> Ready ✔</span> 
        </div>

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
            <span className="ml-1 text-[0.8rem]">{user.twitter}</span>
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
            <span className="ml-1 text-[0.8rem]">{user.github}</span>
          </a>
        ) : null}
      </div>
    </div>

  );
};
export default UserPrepareCard;

