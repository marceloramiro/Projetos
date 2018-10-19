import { Injectable } from '@angular/core';

/*
  Generated class for the ColorpickProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ColorpickProvider {

  constructor() {}
  pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
      if (Math.random() < 1 / ++count)
        result = prop;
    return result;
  }
  
  materialColor() {
    // colors from https://github.com/egoist/color-lib/blob/master/color.json
    var colors = {
        "red": {
           "500": "#f44336",
          "a100": "#ff8a80",
          "a200": "#ff5252",
          "a400": "#ff1744",
        },
        "pink": {
          "500": "#e91e63",
          "900": "#880e4f",
          "a100": "#ff80ab",
          "a200": "#ff4081",
        },
        "purple": {
          "400": "#ab47bc",
          "800": "#6a1b9a",
          "a400": "#d500f9",
       },
        "deepPurple": {
          "400": "#7e57c2",
          "900": "#311b92",
          "a400": "#651fff",
        },
        "indigo": {
          "600": "#3949ab",
          "a400": "#3d5afe",
        },
        "blue": {
          "900": "#0d47a1",
          "hex": "#2196f3",
        },
        "lightBlue": {
          "700": "#0288d1",
          "800": "#0277bd",
          "900": "#01579b",
          "a400": "#00b0ff",
        },
        "cyan": {
          "900": "#006064",
          "hex": "#00bcd4",
        },
        "teal": {
          "hex": "#009688",
          "a700": "#00bfa5"
        },
        "green": {
          "500": "#4caf50",
          "900": "#1b5e20",
          "a400": "#00e676",
          "a700": "#00c853"
        },
        "lightGreen": {
          "a200": "#b2ff59",
          "a700": "#64dd17"
        },
        "lime": {
          "hex": "#cddc39",
          "a700": "#aeea00"
        },
        "yellow": {
          "900": "#f57f17",
          "a700": "#ffd600"
        },
        "amber": {
          "900": "#ff6f00",
          "hex": "#ffc107",
        },
        "orange": {
          "800": "#ef6c00",
          "900": "#e65100",
          "a400": "#ff9100",
        },
        "deepOrange": {
          "300": "#ff8a65",
          "800": "#d84315",
          "900": "#bf360c",
          "a400": "#ff3d00",
        },
      }
      // pick random property
      //var property = pickRandomProperty(colors);
    var colorList = colors[this.pickRandomProperty(colors)];
    var newColorKey = this.pickRandomProperty(colorList);
    var newColor = colorList[newColorKey];
    return newColor;
  }
  
  randomColor() {
    return "#" + // start with a leading hash
      Math.random() // generates random number
      .toString(16) // changes that number to base 16 as a string
      .substr(2, 6); // gets 6 characters and excludes the leading "0."
  }
  
  setColor() {
    var newColor;
    var oldColor = [];
      newColor = this.materialColor();

      function color(newColor){
        var cor;
        return cor = oldColor.some(function(cor){
          oldColor.push(newColor);
          return cor == newColor;
        });  
      }
      console.log(color(newColor))
      if(!color(newColor)){
      return newColor}
      else{
        while(color(newColor) == true){
          if(!color(newColor)){
            return newColor}
        }
      }
  }


}
