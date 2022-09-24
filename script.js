let listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
    "https://s2.glbimg.com/fCNS_fXPhGRwlpnAaQLzvGYC1y0=/362x536/https://s2.glbimg.com/UPI9xlM9R9O41YRqSO7R3hTNk_s=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/q/V/Avo9ISQQO3grnARi3JCA/2020-914-a-chegada-poster.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/3/3a/Harry_Potter_and_the_Deathly_Hallows_-_Part_2.jpg",
    "https://play-lh.googleusercontent.com/V3W_1uLiraX9RdqmRYI7SCYgI8UgK80Ta_95OmCfGrQYhJxjLwy55ggja_2AEE77h76oCg=w240-h480-rw",
    "https://br.web.img3.acsta.net/pictures/19/03/21/16/15/4239577.jpg"
];

document.getElementById("imagens").innerHTML = "";
mostrar();

function mostrar() {
    for (let i = 0; i < listaFilmes.length; i++) {
        // document.write("<img src=" + listaFilmes[index] + ">");
        document.getElementById("imagens").innerHTML += "<img src=" + 
            listaFilmes[i] + ">";
    }
}

function adicionar() {
    var link = document.getElementById("filme").value;
    document.getElementById("imagens").innerHTML = "";

    if(listaFilmes.includes(link)) {
        alert("Filme já adicionado!");
        mostrar();
    } else {
        listaFilmes.push(link);
        mostrar();
    }
    document.getElementById("filme").value = "";
}