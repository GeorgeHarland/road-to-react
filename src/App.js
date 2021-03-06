import React from 'react';
import InputWithLabel from './components/InputWithLabel';
import List from './components/List';

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])

  return [value, setValue]
}

const App = () => {

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectId: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org',
      author: 'DAAC',
      num_comments: 2,
      points: 5,
      objectId: 1,
    }
  ]

  // Stores the last search in the browser (+ 2nd part of handleSearch)
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search','React')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1>Search lists.</h1>

      <InputWithLabel
       id="search"
       label="Search"
       value={searchTerm} 
       onInputChange={handleSearch}
      />
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>

      <hr/>

      <List list={searchedStories} />
    </div>
  );
}

export default App;
