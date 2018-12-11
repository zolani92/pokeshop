import React, { Component, Fragment } from "react";
import TotalBar from "./components/totalBar";
import PokeCounters from "./components/pokeCounters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1, image: "/assets/pokeball1.png" },
      { id: 2, value: 0, image: "/assets/pokeball2.png" },
      { id: 3, value: 0, image: "/assets/pokeball3.png" },
      { id: 4, value: 0, image: "/assets/pokeball4.png" },
      { id: 5, value: 0, image: "/assets/pokeball5.png" }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <Fragment>
        <TotalBar
          totalCount={this.state.counters.reduce(
            (acc, curr) => acc + curr.value,
            0
          )}
        />
        <main className="container">
          <PokeCounters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;
