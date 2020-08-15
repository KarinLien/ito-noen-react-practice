import React from "react";

class Toggle extends React.Component {
  //將render 當作 props 傳入
  static defaultProps = { onToggle: () => {} };
  state = {
    on: false
  };
  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on)
    );
  };

  render() {
    return this.props.renderToggle({ on: this.state.on, toggle: this.toggle });
  }
}

const A = () => (
  <div>
    <Toggle
      onToggle={on => console.log("toggle", on)}
      renderToggle={({ on, toggle }) => (
        <div>
          {on ? "The button is on" : "The button is off"}
          <hr />
          <button onClick={toggle}>{on ? "click on" : "click off"}</button>
        </div>
      )}
    />
  </div>
);

export default A;
