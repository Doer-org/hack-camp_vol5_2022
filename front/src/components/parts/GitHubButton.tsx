import { Link } from 'react-router-dom'
import {FC} from "react"
import github from '../../assets/img/github_logo_button.png'

interface IProps {
    path: string
}

export const GitHubButton: FC<IProps> = ({ path }) => {
  return (
    <Link to={`${path}`}>
      <button
                    className="
                            mb-4 flex
                            mx-auto
                            rounded 
                            bg-gray-900 py-2 px-8 text-2xl
                            font-semibold text-white shadow-lg transition
                            hover:translate-y-0.5 hover:bg-gray-700 hover:shadow-sm">
                <img src={ github } className="w-10 pr-2"/>
                GitHub
                </button>
    </Link>
  )
}
