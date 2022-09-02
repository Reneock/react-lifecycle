import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

function AxiosFunctionApi() {
  const [users, setUsers] = useState([]);

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
			setUsers(response.data);
			console.log(response.data);
		});
	}, []);

  return (
    <div>
      <h1>todos</h1>
			{users.map((item, index) => {
				return (
					<div key={item.id}>
						<h1>body : {item.body}</h1>
						<h2>id : {item.id}</h2>
						<h2>title : {item.title}</h2>
						<h2>user id : {item.userId}</h2>
						<hr />
					</div>
				);
			})
      }
    </div>
  );
}

export default AxiosFunctionApi;