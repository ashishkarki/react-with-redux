import { useState } from 'react'

function SearchBar({ onSearchSubmit }) {
  const [searchBarSt, setSearchBarSt] = useState({
    searchTerm: '',
  })

  const onFormSubmit = (e) => {
    e.preventDefault()

    onSearchSubmit(searchBarSt.searchTerm)
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            placeholder="Search..."
            value={searchBarSt.searchTerm}
            onChange={(e) => setSearchBarSt({ searchTerm: e.target.value })}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
