import React from 'react';
import marker from '../images/marker.png';

const Marker = () => <img src={marker} alt='playground' style={{width: 35, height: 35, position: 'absolute', top: -35, left: -35/2}}/>;
export default Marker;