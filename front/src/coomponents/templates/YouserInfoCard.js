import YouserName from "../parts/YouserName";
import RadiusImage from "../parts/RadiusImage"

const YouserCard = ({list}) => {
  return (
    <div className="my-4 bg-thin-purple rounded-md px-4 py-2">
      <div className="flex">
        <RadiusImage name={list.name} img={list.img} />
        <YouserName name={list.name} />
      </div>
    </div>
  );
};
export default YouserCard;
