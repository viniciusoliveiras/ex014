function carregar() {
    var msg = window.document.getElementById('msg')
    var text = window.document.getElementById('text')
    var img = window.document.getElementById('imagem')
    var nome = window.prompt('Qual o seu nome?')
    var dataH = new Date()
    var dataM = new Date()
    var hora = dataH.getHours()
    var minutos = dataM.getMinutes()
    
    if (hora > 5 && hora <= 12) {
        //bom dia
        msg.innerHTML = `<h2>Bom dia, ${nome}!</h2>`
        msg.innerHTML += `<h3>Agora são ${hora} horas e ${minutos} minutos.</h3>`
        img.src = '../img/fotomanha.png'
        document.body.style.background = '#fed364'
    } else if (hora > 12 && hora < 18) {
        //boa tarde
        msg.innerHTML = `<h2>Boa tarde, ${nome}!</h2>`
        msg.innerHTML += `<h3>Agora são ${hora} horas e ${minutos} minutos.</h3>`
        img.src = '../img/fototarde.png'
        document.body.style.background = '#ee9a46'
    } else if (hora >= 18 && hora <= 23) {
        //boa noite
        msg.innerHTML = `<h2>Boa noite, ${nome}!</h2>`
        msg.innerHTML += `<h3>Agora são ${hora} horas e ${minutos} minutos.</h3>`
        img.src = '../img/fotonoite.png'
        document.body.style.background = '#6c539a'
    } else {
        //boa madrugada
        msg.innerHTML = `<h2>Boa madrugada, ${nome}!</h2>`
        msg.innerHTML += `<h3>Agora são ${hora} horas e ${minutos} minutos.</h3>`
        text.innerHTML = "<p>Não vá dormir tarde, um bom sono pode melhorar seu dia!</p>"
        img.src = '../img/fotomadrugada.png'
        document.body.style.background = '#244b7f'
    }
    
}
