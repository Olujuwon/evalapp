import React, { Component } from 'react';
import uuid from 'uuid';
import  '../App.css';


class AddParticipant extends Component {
  constructor(){
    super();
    this.state={
      newparticipant:{}
    }
  }
  handleSubmit(e){
    if(this.refs.name.value === ""){          //validation of form
      alert("Name Field Can Not Be Empty");
    } else {
      this.setState({newparticipant:{
        id: uuid.v4(),
        name:this.refs.name.value,
        emailaddress:this.refs.email.value,
        phonenumber:this.refs.phone.value
      }}, function(){
        //console.log(this.state); //we parse this state unto the state on App.js
        this.props.addedparticipant(this.state); //this is to parse the new participant object unto the app.js page
        //this.props.AddParticipant();
      });
    }
    e.preventDefault();
  }
  render() {
  return (
      <div className="form-style-6">
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text"   placeholder="Full Name" ref="name" />
            <input type="text"  ref="email" placeholder="Email Address"/>
            <input type="text"  ref="phone" placeholder="Phone Number"/>
            <input type="submit" value="Add new" />   {/* remember to change this to button*/}
        </form>
      </div>
    );
  }
}
export default AddParticipant;
