const length = (str) => {
    let count = 0;
    while (str[count] != undefined) {
        count++;
    }
    return count;
}
const SplitString = (string, delimiter) => {
    let str = "";
    let result = [];
    for (let i = 0; i < length(string); i++) {
        if (string[i] !== delimiter) {
            str += string[i];
        }
        else {
            if (str !== "")
                result.push(str);
            str = "";
        }
    }
    if (str !== "")
        result.push(str)
    return result;

}
let url = "https://www.google.com:/get_request?param1=a&param2=b#123"
const URLparser = (url) => {
    let protocol = SplitString(url,'/')
    let spliter = [] = protocol ;
    let Subdomain = SplitString(spliter[1],'.')
    let Domain = SplitString(spliter[1],"."); 
    let TLD = SplitString(spliter[1],'.')
    TLD = SplitString(TLD[2],":")
    let Port = SplitString(spliter[1],":")  
    let Path = SplitString(url,"/")
    Path = SplitString(Path[2],"?")
    console.log(spliter)
    console.log(` Protocol : ${protocol[0]} \n Subdomain : ${Subdomain[0]} \n Domain : ${Domain[1]} \n TLD : ${TLD[0]} \n Port : ${Port[1]} \n Path : ${Path[0]} `)
}
URLparser(url);
