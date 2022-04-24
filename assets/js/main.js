const youtube = document.getElementById('youtube');
const instagram = document.getElementById('instagram');
const facebook = document.getElementById('facebook');

let youTube = 1;
let instGram = 1;
let faceBook = 1;

function countDown1(){
    youTube++;
    youtube.innerHTML = youTube;
    if(youTube == 550){
        clearInterval(count1);
    };
}
const count1 = setInterval(countDown1, 2);


function countDown2(){
    instGram++;
    instagram.innerHTML = instGram;
    if(instGram == 570){
        clearInterval(count2);
    }
}

const count2 = setInterval(countDown2, 2);


function countDown3(){
    faceBook++;
    facebook.innerHTML = faceBook;
    if(faceBook == 800){
        clearInterval(count3);
    }
}

const count3 = setInterval(countDown3, 2);