let url ="https://www.google.com:8080/get_request?param1=a&param2=b#123";
const URLparser = (url)=>{
    // let parser = new URL(url);
    // console.log(` Protocol : ${parser.protocol} \n Subdomain : ${parser.hostname} \n port : ${parser.port} \n TLD : ${parser.searchParams} \n Path : ${parser.protocol} \n`)
    let protocol = url.match(/^(https?)/g)
    let Domain = url.match(/(\.[\w-]+\.\w{2,4})\/?/g)
    let Subdomain = url.match(/(www?)/g);
    let port = `${protocol}`=="http"?8080:442;
    let TLD= url.match(/(\.[\w-]+)\/?/g);
    
    let Path= url.match(/(\/[\w-]+)\/?/g);
    
    console.log(`Protocol : ${protocol}`)
    console.log(`Subdomain : ${Subdomain}`)
    console.log(`Domain : ${Domain}`)
    console.log(`port : ${port}`)
    console.log(`TLD : ${TLD[1]}`)
    console.log(`Path : ${Path[1]}`)
}
URLparser(url);
