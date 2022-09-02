import React, { Component } from "react";

class ClassApi extends Component {
	constructor(props) {
		super();
		this.state = { users: [] };
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((data) => {
				data.json().then((result) => {
					this.setState({ users: result });
					console.log(result);
				});
			})
			.catch((error) => {
				console.log(error);
			});
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
              <hr/>
						</div>
					);
				})}
			</div>
		);
	}
}

export default ClassApi;
