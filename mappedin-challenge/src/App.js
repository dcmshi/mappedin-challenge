import React, { Component } from 'react';

import './App.css';


const url = `https://api.github.com/users/axiomaticdesign/starred`;

function getStarredRepos(){
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      const filteredResponse = responseJson.map((repoInfo) => {
        return {
          fullName: repoInfo.full_name,
          htmlUrl: repoInfo.html_url,
          description: repoInfo.description,
          starUrl: repoInfo.stargazers_url,
          starCount: repoInfo.stargazers_count,
          forkUrl: repoInfo.forks_url,
          forkCount: repoInfo.forks_count
        };
      })
    return filteredResponse;
    })
    .catch((error) => { 
      console.error(error); 
    });
}

class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    getStarredRepos().then((entries) => {
      this.setState({items: entries})
    })
  }

  render() {
    return(
      <div className='Repos'>
        {this.state.items.map((entry, key) => {
          return(<Repo {...entry} key={key}/>)
        })}
      </div>
    );
  }
}

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

class App extends Component {
  render() {
    return (
      <div className='App'>
          <h1>Starred repos for <span>axiomaticdesign</span></h1>
          <Repos/>
      </div>
    );
  }
}

export default App;
