import React from 'react';
import {Tooltip} from 'react-lightweight-tooltip';
import marker from '../images/marker.png';
import test from '../images/playground-test.jpg'

const Marker = () => <Tooltip content={<img src={test}/>}><img src={marker} alt='playground' style={{width: 35, height: 35, position: 'absolute', top: -35, left: -35/2}}/></Tooltip>

export default Marker;