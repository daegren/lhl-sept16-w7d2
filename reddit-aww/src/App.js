import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm === null) {
      return
    }

    const url = `https://www.reddit.com/r/aww/search.json?q=${searchTerm}&restrict_sr=true&sort=top`

    fetch(url)
      .then(resp => resp.json())
      .then(body => body.data.children.map(obj => ({
        id: obj.data.id,
        thumbnail: obj.data.thumbnail
      })))
      .then(searchResults => setSearchResults(searchResults))
  }, [searchTerm])

  const handleSearch = term => {
    setSearchTerm(term)
  }

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <div>
        <h1>Reddit /r/aww Search Results for {searchTerm}</h1>
        <div>
          {searchResults.map(result => <ImageResult key={result.id} src={result.thumbnail} />)}
        </div>
      </div>
    </div>
  );
}

const ImageResult = ({ src }) => {
  return <img src={src} />
}

export default App;
