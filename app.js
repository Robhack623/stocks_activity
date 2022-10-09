const submitBtn = document.getElementById('submitBtn')
const stockPrice = document.getElementById('stockPrice')



submitBtn.addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value
    let quote = getStockQuote(userInput)
    let quotes = `Stock: ${quote.name} Price: ${quote.price}`
    stockPrice.innerHTML = quotes   

    setInterval(function(){
        let quote = getStockQuote(userInput)
        quotes = `Stock: ${quote.name} Price: ${quote.price}`
        stockPrice.innerHTML = quotes
    }, 2000)
    
})


