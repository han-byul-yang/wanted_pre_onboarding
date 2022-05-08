import { useState } from "react"
import styles from './Input.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

export default function Input() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [valid, setValid] = useState(true)
  const [checking, setChecking] = useState(false)
  const [show, setShow] = useState(false)

  const handleEmailChange = (e) => {
    const emailval = e.target.value
    setEmail(emailval)
    setValid(true)
    if ((/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(emailval)) {
      setChecking(true)
    } else {
      setChecking(false)
    }
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const checkValid = () => {
    setValid(checking)
  }

  const toggleEye = () => {
    setShow(prevState => !prevState)
  }

  return (
    <div className={styles.form}>
      <form className={styles.emailForm} >
        <p className={styles.title}>E-mail</p>
        <input className={styles.write} type="email" placeholder='E-mail' value={email} onChange={(e) => handleEmailChange(e)} onBlur={checkValid} />
        <div className={styles.font} style={checking ? {color: '#42b883'} : {color : '#757a79'}}><FontAwesomeIcon icon={faCircleCheck} /></div>
      </form>
      <p className={styles.validMessage}>{!valid && 'invalid email address'}</p>
      <form className={styles.passwordForm}>
        <p className={styles.title}>Password</p>
        <input className={styles.write} type={show ? "text" : "password"} placeholder='Password' value={password} onChange={(e) => handlePasswordChange(e)} />
        <div className={styles.font} aria-hidden="true" onClick={toggleEye}><FontAwesomeIcon icon={show ? faEye : faEyeSlash} /></div>
      </form>
    </div>
  )
}