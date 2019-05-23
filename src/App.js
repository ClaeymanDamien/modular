import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import './App.css';
import Header from './Header';
import MainTrend from './Trend';
import { CircularProgressbar, buildStyles, } from 'react-circular-progressbar';
import { BrowserRouter as Router, Route} from "react-router-dom";
import 'react-circular-progressbar/dist/styles.css'; 
import Zoom from 'react-reveal/Zoom';

  function test(){
    return(
    <Router>
        <Route path="/:id" component={Child} />
    </Router>
    )
  }

  function Child({ match }) {
    return match.params.id
  }

  class App extends Component {

    state = {
      time: this.loadTime(),  
      data: this.loadData(),
      open: this.open(),
    }
    
    loadData(){
      //28 valeurs toutes les 5 minutes
      var data = [
        ["11h45","11h50","11h55","12h00","12h05","12h10","12h15","12h20","12h25","12h30","12h35","12h40","12h45","12h50","12h55",
        "13h00","13h05","13h10","13h15","13h20","13h25","13h30","13h35","13h40","13h45","13h50","13h55","14h00"],
        [9,13,15,16,16,15,13,11,9,7,5,3,2,1,0,0,0,0,0,0,0,1,2,3,4,5,6,9]
      ]
      return data;
    }

    loadTime(){
      
      let regex = /^(10|11|12|13|14|15|16|17|18|19|20|21|22|23|[1-9])h[0-5][0-9]$/
      var timeUrl = ReactDOMServer.renderToStaticMarkup(test())

      if(regex.test(timeUrl)){
        return timeUrl;
      }
      else{
        return this.heure()
      }
    }

    open(){
      
      var currentTime = this.loadTime().split('h')

      var hour = parseInt(currentTime[0], 10)
      var minutes = parseInt(currentTime[1], 10)

      if(hour >= 11 && hour < 14){
        if(hour === 11 && minutes < 45 ){
          return false
        }
        return true
      }
      return false
      
    }
    
    heure(){
     var date = new Date();
     var heure = date.getHours();
     var minutes = date.getMinutes();
    
     if(minutes < 10)
          minutes = "0" + minutes;

     var time = heure + "h" + minutes;
     
     return time;
    }

    waitingTime(){
      const{time, data} = this.state
      var dataTime;
      var dataHour;
      var dataMinute;
      var currentTime = time.split("h");
      var currentMinute;
      var currentHour;

      currentHour = parseInt(currentTime[0],10);
      currentMinute = parseInt(currentTime[1],10);

      for(var i = 0; i<data[0].length; i++){
        dataTime = data[0][i].split("h");
        dataHour = parseInt(dataTime[0], 10);
        dataMinute = parseInt(dataTime[1], 10);
        
        if(currentHour === dataHour){
          if(currentMinute >= dataMinute && currentMinute<dataMinute+5)
            return data[1][i];
        }
      }
      return false;
    }

    bestTime(){
      //On cherche un temps avec max 5 minutes d'attentes
      const{data} = this.state
      var first
      var second
      //Jusqu'à 12h45
      for(var i=0; i < 13; i++){
        if(data[1][i] <= 5){
          first = data[0][i]
          break
        }
      } 
      //12h45 à la fin
      for(var i=13; i<data[1].length; i++){
        if(data[1][i] > 5){
          second = data[0][i-1]
          break
        }
      }   

      return [first, second]
    }
  
  render(){  
    const {data,open} = this.state
    var waitingTime = this.waitingTime()
    var bestTime = this.bestTime()

    

    return (
      <div className="crous bg-light pb-5 bg_plate">
        <Header />
        <Zoom>
          <div className="mt-2 mt-md-2 pb-5 pt-0 pt-md-5 col-lg-10 col-12 offset-lg-1">
            <div className="col-12 bg-white p-0 pb-4 pb-0">
              <div className="p-1">
                <h2 className="text-center display-4">Temps d'attente aujourd'hui</h2>
              </div>
              <MainTrend data = {data[1]}/>
            </div>
          </div>
        </Zoom>

        <div className="col-lg-10 col-12 offset-lg-1 d-flex justify-content-between mt-5 flex-column flex-md-row">
          <Zoom>
            <div className="col-lg bg-white p-2 p-md-3 p-lg-5 m-0 d-flex flex-column justify-content-center align-items-center">
              <div className="pt-5 pt-lg-0">
                <h2 className="display-4 text-center">Temps d'attente actuel</h2>
              </div>
              <div className="col-10 p-2 p-md-3 p-lg-4">
                {open ? 
                <CircularProgressbar
                            value={waitingTime}
                            className="display-4"
                            maxValue={30}
                            text={`${waitingTime}min`} 
                            strokeWidth={3}
                            styles={buildStyles({
                              pathColor: 'red',
                              trailColor: '#eee',
                              textColor :  'red',
                            })}       
                />
                :
                <CircularProgressbar
                            value={30}
                            className="display-4"
                            maxValue={30}
                            text={`Fermé`} 
                            strokeWidth={3}
                            styles={buildStyles({
                              pathColor: 'red',
                              trailColor: '#eee',
                              textColor :  'red',
                            })}       
                />
              }
              </div>
            </div>
          </Zoom>
          
          <div className="col-1 mb-5">
          </div>
          
          <Zoom>
            <div className="col-lg bg-white p-lg-5 p-3 m-0 d-flex flex-column justify-content-center align-items-center">
              <div className="pt-5 pt-lg-0">
                <h2 className="display-4 text-center">Heure conseillé</h2>
              </div>
              <div className="col-10 p-lg-4 d-flex flex-column justify-content-center text-center align-items-center">
                  <div className="pb-4 pt-4">
                    <span className="display-2 d-none d-lg-inline">{bestTime[0]}</span>
                    <span className="display-4 d-lg-none">{bestTime[0]}</span>
                  </div>
                  <div className="pb-4 pt-4">
                    <span className="display-2 d-none d-lg-inline">à</span>
                    <span className="display-4 d-lg-none">à</span>
                  </div>
                  <div className="pb-4 pt-4">
                    <span className="display-2 d-none d-lg-inline">{bestTime[1]}</span>
                    <span className="display-4 d-lg-none">{bestTime[1]}</span>
                  </div>
              </div>
            </div>
            </Zoom>
          </div>
        <div className="big_pb"></div>
      </div>
      
    );
  }
}

export default App;
