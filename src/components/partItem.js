//this is for each member of the items on the participant list sort of like a map 
import React, { Component } from 'react';
import  '../App.css';
import edit from '../edit.png';
import del from '../delete.png';


class Participant extends Component {
  deleteParti(id){
    //console.log('test'); we have to parse this function to two components 1. apptable and app
    this.props.onDelete(id);
  }
  render() {
    return (
        <div>
          <table className="tb3" >
            <tbody>
              <tr>
                <td>{this.props.member.name}</td>
                <td className="e">{this.props.member.emailaddress}</td>
                <td>{this.props.member.phonenumber}</td>
                <td className="ed"><a href="#" ><img alt="edit" src={edit} className="editbutt"/></a> <a href="#"  onClick={this.deleteParti.bind(this, this.props.member.id)}><img alt="delete" src={del} className="deletebutt"/></a></td>
              
              </tr>
            </tbody>
          </table>
    </div>
    );
  }
}


export default Participant;
