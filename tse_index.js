const tse = require('./tse.js');

/*
var XMLHttpRequest = require('xhr2');
function ajax(a, b, c){ // URL, callback, just a placeholder
  c = new XMLHttpRequest;
  c.open('GET', a);
  c.onload = b;
  c.send()
}
function callback(e){
  console.log(this.response);
}
ajax('http://service.tsetmc.com/tsev2/data/TseClient2.aspx?t=ClosingPrices&a=48753732042176709%2C20010321%2C0', callback);
*/

(async () => {
  
  // basic شاخص کل6
  let res = await tse.getPrices(['شبریز']);
  if (!res.error) console.log(res.data);
  
})();


/*
url.href
'http://service.tsetmc.com/tsev2/data/TseClient2.aspx?t=LastPossibleDeven'
url.href
'http://service.tsetmc.com/tsev2/data/TseClient2.aspx?t=InstrumentAndShare&a=20220217&a2=2111'
url.href
'http://service.tsetmc.com/tsev2/data/TseClient2.aspx?t=Instrument&a=20220219'
url.href
'http://service.tsetmc.com/tsev2/data/TseClient2.aspx?t=LastPossibleDeven'
url.href
'http://service.tsetmc.com/tsev2/data/TseClient2.aspx?t=ClosingPrices&a=43685683301327984%2C20010321%2C1%3B45999574847696947%2C20010321%2C1'

*/

/*
url.href
'http://service.tsetmc.com/tsev2/data/TseClient2.aspx?t=LastPossibleDeven'
url.href
'http://service.tsetmc.com/tsev2/data/TseClient2.aspx?t=InstrumentAndShare&a=20220217&a2=2111'
url.href
'http://service.tsetmc.com/tsev2/data/TseClient2.aspx?t=Instrument&a=20220219'
url.href
'http://service.tsetmc.com/tsev2/data/TseClient2.aspx?t=LastPossibleDeven'
url.href
'http://service.tsetmc.com/tsev2/data/TseClient2.aspx?t=ClosingPrices&a=71483646978964608%2C20220213%2C0%3B9211775239375291%2C20211213%2C0'
*/