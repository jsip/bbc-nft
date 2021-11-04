const main = () => {
  setInterval(() => {
    let h1 = document.createElement("h1")
    let odds = Math.random() * 100
    h1.innerHTML += '||'
    odds > 50 ? h1.style = "color: red" : h1.style = "color: green"
    odds > 50 ? h1.classList.add("down", "candlestick") : h1.classList.add("up", "candlestick")
    document.getElementById("generatorOutput").appendChild(h1)
  }, 300)
}

main()