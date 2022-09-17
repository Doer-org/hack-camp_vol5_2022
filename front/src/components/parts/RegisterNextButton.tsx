import { Link } from 'react-router-dom'
import {FC} from "react"

interface IProps {
    path: string
  name: string
}

export const RegisterNextButton: FC<IProps> = ({ path, name }) => {
  return (
    <Link to={`${path}`}>
      <button
        className="
          mt-16 py-2 px-8 mb-4 
          inline-block 
          rounded shadow-lg 
          bg-purple 
          text-2xl text-white font-semibold 
          transition 
          hover:translate-y-0.5 hover:bg-thick-purple hover:shadow-sm">
        {name}
      </button>
    </Link>
  )
}
