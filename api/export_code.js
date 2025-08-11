module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }
  res.status(200).json({
  "repo_zip_url": "https://example.com/exports/project.zip",
  "instructions_md": "# How to run\\n\\n1. npm install\\n2. npm run dev\\n3. Open http://localhost:3000"
});
};
