import React, { useState } from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const [search, setSearch] = useState('')
  const { setSearchTerm } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()

    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    setSearchTerm(search)
    // setSearch('')
  }
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          onChange={(event) => {
            setSearch(event.target.value)
          }}
          className="form-input search-input"
        ></input>
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  )
}

export default SearchForm
