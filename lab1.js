const http=require("http")
const server=http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":"text/html"})
    resp.write(`<h1>BLDEAS commerce,BHS Arts and TGP science college</h1>`)
    resp.write(`<h2>Started in year 1963</h2>`)
    resp.write(`<h3>Located in jamkhandi</h3>`)
    
})
server.listen(3000,()=>(console.log("server has been started")))