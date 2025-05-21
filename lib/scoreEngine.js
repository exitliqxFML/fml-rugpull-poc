// A simple on-chain risk score: higher supply / lower liquidity = higher risk
module.exports.scoreLaunch = function(item) {
  const liquidity = item.liquidity_usd || 1;
  const supply   = item.total_supply || 1;
  // Scale and cap at 100
  const risk = Math.min(100, Math.round((supply / liquidity) * 10));
  return risk;
};
