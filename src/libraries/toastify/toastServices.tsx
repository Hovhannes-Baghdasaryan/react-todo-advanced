import { ToastContainer } from 'react-toastify'

import { CloseIcon } from 'assets'

const ToastServices = () => (
  <ToastContainer
    draggable
    rtl={false}
    theme='dark'
    pauseOnHover
    closeOnClick
    autoClose={3000}
    pauseOnFocusLoss
    newestOnTop={false}
    position='top-right'
    hideProgressBar={false}
    toastStyle={{
      alignItems: 'center',
      background: '#081320',
    }}
    closeButton={
      <>
        <CloseIcon />
      </>
    }
  />
)

export default ToastServices
