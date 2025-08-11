module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }
  res.status(200).json({
  "tokens": {
    "color": {
      "primary": "#4A00E0",
      "secondary": "#8E2DE2",
      "surface": "#0D0D0D",
      "text": "#FFFFFF"
    },
    "spacing": [
      4,
      8,
      12,
      16,
      24,
      32
    ],
    "radius": [
      8,
      12,
      16
    ],
    "elevation": [
      0,
      1,
      2,
      4
    ]
  },
  "components": [
    "Button",
    "Input",
    "Select",
    "Checkbox",
    "Card",
    "Navbar",
    "Modal",
    "Toast",
    "ProgressBar"
  ]
});
};
