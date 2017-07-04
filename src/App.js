import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import AddParticipant from './components/addPart';
import PartList from './components/appTable';
//import Participant from './components/partItem';

class App extends Component {
  constructor(){
    super();
    this.state = {
      participants: [
        
          {"id": 1, name: 'Kaila Di Baudi', emailaddress: "kdi0@furl.net", phonenumber: "62-(345)261-7886"},
{"id":2,"name":"Francklin Exon","emailaddress":"fexon1@behance.net","phonenumber":"385-(302)108-3519"},
{"id":3,"name":"Carine Congdon","emailaddress":"ccongdon2@earthlink.net","phonenumber":"86-(356)678-9036"},
{"id":4,"name":"Shelley Benka","emailaddress":"sbenka3@wisc.edu","phonenumber":"383-(557)320-8996"},
{"id":5,"name":"Ira Tolotti","emailaddress":"itolotti4@prweb.com","phonenumber":"506-(757)584-9271"},
{"id":6,"name":"Seward Peoples","emailaddress":"speoples5@bing.com","phonenumber":"670-(612)554-5275"},
{"id":7,"name":"Natalie Howerd","emailaddress":"nhowerd6@posterous.com","phonenumber":"687-(619)716-1023"},
{"id":8,"name":"Leanor Farguhar","emailaddress":"lfarguhar7@deliciousdays.com","phonenumber":"48-(145)121-4829"},
{"id":9,"name":"Anitra Crisell","emailaddress":"acrisell8@aol.com","phonenumber":"55-(322)193-6140"},
{"id":10,"name":"Hermia Roly","emailaddress":"hroly9@usa.gov","phonenumber":"7-(274)308-4796"},
{"id":11,"name":"Wake VanBrugh","emailaddress":"wvanbrugha@nbcnews.com","phonenumber":"81-(522)947-0307"},
{"id":12,"name":"Yetty Badgers","emailaddress":"ybadgersb@latimes.com","phonenumber":"66-(804)265-8874"},
{"id":13,"name":"Glendon Currom","emailaddress":"gcurromc@163.com","phonenumber":"880-(858)743-6014"},
{"id":14,"name":"Monti Allsepp","emailaddress":"mallseppd@lycos.com","phonenumber":"1-(713)857-6911"},
{"id":15,"name":"Thomasin Anand","emailaddress":"tanande@posterous.com","phonenumber":"7-(119)252-3785"},
{"id":16,"name":"Rhys Firminger","emailaddress":"rfirmingerf@privacy.gov.au","phonenumber":"504-(299)372-8664"},
{"id":17,"name":"Cassaundra Stonhard","emailaddress":"cstonhardg@disqus.com","phonenumber":"351-(592)619-7453"},
{"id":18,"name":"Haskell Craney","emailaddress":"hcraneyh@state.gov","phonenumber":"55-(980)486-5351"},
{"id":19,"name":"Vitoria Lobbe","emailaddress":"vlobbei@cnet.com","phonenumber":"81-(730)481-5209"},
{"id":20,"name":"Joaquin Ebbotts","emailaddress":"jebbottsj@ucla.edu","phonenumber":"51-(282)794-3383"}
        
      ]
    }
  }
  handleaddedparticipant(addedparticipant){
    //console.log(addedparticipant); //here we update/push the added/new participant to the list hj
    let Participants = this.state.participants;
    Participants.push(addedparticipant);
    this.setState({Participants:Participants});

  }

  handleDeleteParti(id){
  let Participants = this.state.participants;
  let index = Participants.findIndex(x => x.id === id);
  Participants.splice(index, 1);
  this.setState({Participants:Participants});

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> Nord Software
        </div>
        <div>
          <p className="App-intro">
          List of Participants
          </p>
        </div>
        <div className="app">
          <AddParticipant  addedparticipant={this.handleaddedparticipant.bind(this)}/> {/*this takes the parsed object from addPart.js page*/}
          <PartList  participants={this.state.participants} className="tb" onDelete={this.handleDeleteParti.bind(this)}/>
        </div>
      </div>
    );
  }
}



export default App;
