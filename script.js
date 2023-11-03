'use strict';

class slideImage {
  rightArrow = document.querySelector('.right-arrow');
  leftArrow = document.querySelector('.left-arrow');
  slideImage = document.querySelectorAll('.img-container');

  constructor() {
    this._slideRight();
    this._slideLeft();
  }

  _slideRight() {
    this.rightArrow.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('right');
    });
  }

  _slideLeft() {
    this.leftArrow.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('Left');
    });
  }
}

const slideExample = new slideImage();
