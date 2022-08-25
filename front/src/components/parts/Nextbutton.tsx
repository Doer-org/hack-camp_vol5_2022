
import { Link } from 'react-router-dom'
import {FC} from "react"

interface IProps {
  path: string
  name: string
}

export const NextButton: FC<IProps> = ({ path, name }) => {
  return (
    <Link to={`${path}`}>
      <button className="inline-block w-48 rounded-full bg-doer-purple py-3.5 font-bold tracking-wider text-white duration-200 hover:opacity-80">
        {name}
      </button>
    </Link>
  )
}

export default NextButton
