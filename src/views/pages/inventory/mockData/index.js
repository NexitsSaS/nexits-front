const globalassets = require('./globalassets.json').globalassets;
const orders = require('./orders.json');
const assets = require('./userassets.json').assets;
// Something more

module.exports = () => ({
    globalassets,
    orders,
    assets
    // Something more
});
