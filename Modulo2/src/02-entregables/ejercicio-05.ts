console.log("************** DELIVERABLE 05 *********************");
console.log("\n\n---- 208 SLOT MACHINE ----");

class SlothMachine {
  constructor() {
    this.coins = 0;
    this.bool1 = false;
    this.bool2 = false;
    this.bool3 = false;
  }

  play() {
    this.coins++;
    this.bool1 = this.randomBoolean();
    this.bool2 = this.randomBoolean();
    this.bool3 = this.randomBoolean();
    console.log(this.coins);
    console.log(this.bool1, this.bool2, this.bool3);

    if (this.bool1 && this.bool2 && this.bool3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log(`Good luck next time!!`);
    }
  }

  randomBoolean() {
    return Math.random() >= 0.5;
  }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
