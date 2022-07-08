import UserName from "../parts/UserName";
import RadiusImage from "../parts/RadiusImage"

const UserCard = ({list}) => {
  return (
    <div className="my-4 bg-thin-purple rounded-md px-4 py-2">
      <div className="flex">
        <RadiusImage name={list.name} img={list.img} />
        <UserName name={list.name} />
      </div>
    </div>
  );
};
export default UserCard;
