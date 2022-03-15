import React from 'react';
import Search from './components/Search';
import List from './components/List';

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

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1>Search lists.</h1>

      <Search currentSearch={searchTerm} onSearch={handleSearch}/>

      <hr/>

      <List list={searchedStories} />
    </div>
  );
}

export default App;
