import SecTitle from "../parts/SecTitle";

const InputText = ({ title, id, name }) => {
  return (
    <div className="my-4">
      <SecTitle title={title} />
      <input
        className="px-2 py-1 w-full mt-2 bg-thin-purple focus:outline-purple"
        type="text"
        id={id}
        name={name}
      />
    </div>
  );
};
export default InputText;
