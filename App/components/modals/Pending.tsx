import React from 'react'

import { backgroundColor } from '../../globalStyles'

import Message from './Message'

interface Props {
  visible: boolean
  banner?: string
  message?: string
  onPress?: () => void
}

const Pending: React.FC<Props> = ({ visible, banner, message, onPress }) => {
  return (
    <Message
      visible={visible}
      banner={banner || 'Pending'}
      message={message || ''}
      icon="alarm"
      backgroundColor={backgroundColor}
      onPress={onPress}
    />
  )
}

export default Pending