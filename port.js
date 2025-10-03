const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const port = document.getElementById ( 'port' );

function isLampBroken () {
    return port.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        port.src = './img/aberta.jpg';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        port.src = './img/fechada.jpg';
    }
}

function lampBroken () {
    port.src = './img/quebrada.jpg';
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
port.addEventListener ( 'mouseover', lampOn );
port.addEventListener ( 'mouseleave', lampOff );
port.addEventListener ( 'dblclick', lampBroken );

