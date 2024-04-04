import React, { Component } from "react";

export default class UserDetails extends Component {
  componentDidMount() {
    fetch("http://172.20.10.7:5000/userdata", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegistered");
        if (data.status === "ok") {
          alert("login success");
          window.localStorage.setItem("token", data.data);
          window.location.href = "/userDetails";
        }
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
      });
  }

  render() {
    return (
      <div>
        <h1>Email: {email}</h1>
        <h1>password: {password}</h1>
      </div>
    );
  }
}
