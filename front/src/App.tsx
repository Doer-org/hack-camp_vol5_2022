import ReactDOM from 'react-dom/client'
import './index.css'
import { Routing } from './Routing'
import { Provider } from "react-redux"
import { store } from "@/store/store"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <div className="text-gray-700">
      <Routing />
    </div>
  </Provider>
)
