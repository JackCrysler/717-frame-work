export default function getToken(){
    let c = document.cookie.split(';');
    let token; 
    for(let i=0;i<c.length;i++){
        if(c[i].indexOf('1505B-tocken')>-1){
            token = c[i].split('=')[1]
        }
    }
    return token
}
 