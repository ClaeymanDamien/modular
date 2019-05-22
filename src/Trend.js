import React from 'react'
import Trend from 'react-trend'
import './Trend.css'

const MainTrend = () => (
    <div className="label_trend bg-white">
        <Trend
            smooth
            autoDraw
            autoDrawDuration={2500}
            autoDrawEasing="ease-out"
            data={[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0]}
            gradient={['yellow', 'orange', 'red']}
            radius={5.7}
            strokeWidth={0.75}
            strokeLinecap={'square'}
        />
    </div>
    
);
export default MainTrend;