import React, { Component } from 'react'


export default class QuizComponent extends Component {
  render() {
    return (
      <div className='quiz'>
        <div className='questionContainer'>

            <h1 className='questionTitle'>Question</h1>
            <h3 className='questionNo'>1 of 15</h3>
            <h2 className='question'>Which is the only mammal that can jump?</h2>

            <div className='options'>
                <div className='option'>Dog</div>
                <div className='option'>Elephant</div>
                <div className='option'>Goat</div>
                <div className='option'>Loin</div>
            </div>
            
            <div className='buttons'>
                <button className='previous'>Previous</button>
                <button className='next'>Next</button>
                <button className='quit'>Quit</button>
            </div>

        </div>
        
      </div>
    )
  }
}
