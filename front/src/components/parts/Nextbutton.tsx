
import { Link } from 'react-router-dom'
import {FC} from "react"

interface IProps {
  path: string
  name: string
}

export const NextButton: FC<IProps> = ({ path, name }) => {
  return (
    <Link to={`${path}`}>
      <button
        className="inline-block w-1/2 rounded-full bg-doer-purple py-8 text-4xl font-bold tracking-wider text-white duration-200 hover:opacity-80 lg:w-48 lg:py-3.5 lg:text-base"
      >
        {name}
      </button>
    </Link>
  )
}

export default NextButton
