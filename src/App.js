import React from 'react';

import './App.css';
import Header from './Header';
import MainTrend from './Trend';
import { CircularProgressbar, buildStyles, } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 
import Zoom from 'react-reveal/Zoom';

function App() {
  

  return (
    <div className="crous bg-light pb-5 bg_plate">
      <Header />
      
      <Zoom>
        <div className="mt-2 pb-5 pt-5 col-lg-10 col-12 offset-lg-1">
          <div className="col-12 bg-white p-0">
            <div className="p-4">
              <h2 className="text-center display-4">Temps d'attente aujourd'hui</h2>
            </div>
            <MainTrend />
          </div>
        </div>
      </Zoom>

      <div className="col-lg-10 col-12 offset-lg-1 d-flex justify-content-between mt-5 flex-column flex-md-row">
        <Zoom>
          <div className="col-lg bg-white p-5 m-0 d-flex flex-column justify-content-center align-items-center">
            <div className="pt-5 pt-lg-0">
              <h2 className="display-4 text-center">Temps d'attente actuel</h2>
            </div>
            <div className="col-10 p-4">
              <CircularProgressbar
                          value={10}
                          className="display-4"
                          maxValue={30}
                          text={`${10}min`} 
                          strokeWidth={3}
                          styles={buildStyles({
                            pathColor: 'red',
                            trailColor: '#eee',
                            textColor :  'red',
                          })}       
              />
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
                  <span className="display-2 d-none d-lg-inline">13 : 45</span>
                  <span className="display-4 d-lg-none">13 : 45</span>
                </div>
                <div className="pb-4 pt-4">
                  <span className="display-2 d-none d-lg-inline">14 : 10</span>
                  <span className="display-4 d-lg-none">14 : 10</span>
                </div>
            </div>
          </div>
          </Zoom>
        </div>
      <div className="big_pb"></div>
    </div>
    
  );
}

export default App;
