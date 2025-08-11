module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }
  res.status(200).json({
  "deployment_url": "https://tripsplit-demo.vercel.app",
  "logs_url": "https://example.com/logs/xyz"
});
};
