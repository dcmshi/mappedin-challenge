import React, { Component } from 'react';

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

export default Repos;
