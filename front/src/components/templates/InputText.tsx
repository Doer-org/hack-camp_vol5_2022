import SecTitle from '../parts/SecTitle'
const InputText = ({ title, id, name, value, setValue, pValue }) => {
  return (
    <div className="my-6 text-gray-500">
      <SecTitle title={title} />
      <input
        className="mt-2 w-full border px-2 py-1 focus:outline-purple"
        type="text"
        id={id}
        name={name}
        value={value}
        placeholder={pValue}
        onChange={(e) => { setValue(e.target.value) }}
      />
    </div>
  )
}
export default InputText
