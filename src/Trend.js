import React from 'react'
import Trend from 'react-trend'
import './Trend.css'

const MainTrend = ({data}) => (
    <div className="bg-white padding_trend">
        <Trend
            className="label_trend pb-1 pd-md-2 pb-lg-3"
            smooth
            autoDraw
            autoDrawDuration={2500}
            autoDrawEasing="ease-out"
            data={data}
            gradient={['yellow', 'orange', 'red']}
            radius={5.7}
            strokeWidth={0.75}
            strokeLinecap={'square'}
            height={70}
        />
    </div>
    
);
export default MainTrend;