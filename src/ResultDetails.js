import { Component } from "react";
import { withRouter } from "react-router-dom";
import Pic from "./Pic";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class ResultDetails extends Component {
  state = { loading: true };

  async componentDidMount() {
    const animalId = this.props.match.params.id;
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/http://www.animaliarestapi.com/name/${animalId}`
    );

    const data = (await res.json())[0] || {};

    this.setState({
      loading: false,
      name: data.name,
      description: data.description,
      photo: data.photo,
    });
  }

  render() {
    const { name, description, photo } = this.state;

    // throw new Error('Error to test ErrorBoundary');

    return (
      <div>
        <ThemeContext.Consumer>
          {([theme]) => (<h2 style={{color: theme}}>{name}</h2>)}
        </ThemeContext.Consumer>
        <p>{description}</p>
        <Pic source={photo} description={name} />
      </div>
    );
  }
}

const ResultDetailsWithRouter = withRouter(ResultDetails);

export default function ResultDetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <ResultDetailsWithRouter />
    </ErrorBoundary>
  );
}
