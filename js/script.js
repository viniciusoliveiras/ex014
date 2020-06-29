function carregar() {
    var msg = window.document.getElementById('msg')
    var text = window.document.getElementById('text')
    var img = window.document.getElementById('imagem')
    var dataH = new Date()
    var dataM = new Date()
    var hora = dataH.getHours()
    var minutos = dataM.getMinutes()
    
    if (hora > 5 && hora <= 12) {
        //bom dia
        msg.innerHTML = `<h2>Bom dia</h2>`
        msg.innerHTML += `<h3>Agora são ${hora} horas e ${minutos} minutos.</h3>`
        img.src = '../img/fotomanha.png'
        document.body.style.background = 'url(https://c.pxhere.com/images/91/c0/74374af887521470bd0081a17677-1604557.jpg!d)'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'

    } else if (hora > 12 && hora < 18) {
        //boa tarde
        msg.innerHTML = `<h2>Boa tarde</h2>`
        msg.innerHTML += `<h3>Agora são ${hora} horas e ${minutos} minutos.</h3>`
        img.src = '../img/fototarde.png'
        document.body.style.background = 'url(https://c.wallhere.com/photos/38/90/New_York_City_city-47406.jpg!d)'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'

    } else if (hora >= 18 && hora <= 23) {
        //boa noite
        msg.innerHTML = `<h2>Boa noite</h2>`
        msg.innerHTML += `<h3>Agora são ${hora} horas e ${minutos} minutos.</h3>`
        img.src = '../img/fotonoite.png'
        document.body.style.background = 'url(https://i.pinimg.com/originals/8f/7b/53/8f7b533d2b97357f870f6be304003955.jpg)'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'

    } else {
        //boa madrugada
        msg.innerHTML = `<h2>Boa madrugada</h2>`
        msg.innerHTML += `<h3>Agora são ${hora} horas e ${minutos} minutos.</h3>`
        text.innerHTML = "<p>Não vá dormir tarde, um bom sono pode melhorar seu dia!</p>"
        img.src = '../img/fotomadrugada.png'
        document.body.style.background = 'url(https://s1.1zoom.me/big0/393/Milky_Way_Mountains_Sky_442965.jpg)'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
    }
    
}
