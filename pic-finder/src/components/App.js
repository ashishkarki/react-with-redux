import { useState } from 'react'

import SearchBar from './SearchBar/SearchBar'
import imgFetcher from '../api/imgFetcher'
import ImageList from './ImageList/ImageList'

const App = () => {
  const [images, setImages] = useState([])

  const onSearchSubmit = async (term) => {
    const response = await imgFetcher.get('/search/photos', {
      params: {
        query: term,
      },
    })

    setImages(response.data.results)
  }

  return (
    <div
      className="ui container"
      style={{
        marginTop: '0.65rem',
      }}
    >
      <SearchBar onSearchSubmit={onSearchSubmit} />

      <ImageList images={images} />
    </div>
  )
}

export default App
