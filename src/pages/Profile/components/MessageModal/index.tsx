import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  SvgClose,
  SvgSend,
} from '../../../../components/Header/components/Icon'
import {
  getDialogs,
  sendMessageDialog,
  startDialog,
} from '../../../../redux/reducer/dialog'
import cl from './MessageModal.module.scss'

interface IProps {
  clickHandler: () => void
  id: number
  userName: string
}
const MessageModal: FC<IProps> = ({ clickHandler, id, userName }) => {
  const location = useNavigate()
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()

  const sendNewMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(startDialog(id))
    dispatch(sendMessageDialog(id, message))
    dispatch(getDialogs())
    setMessage('')
    location('/messages')
  }

  return (
    <div className={cl.modal}>
      <div className={cl.window}>
        <button onClick={clickHandler} className={cl.close}>
          <SvgClose />
        </button>
        <h3>Написать сообщение {userName}</h3>
        <form onSubmit={sendNewMessage} className={cl.form}>
          <input
            autoComplete='off'
            autoFocus={true}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name='message'
          ></input>
          <button>
            <SvgSend />
          </button>
        </form>
      </div>
    </div>
  )
}

export default MessageModal
