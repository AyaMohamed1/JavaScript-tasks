var idx = 0;
function createDiv(){
    let div = document.createElement('div');
    div.innerText = "Hello " + idx;
    div.id = idx;
    div.className='blue';
    // div.getElementsByClassName('blue').style.backgroundColor("blue");
    document.body.appendChild(div);
    idx += 1;
}

function globalEventListener(type, element, cb){
    document.documentElement.addEventListener(type, function(e){
        if(e.target.matches(element)){
            cb(e);
        };
      });
}

globalEventListener('click','.blue',function(e){
    console.log(e.target.innerText)
})

globalEventListener('click', '#create_div', createDiv)
