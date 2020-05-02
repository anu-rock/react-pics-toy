import React from 'react';

class SearchBar extends React.Component {
  state = { keyword: '' };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.keyword);
  };

  onInputChange = (e) => {
    this.setState({ keyword: e.target.value });
  };

  render() {
    return (
      <div className="ui segment" style={{ marginTop: '10px' }}>
        <form
          className="ui form"
          onSubmit={this.onFormSubmit}
          data-testid="form"
        >
          <div className="ui field">
            <label htmlFor="keyword">Enter search term:</label>
            <input
              autoFocus
              id="keyword"
              type="text"
              value={this.state.keyword}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
