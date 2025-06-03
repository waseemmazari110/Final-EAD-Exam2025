import React from 'react'
import './Light.css'
import { useState,useEffect } from 'react'
function TrafficLightSimulator() {
    const [activeLight,setActiveLight]=useState('red')

    useEffect(()=>{
        const cycle=['red','yellow','green']
        let index=0
    },3000)
    return (
        <div>
            <h1>Traffic Light Simulator</h1>
            <div className="traffic-light">
                <div className="light red">Red Light</div>
                <div className="light yellow">Yellow Light</div>
                <div className="light green">Green Light</div>
 
            </div>
        </div>
    )
}

export default TrafficLightSimulator
