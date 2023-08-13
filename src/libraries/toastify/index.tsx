import { toast } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'

import { ErrorIcon, InfoIcon, TickPrimaryIcon, WarningIcon } from 'assets'

import ToastTexts from './ToastTexts'
import { EToastVersions } from './types'
import styles from './Toast.module.scss'

export { EToastVersions }

export const showNotification = (type: EToastVersions, title: string, description?: string) => {
  injectStyle()

  const toastContent = (color: string) => <ToastTexts color={color} title={title} description={description} />

  switch (type) {
    case EToastVersions.success:
      toast(toastContent('#47CB92'), {
        type: EToastVersions.success,
        icon: <TickPrimaryIcon className={styles.success} />,
      })
      break

    case EToastVersions.error:
      toast(toastContent('#F27D7D'), {
        type: EToastVersions.error,
        icon: <ErrorIcon className={styles.error} />,
      })
      break

    case EToastVersions.warning:
      toast(toastContent('#F0B774'), {
        type: EToastVersions.warning,
        icon: <WarningIcon className={styles.warning} />,
      })
      break

    case EToastVersions.info:
      toast(toastContent('#5C90DD'), {
        type: EToastVersions.info,
        icon: <InfoIcon className={styles.info} />,
      })
      break

    default:
      break
  }
}
