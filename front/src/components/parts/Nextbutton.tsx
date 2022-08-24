
import { Link } from 'react-router-dom'

function NextButton ({ path, name }) {
  return (
        <Link to={`${path}`} className="inline-block rounded rounded-full bg-purple py-4 px-14 text-2xl font-semibold font-bold text-white shadow-lg transition hover:translate-y-0.5 hover:bg-thick-purple hover:shadow-sm">
            {name}
        </Link>
  )
}

export default NextButton
