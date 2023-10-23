const morseAlphabet = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
};

//objeto transmisor
// contine mensaje, alfabeto y las funciones detalladas

class Transmisor {
  private status: string;
  private alphabet: object;
  private timeUnit: number;
  private morseMessage: string[];

  constructor(private message: string) {
    this.status = "OFF";
    this.alphabet = morseAlphabet;
    this.timeUnit = 500; //miliseconds
    this.morseMessage = this.translate(message);
    console.log(this.morseMessage);
  }

  timeout(points: number): void {
    setTimeout((): void => {
      console.log(`I have waited ${points} points`);
    }, this.timeUnit * 1000 * points);
  }

  wait(n: number): Promise<void> {
    console.log(`${this.status} Espero ${n} unidades`);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, this.timeUnit * n);
    });
  }

  translate(message: string): string[] {
    return message
      .toLowerCase()
      .split("")
      .map((char) => {
        if (this.alphabet[char]) {
          return this.alphabet[char];
        } else if (char === " ") {
          return " ";
        }
      });
  }

  async transmitChar(charArray: string[]): Promise<void> {
    console.log("charArray = ", charArray);
    for (let i = 0; i < charArray.length; i++) {
      if (charArray[i] === ".") {
        this.status = "ON";
        await this.wait(1);
        this.status = "Off";
      } else if (charArray[i] === "-") {
        this.status = "ON";
        await this.wait(3);
        this.status = "Off";
      }
      if (i < charArray.length - 1) {
        await this.wait(1);
      }
    }
  }

  async transmit(): Promise<void> {
    console.log("mensaje = ", this.morseMessage);
    for (let i = 0; i < this.morseMessage.length; i++) {
      const morsechar = this.morseMessage[i];
      const charArray = morsechar.split("");
      if (this.morseMessage[i] === " ") {
        await this.wait(7);
      } else {
        await this.transmitChar(morsechar.split(""));
        if (
          i < this.morseMessage.length - 1 &&
          this.morseMessage[i + 1] !== " "
        ) {
          await this.wait(3);
        }
      }
    }
    this.status = "OFF";
    console.log(this.status, "end of message");
  }
}

//factory
// función que reciba el mensaje y retorne el objeto o clase transmisor
function factory(message: string): Transmisor {
  return new Transmisor(message);
}

const transmisor = factory("hola mundo");
transmisor.transmit();
