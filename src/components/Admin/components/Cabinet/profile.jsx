import React, { Component, Fragment } from "react";
import _ from "lodash";

import { getUser, editCabinet } from "../../../../services/userServices";
import { name } from "../../../../config.json";
import { Cabinet, UserInfo } from "./component/";

class Profile extends Component {
  state = {
    user: [],
    id: "",
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    address: "",
    email: "",
    work_position: "",
    phone_number: "",
    password: "",
  };
  async componentDidMount() {
    await getUser()
      .then((res) => res.data)
      .then((data) =>
        this.setState({
          user: _.find(data, ["last_name", localStorage.getItem(name)]),
        })
      );
    this.setState({
      id: this.state.user.id,
      first_name: this.state.user.first_name,
      last_name: this.state.user.last_name,
      age: this.state.user.age,
      gender: this.state.user.gender,
      address: this.state.user.address,
      email: this.state.user.email,
      work_position: this.state.user.work_position,
      phone_number: this.state.user.phone_number,
      password: this.state.user.password,
    });
  }
  handleUpdate = () => {
    const {
      id,
      first_name,
      last_name,
      age,
      gender,
      address,
      email,
      work_position,
      phone_number,
      password,
    } = this.state;
    const newData = {
      id: id,
      first_name: first_name,
      last_name: last_name,
      age: age,
      gender: gender,
      address: address,
      email: email,
      work_position: work_position,
      phone_number: phone_number,
      password: password,
    };
    editCabinet(newData);
  };
  handleNameChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  };
  handleAgeChange = (event) => {
    this.setState({ age: event });
  };
  handlePhoneChange = (event) => {
    this.setState({ phone_number: event });
  };
  handleCancel = () => {
    window.location.reload();
  };
  render() {
    const {
      user,
      first_name,
      last_name,
      gender,
      age,
      address,
      email,
      work_position,
      phone_number,
      password,
    } = this.state;
    return (
      <Fragment>
        <UserInfo data={user} />
        <Cabinet
          first_name={first_name}
          last_name={last_name}
          gender={gender}
          age={age}
          address={address}
          email={email}
          work_position={work_position}
          phone_number={phone_number}
          password={password}
          handleChange={this.handleNameChange}
          handleAgeChange={this.handleAgeChange}
          handlePhoneChange={this.handlePhoneChange}
          handleUpdate={this.handleUpdate}
          handleCancel={this.handleCancel}
        />
      </Fragment>
    );
  }
}

export default Profile;
