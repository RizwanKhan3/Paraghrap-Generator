const numOfWord = document.getElementById('numofword')
const btn_generate = document.getElementById('generate')
const data_div = document.getElementsByClassName('generateData')[0]

const GeneratePara = (number) => {
  const word = [
    "Got",
    "ability",
    "shop",
    "recall",
    "fruit",
    "easy",
    "dirty",
    "giant",
    "shaking",
    "ground",
    "weather",
    "lesson",
    "almost",
    "square",
    "forward",
    "bend",
    "cold",
    "broken",
    "distant",
    "adjective."
  ]
  let text = '';
  for (let i = 0; i < number; i++) {
    let result = word[Math.floor(Math.random() * (word.length - 1))]
    text += result
    text+= ' '
  }

  return text
}

// GeneratePara(10)
const GenerateData = () => {
  let getNum = +numOfWord.value
  let result = '';
  let p = document.createElement('p')
  for (let i = 0; i <= getNum; i++) {
    const random_num = Math.floor(Math.random() * (15))
    result += GeneratePara(random_num)
   
  }
  numOfWord.value = ''
  p.innerText = result
  data_div.append(p)

}




btn_generate.addEventListener('click', GenerateData)

