class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }    

  startClick() {
    this.intervalId = setInterval(() => { 
      this.currentTime += 1;
      this.setTime();
      printTime();
      }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/ 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(theNumber) {
    if(theNumber<10){
      return `0${theNumber}`;
    }else{
      return theNumber;
    };
  }

  setTime() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    console.log(minutes + ":" + seconds);
    return minutes.toString() + seconds.toString();
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
    
  }

  // splitClick() {}
}
