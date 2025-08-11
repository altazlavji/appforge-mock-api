module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }
  res.status(200).json({
  "issues": [
    {
      "screen": "Trip List",
      "type": "contrast",
      "node": "secondary text on cards",
      "fix": "Increase contrast to 4.5:1 or use a lighter text token"
    },
    {
      "screen": "Add Expense",
      "type": "focus",
      "node": "receipt upload button",
      "fix": "Ensure visible focus ring at 3px and keyboard activation via Enter/Space"
    },
    {
      "screen": "Auth",
      "type": "hit-target",
      "node": "Continue button",
      "fix": "Minimum touch target 44x44px"
    }
  ]
});
};
