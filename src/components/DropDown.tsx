import {ICandy} from '../types';
import {Candies} from '../consts';
import React from 'react';
import './dropdown.scss'
const DropDown = ({ selected, onChange}: { selected: string, onChange: any}) => {
    return (
       <select className="drop-down" onChange={(e)=> onChange(e.target.value)}>
           {Candies.map((c: ICandy) =>{
              if (c._id === selected) {
                  return  <option key={c._id} value={c._id} selected={true} defaultValue={selected}>{c.name}</option>
              } else {
                  return <option key={c._id} value={c._id}>{c.name}</option>
              }
           })};
       </select>
    );
};

export default DropDown;