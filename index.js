const http=require("http");
const url=require("url");

const server=http.createServer((req, res)=>{
	res.setHeader("Access-Control-Allow-Origin","*");

	let path=url.parse(req.url, true);
	
	if(path.pathname==="/sqrt")
	{
		let num=path.query.number;
		let n=parseFloat(num);
		let r=n**0.5;
		let msg="square root= "+r.toFixed(2);
		res.write(msg);
		res.end();
	}
});

server.listen(9000, ()=>{console.log("ready @ 9000")});