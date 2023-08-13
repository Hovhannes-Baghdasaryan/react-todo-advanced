import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import type { TText } from './types'
import classNames from 'classnames'

const Text: FC<TText> = ({ tagName, text = '', className = '', dataTestId }) => {
  const { t } = useTranslation()

  const Tag = tagName
  const content = <>{t(text)}</>

  return Tag ? (
    <Tag className={classNames({ [className]: className })} data-test-id={dataTestId}>
      {content}
    </Tag>
  ) : (
    content
  )
}

export default Text
