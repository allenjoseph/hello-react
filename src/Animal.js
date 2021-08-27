const Animal = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      {props.description}
      <small>
        <strong>Class: </strong>
        {props.class}
      </small>
      <small>
        <strong>Order: </strong>
        {props.order}
      </small>
    </div>
  );
};

export default Animal;
