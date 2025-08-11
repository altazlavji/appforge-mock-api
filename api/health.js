module.exports = (req, res) => {
  res.status(200).json({ ok: true, service: 'appforge-mock-api' });
};
