const SearchResults = ({ animals }) => {
  return (
    <div>
      {!animals.length ? (
        <h2>No animals found!</h2>
      ) : (
        animals.map((o) => (
          <div key={o.name}>
            <h2>{o.name}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResults;
