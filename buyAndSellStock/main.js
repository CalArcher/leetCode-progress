var maxProfit = function(prices){
  let profit = 0
  let low = prices[0]
  for(let i=1; i<prices.length; i++){
      if(prices[i] < low){
          low = prices[i]
      }
      if(prices[i] - low > profit){
          profit = prices[i] - low
      }
  }
  return profit
}