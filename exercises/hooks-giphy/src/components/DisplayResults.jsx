import React from 'react';

const DisplayResults = ({ url, title }) => {
  return (
    <section>
      <img src={url} alt={title} />
      <p>{title}</p>
    </section>
  );
};

export default DisplayResults;
