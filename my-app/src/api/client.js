var feign = require('feignjs')
var FeignRequest = require('feignjs-request');

export const chartsClient = () => {
    var apiDescription = {
        getValue: 'GET /stable/stock/aapl/quote/latestPrice?token=pk_3125981ace4841fd98571eb76f9567cc'
      };
      
      var client = feign.builder()
          .client(new FeignRequest())
          .target(apiDescription, 'https://cloud.iexapis.com');
    
          return client.getValue()
          .then(function(r){
            console.log(r);
            return r;
          })
          .catch(console.error)
}