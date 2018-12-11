import React, { Component } from "react";
import PokeCounter from "./pokeCounter";

class PokeCounters extends Component {
  render() {
    const {
      counters,
      onReset,
      onIncrement,
      onDelete,
      onDecrement
    } = this.props;

    return (
      <div>
        <button className="btn btn-primary btn-sm-m-2" onClick={onReset}>
          Reset
        </button>
        <div>
          {counters.map(counter => (
            <PokeCounter
              key={counter.id}
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PokeCounters;
