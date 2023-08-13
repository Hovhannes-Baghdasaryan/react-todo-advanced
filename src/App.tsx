import { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from 'libraries/redux'
import { PageLayout } from 'components'
import ToastServices from 'libraries/toastify/toastServices'

import 'styles/index.global.scss'

const App: FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <PageLayout />

      <ToastServices />
    </BrowserRouter>
  </Provider>
)

export default App
