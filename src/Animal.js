const Animal = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <small>{props.family}</small>
    </div>
  );
};

export default Animal;
