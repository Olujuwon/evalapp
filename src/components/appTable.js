import React, { Component } from 'react';
import Participant from './partItem';
import  '../App.css';

class PartList extends Component {
  deleteParti(id){
    this.props.onDelete(id);
  }
  render() {
    let members;
    if(this.props.participants){
      members = this.props.participants.map(member => {
        //console.log(member);
        return(
         <Participant onDelete={this.deleteParti.bind(this)} key={member.id} member={member}  className="tb" />
        );
      });
    }
  return (
      <div className="tb2">
        {/*Table Header comes Here ... */}
        <table className="tb5" >
            <thead>
              <tr>
                <td>Name</td>
                <td>Email Address</td>
                <td>Phone Number</td>
                <td></td>
              </tr>
            </thead>
          </table>
        {members}
      </div>
    );
  }
}


export default PartList;