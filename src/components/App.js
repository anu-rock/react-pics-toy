import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList/ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchBarSubmit = async (keyword) => {
    const results = await unsplash.get('/search/photos', {
      params: { query: keyword },
    });
    this.setState({ images: results.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchBarSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
