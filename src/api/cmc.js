const cmc = {};
cmc.top10 = {};

cmc.top10.get = async () => {
  const res = await fetch('https://api.coinmarketcap.com/v2/ticker/?limit=10');
  const json = await res.json();
  return json.data ? Object.values(json.data) : [];
}

export default cmc;