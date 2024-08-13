import React from 'react'
import '../TicTacToe/TicTac.css'
import circle_icon from '../../assets/circle.png'
import cross_icon from '../../assets/cross.png'


const TicTac = () => {
  return (
    <div className='container'>
        <h1 className='title'>Tic Tac Toe <Span>React</Span></h1>
        <div className='board'>

        </div>
        <button className="reset">Reset</button>
    </div>
  )
}

export default TicTac
