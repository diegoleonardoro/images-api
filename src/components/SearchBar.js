import React from "react";

class SearchBar extends React.Component {
  //this refers to the instance of the SearchBar class
  state = { term: "" };

  onFormSubmit = event => {
    // every time we use the 'function', it will lead to a broken value of "this", but with arrow functions, we can bind the value of "this" for all the code inside the function
    event.preventDefault();

    this.props.onSubmit(this.state.term); // "onSubmit" is a prop that was passed to "SearchBar" from "App" 8. It is a reference to onSearchSubmit() which was defined in the App component. Here, we are basically calling a function that was defined in the App component"this" when we are using props inside of a class based component
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/*
onChange
onClick
onSubmit
*/
