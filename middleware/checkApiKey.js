// middleware/checkApiKey.js
const validApiKeys = [
  process.env.ACCOUNTSERVICE_APIKEY, 
  process.env.ORDERSERVICE_APIKEY, 
  process.env.PRODUCTSERVICE_APIKEY
];

const checkApiKey = (req, res, next) => {
    const apiKey = req.headers['apikey'];
    if (!apiKey) {
        return res.status(403).json({ error: 'No API key provided' });
    }
    if (!validApiKeys.includes(apiKey)) {
        return res.status(403).json({ error: 'Invalid API key' });
    }
    next();
};

module.exports = checkApiKey;
