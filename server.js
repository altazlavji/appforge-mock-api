// Not used by Vercel deployment; present for local testing if needed.
const http = require('http');
const PORT = process.env.PORT || 3000;
http.createServer((req,res)=>{
  res.writeHead(200, {'Content-Type':'application/json'});
  res.end(JSON.stringify({ ok:true, message: 'Use Vercel to deploy /api/* routes.' }));
}).listen(PORT, ()=> console.log('Server on', PORT));
