const url =
  "https://coingecko.p.rapidapi.com/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "9958c92e3fmsh232ed284cbab050p16273bjsn37875020a191",
    "x-rapidapi-host": "coingecko.p.rapidapi.com",
  },
};

async function fetchCryptoPrice() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    document.getElementById("bitcoin_price").innerHTML =
      "$" + result.bitcoin.usd;
    document.getElementById("ethereum_price").innerHTML =
      "$" + result.ethereum.usd;
    document.getElementById("dogecoin_price").innerHTML =
      "$" + result.dogecoin.usd;
  } catch (error) {
    console.error(error);
  }
}

fetchCryptoPrice();
