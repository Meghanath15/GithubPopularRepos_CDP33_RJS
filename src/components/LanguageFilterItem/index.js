import './index.css'

const LanguageFilterItem = props => {
  const {isActive, languageFilterDetails, setActiveLanguageFilterId} = props
  const {id, language} = languageFilterDetails
  const buttonClassName = isActive
    ? 'lang-button active-lang-button'
    : 'lang-button'

  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button
        type="button"
        className={buttonClassName}
        onClick={onClickLanguageFilter}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
