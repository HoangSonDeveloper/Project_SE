import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <form className="form-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control form-search-input"
            aria-label="search-main"
            aria-describedby="button-addon2"
            placeholder="Tìm sản phẩm, danh mục hay thương hiệu..."
          />
          <button
            className="btn btn-outline-secondary form-search-btn"
            type="button"
            id="button-addon2"
          >
            <i className="fa fa-search me-2" />
          </button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
