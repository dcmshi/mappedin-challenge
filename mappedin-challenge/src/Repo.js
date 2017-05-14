import React, { Component } from 'react';

class Repo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlUrl: props.htmlUrl,
      fullName: props.fullName,
      description: props.description,
      starUrl: props.starUrl,
      starCount: props.starCount,
      forkUrl: props.forkUrl,
      forkCount: props.forkCount
    };
  }

  render() {
    return(
      <div className="Repo">
        <h2>
          <i className="fa fa-star"></i>
          <a href={this.state.htmlUrl}>{this.state.fullName}</a>
        </h2>
        <p>{this.state.description}</p>
        <div className="counters">
          <div className="stars">
            <i className="fa fa-star"></i>
            <a href={this.state.starUrl}>{this.state.starCount}</a>
          </div>
          <div className="forks">
            <i className="fa fa-code-fork"></i>
            <a href={this.state.forkUrl}>{this.state.forkCount}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Repo;
