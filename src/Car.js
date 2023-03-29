import React, { Component, startTransition } from 'react'
import RollsRoyce from'./RollsRoyce.jpg'
export class Car extends Component {
  render() {
    return (
      <div>Royce Phantom VIII
        <img style={{width :'30px',heigth:'30px'}} src={RollsRoyce}alt=""/?
      </div>
      
  }
}

export default Car