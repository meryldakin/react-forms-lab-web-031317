import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      poem: "",
      poemValid: false
    }
    this.changePoemState = this.changePoemState.bind(this)
    this.lineVal = this.lineVal.bind(this)
    this.poemValidator = this.poemValidator.bind(this)
  }

  changePoemState(e){
    this.setState({
      poem: e.target.value
    },
      this.poemValidator
    )
    console.log("change poem state", this.state.poem)

  }



  poemValidator(){
    var poem = this.state.poem
    console.log("peom validator", poem)
    var poemArray = poem.split(/\n/)
    console.log(poemArray)
    var linesVal = poemArray.map((line, index) => this.lineVal(line, index))
    console.log("linesVal", linesVal)
    if (linesVal.length === 3 && !linesVal.includes(false)) {
      this.setState({poemValid: true})
    }
  }

  lineVal(line, position){
    var lineArr = line.trim().split(" ")
    if (position === 0 || position === 2){
      return lineArr.length === 5 ? true : false
    } else if (position === 1) {
      return lineArr.length === 3 ? true : false
    }
    console.log("lineArr", lineArr)
  }
  render() {
    if (this.state.poemValid === true) {
      return (
        <div>
          <textarea id="letters" rows="3" cols="60" value={this.state.poem} onChange={this.changePoemState}/>
        </div>
      );
    } else if (this.state.poemValid === false) {
      return (
        <div>
          <textarea id="letters" rows="3" cols="60" value={this.state.poem} onChange={this.changePoemState}/>
          <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
        </div>
      );
    }
  }
}
