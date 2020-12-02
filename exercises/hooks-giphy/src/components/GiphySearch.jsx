import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
const apiKey = '';
// https://developers.giphy.com/docs/api#quick-start-guide

const GiphySearch = () => {
  const inputRef = useRef(); // uncontrolled form

  const [data, setData] = useState({
    url: '',
    title: '',
    searchTerm: 'Baby Goat',
  });

  const { url, title, searchTerm } = data; // destructure state

  useEffect(() => {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchTerm}&rating=pg`
      )
      .then((res) => {
        const { data: gif } = res.data;
        setData({
          ...data,
          url: gif.images.fixed_height.url,
          title: gif.title,
        });
        inputRef.current.value = ''; // reset
      })
      .catch((err) => console.log(err));
  }, [searchTerm]); //

  const updateSearchTerm = (e) => {
    e.preventDefault();
    // ref value updating state
    setData({ ...data, searchTerm: inputRef.current.value });
  };

  return (
    <div className="wrapper">
      <h1>Random Giphy Searcher</h1>
      <form onSubmit={updateSearchTerm}>
        <div>
          <label htmlFor="searchTerm">Search Term:</label>
          <input
            type="text"
            id="searchTerm"
            placeholder="Baby goat"
            ref={inputRef} // connection to ref
          />
        </div>
        <button type="submit">Search</button>
      </form>
      {url ? (
        <section>
          <img src={url} alt={title} />
          <p>{title}</p>
        </section>
      ) : (
        <div className="loading">
          <i className="fa fa-spinner fa-spin fa-3x" aria-hidden="true" />
        </div>
      )}
    </div>
  );
};

export default GiphySearch;
