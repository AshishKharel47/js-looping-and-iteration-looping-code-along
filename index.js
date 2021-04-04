// Code your solutions in this file
function writeCards(names, event){
    let newNames=[]
    for(let i=0;i<names.length;i++){
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newNames;
}
function countDown(i){
    while(i>-1){
        console.log(i--);
    }
    i;
}