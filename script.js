'use strict';

class slideImage {
  rightArrow = document.querySelector('.right-arrow');
  leftArrow = document.querySelector('.left-arrow');
  slide = document.querySelectorAll('.img-container');
  pageNumber = document.querySelector('.page-number');
  nagivationDot = document.querySelectorAll('.dot');
  counter = 1;

  constructor() {
    this._slideRight();
    this._slideLeft();
  }

  _slideRight() {
    this.rightArrow.addEventListener('click', e => {
      e.preventDefault();
      if (this.counter === null) return this.counter;

      if (this.counter < 4) {
        this.counter++;

        this.pageNumber.textContent = `${this.counter}/4`;

        for (const element of this.slide) {
          element.classList.add('hide');
          if (element.classList.contains(`img${this.counter}`)) {
            element.classList.remove('hide');
          }
        }

        // for (const element of this.nagivationDot) {
        //   element.classList.removeProperty('background-colour');
        //   // if (element.classList.contains(`img${this.counter}`)) {
        //   //   element.classList.remove('hide');
        //   // }
        // }
      }
    });
  }

  _slideLeft() {
    this.leftArrow.addEventListener('click', e => {
      e.preventDefault();
      if (this.counter > 1) {
        this.counter--;

        this.pageNumber.textContent = `${this.counter}/4`;

        for (const element of this.slide) {
          element.classList.add('hide');
          if (element.classList.contains(`img${this.counter}`)) {
            element.classList.remove('hide');
          }
        }
      }
    });
  }
}

const slide1 = new slideImage();
