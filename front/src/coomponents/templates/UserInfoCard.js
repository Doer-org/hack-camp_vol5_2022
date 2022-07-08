import UserName from "../parts/UserName";
import RadiusImage from "../parts/RadiusImage";

const UserCard = ({ user }) => {
  return (
    <div className="my-4 bg-thin-purple rounded-md px-4 py-2">
      <div className="flex">
        <RadiusImage style="mr-7" name={user.name} github={user.github} />
        <UserName style="text-[1.3rem] flex items-center" name={user.name} />
      </div>
      {user.sns ? (
        <div className="mt-2 text-sm">
          <span>SNS：</span>
          <a href={user.sns} target="_blank" rel="noopener noreferrer">
            {user.sns}
          </a>
        </div>
      ) : null}
    </div>
  );
};
export default UserCard;
