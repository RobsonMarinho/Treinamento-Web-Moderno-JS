const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i);
    })
}

funcs [2]();    //Qual o retorno?
funcs [6]();    //Qual o retorno?
funcs [8]();    //Qual o retorno?