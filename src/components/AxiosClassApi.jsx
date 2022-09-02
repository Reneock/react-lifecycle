/*import React, { Component } from 'react';
import axios from 'axios';

class AxiosClassApi extends Component {

  constructor(props) {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      this.setState({ users: response.data });
      console.log(response.data);
    })

    .catch((error) => {
      console.log(error);
    }
    );
  }

  render() {
    return (
      <div>
        <h1>users</h1>
				{this.state.users.map((item, index) => {
					return (
						<div key={item.id}>
							<h1>name : {item.name}</h1>
							<h2>website : {item.website}</h2>
							<h2>username : {item.username}</h2>
							<h2>phone : {item.phone}</h2>
							<hr />
						</div>
					);
				})}
      </div>
    );
  }
}

export default AxiosClassApi;*/
