module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }
  res.status(200).json({
  "preview_url": "https://example.com/prototype/abc123",
  "snapshot_id": "abc123"
});
};
