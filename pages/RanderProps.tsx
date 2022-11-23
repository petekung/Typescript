import React from "react";
class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src="https://pyxis.nymag.com/v1/imgs/51b/28a/622789406b8850203e2637d657d5a0e0c3-avatar-rerelease.1x.rsquare.w1400.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }
  }
  
  class MouseWithCat extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
  
          {/*
            We could just swap out the <p> for a <Cat> here ... but then
            we would need to create a separate <MouseWithSomethingElse>
            component every time we need to use it, so <MouseWithCat>
            isn't really reusable yet.
          */}
          <Cat mouse={this.state} />
        </div>
      );
    }
  }
  
  class MouseTracker extends React.Component {
    render() {
      return (
        <div>
          <h1>Move the mouse around!</h1>
          <MouseWithCat />
        </div>
      );
    }
  }
  export default MouseWithCat  ;