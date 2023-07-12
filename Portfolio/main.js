class TextScramble{
  constuctor(rand){
    this.rand = rand
    this.chars = "<>?:\"{}|_+!@#$%^&*(),./;\'[]\-=`~"
    this.update   = this.update.bind(this)
  }
  setText(textNew){
    const textCurrent = this.rand.innerText
    const length = Math.max(textCurrent.length, textNew.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    for(let i =0; i<length; i++){
      const from = textCurrent[i] || ''
      const to = textNew[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.rand.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

const Phrases = [
  "Welcome",
  "To my Portfolio",
  "Preetish Choudhary"
]

const rand = document.querySelector('#head')
const fx = new TextScramble(rand)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800)
  })
  counter = (counter + 1) % phrases.length
}

next()
