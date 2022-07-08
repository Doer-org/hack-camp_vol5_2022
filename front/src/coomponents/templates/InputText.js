import SecTitle from "../parts/SecTitle";

const InputText = ({ title, id, name,value, setValue }) => {
  return (
    <div className="my-4">
      <SecTitle title={title} />
      <input
        className="px-2 py-1 w-full mt-2 bg-thin-purple focus:outline-purple"
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={(e)=>{setValue(e.target.value)}}
      />
    </div>
  );
};
export default InputText;
