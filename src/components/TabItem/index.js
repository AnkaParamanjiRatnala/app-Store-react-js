import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  const buttonStyle = isActive ? 'select-button' : ''

  return (
    <li>
      <button
        type="button"
        onClick={onClickTabItem}
        className={`list-button ${buttonStyle}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
