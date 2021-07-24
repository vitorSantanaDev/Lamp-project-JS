const onOff = document.getElementById('on-off')
const lamp = document.getElementById('lamp')


function isLampBroken(){
    return lamp.src.indexOf ('quebrada')   > -1
}

function onLamp(){
    if(!isLampBroken()){
        lamp.src ='image/ligada.jpg'   
    }
}


function offLamp(){
    if(!isLampBroken()){
        lamp.src = 'image/desligada.jpg'
    }
}

function broken(){
    lamp.src = 'image/quebrada.jpg'
}
lamp.addEventListener('dblclick', broken)




function lampOnOff(){
    if(onOff.textContent === 'Ligar'){
        onLamp()
        onOff.textContent = 'Desligar'
    }else{
        offLamp()
        onOff.textContent = 'Ligar'
    }
}

lamp.addEventListener('mouseover', onLamp)
lamp.addEventListener('mouseout', offLamp)
onOff.addEventListener('click', lampOnOff)