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
let url = "https://www.google.com:8080/get_request?param1=a&param2=b#123"
const URLparser = (url) => {
    let protocol = SplitString(url,'/')
    let Subdomain = SplitString(protocol[1],'.')
    let Domain = Subdomain[1]; // Subdomain has a array with elements [ 'www', 'google', 'com:8080' ] and  assign 2nd element of array 
    let TLD = SplitString(protocol[1],'.')
    TLD = SplitString(TLD[2],":")
    let Port = TLD[1] // TLD has a array with elements [ 'com', '8080' ] and  assign 2nd element of array 
    let Path = SplitString(url,"/")
    Path = SplitString(Path[2],"?")

    console.log(` Protocol : ${protocol[0]} \n Subdomain : ${Subdomain[0]} \n Domain : ${Domain} \n TLD : ${TLD[0]} \n Port : ${Port} \n Path : ${Path[0]} `)
}
URLparser(url);
