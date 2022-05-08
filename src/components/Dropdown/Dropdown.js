import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './Dropdown.module.scss'

export default function Dropdown() {
  const [select, setSelect] = useState('All Symbols')
  const [inputValue, setInputValue] = useState('')
  const [toggle, setToggle] = useState(false)

  const words = ['All Symbols', 'BTCUSD.PERP', 'ETHUSD.PERP', 'BCHUSD.PERP', 'LTCUSD.PERP', 'XRPUSD.PERP']

  const handleToggleClick = () => {
    setToggle((preState) => !preState)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSelectClick = (e) => {
    setSelect(e.target.innerHTML)
  }

  return (
    <form className={styles.form}>
      <div className={styles.topForm}>
        <div className={styles.top} aria-hidden onClick={handleToggleClick}>
          {select}
          <div className={styles.carnetDownIcon}>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
        <div className={styles.dropForm} style={toggle ? { display: 'inline-block' } : { display: 'none' }}>
          <input
            className={styles.input}
            type='text'
            placeholder='Search Color'
            value={inputValue}
            onChange={(e) => handleInputChange(e)}
          />
          <div className={styles.magnifyingGlassIcon}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className={styles.dropWords}>
            {words.map(
              (word) =>
                word.toLowerCase().includes(inputValue.toLowerCase()) && (
                  <button
                    className={styles.word}
                    key={`list-${word}`}
                    type='button'
                    onClick={(e) => handleSelectClick(e)}
                  >
                    {word}
                  </button>
                )
            )}
          </div>
        </div>
      </div>
    </form>
  )
}
