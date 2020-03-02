// let theme = localStorage.getItem
loadTheme();

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//     if (!event.target.matches('.menu-dropdown')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

// document.addEventListener ("click", function (event) {
//     if (event.target.closest(dropdowns)) return;
//     dropdowns.className = "ocultar"
// }

function changeThemeL() {
    document.getElementById('body').className="light"
}

function changeThemeD() {
    document.getElementById('body').className="dark"
}

var gifsSug1 = document.getElementById('gif1')
function getSuggestions1() {
    const found = fetch('https://api.giphy.com/v1/gifs/search?q=' + 'dog' + '&api_key=' + 'zY90ryMHijH2hKD3OHkqsojaU3SgyYWb')
        .then((response) => {
            return response.json()
        }).then(function (info) {
            gifsSug1.src = info.data[0].images.downsized_large.url
            console.log(info)
            return info
        })
        .catch((error) => {
            return error
        })
    return found
}

getSuggestions1();

function verMas1() {
    const found = fetch('https://api.giphy.com/v1/gifs/search?q=' + 'dog' + '&api_key=' + 'zY90ryMHijH2hKD3OHkqsojaU3SgyYWb')
        .then((response) => {
            return response.json()
        }).then(function (info) {
            for (var i = 0; i < gifs.length; i++) {
                gifs[i].src = info.data[i].images.downsized_large.url
                gifsT[i].innerHTML = "#" + info.data[i].title
            }
            console.log(info)
            return info
        })
        .catch((error) => {
            return error
        })
    return found
}

function changePVerMas1() {
    const p = document.getElementById('resultados');
    p.innerHTML = 'dog' + ' [resultados]';
}

function verMas1B() {
    verMas1();
    ocultarS();
    changePVerMas1();
    mostrarEj();
}


var gifsSug2 = document.getElementById('gif2')
function getSuggestions2() {
    const found = fetch('https://api.giphy.com/v1/gifs/search?q=' + 'sailormoon' + '&api_key=' + 'zY90ryMHijH2hKD3OHkqsojaU3SgyYWb')
        .then((response) => {
            return response.json()
        }).then(function (info) {
            gifsSug2.src = info.data[0].images.downsized_large.url
            console.log(info)
            return info
        })
        .catch((error) => {
            return error
        })
    return found
}

getSuggestions2();

function verMas2() {
    const found = fetch('https://api.giphy.com/v1/gifs/search?q=' + 'sailormoon' + '&api_key=' + 'zY90ryMHijH2hKD3OHkqsojaU3SgyYWb')
        .then((response) => {
            return response.json()
        }).then(function (info) {
            for (var i = 0; i < gifs.length; i++) {
                gifs[i].src = info.data[i].images.downsized_large.url
                gifsT[i].innerHTML = "#" + info.data[i].title
            }
            console.log(info)
            return info
        })
        .catch((error) => {
            return error
        })
    return found
}

function changePVerMas2() {
    const p = document.getElementById('resultados');
    p.innerHTML = 'sailor moon' + ' [resultados]';
}

function verMas2B() {
    verMas2();
    ocultarS();
    changePVerMas2();
    mostrarEj();
}

var gifsSug3 = document.getElementById('gif3')
function getSuggestions3() {
    const found = fetch('https://api.giphy.com/v1/gifs/search?q=' + 'bts' + '&api_key=' + 'zY90ryMHijH2hKD3OHkqsojaU3SgyYWb')
        .then((response) => {
            return response.json()
        }).then(function (info) {
            gifsSug3.src = info.data[0].images.downsized_large.url
            console.log(info)
            return info
        })
        .catch((error) => {
            return error
        })
    return found
}

getSuggestions3();

function verMas3() {
    const found = fetch('https://api.giphy.com/v1/gifs/search?q=' + 'bts' + '&api_key=' + 'zY90ryMHijH2hKD3OHkqsojaU3SgyYWb')
        .then((response) => {
            return response.json()
        }).then(function (info) {
            for (var i = 0; i < gifs.length; i++) {
                gifs[i].src = info.data[i].images.downsized_large.url
                gifsT[i].innerHTML = "#" + info.data[i].title
            }
            console.log(info)
            return info
        })
        .catch((error) => {
            return error
        })
    return found
}

function changePVerMas3() {
    const p = document.getElementById('resultados');
    p.innerHTML = 'bts' + ' [resultados]';
}

function verMas3B() {
    verMas3();
    ocultarS();
    changePVerMas3();
    mostrarEj();
}

var gifsSug4 = document.getElementById('gif4')
function getSuggestions4() {
    const found = fetch('https://api.giphy.com/v1/gifs/search?q=' + 'cat' + '&api_key=' + 'zY90ryMHijH2hKD3OHkqsojaU3SgyYWb')
        .then((response) => {
            return response.json()
        }).then(function (info) {
            gifsSug4.src = info.data[0].images.downsized_large.url
            console.log(info)
            return info
        })
        .catch((error) => {
            return error
        })
    return found
}

getSuggestions4();

function verMas4() {
    const found = fetch('https://api.giphy.com/v1/gifs/search?q=' + 'cat' + '&api_key=' + 'zY90ryMHijH2hKD3OHkqsojaU3SgyYWb')
        .then((response) => {
            return response.json()
        }).then(function (info) {
            for (var i = 0; i < gifs.length; i++) {
                gifs[i].src = info.data[i].images.downsized_large.url
                gifsT[i].innerHTML = "#" + info.data[i].title
            }
            console.log(info)
            return info
        })
        .catch((error) => {
            return error
        })
    return found
}

function changePVerMas4() {
    const p = document.getElementById('resultados');
    p.innerHTML = 'cat' + ' [resultados]';
}

function verMas4B() {
    verMas4();
    ocultarS();
    changePVerMas4();
    mostrarEj();
}

var gifs = document.getElementsByClassName('gifs')
var gifsT = document.getElementsByClassName('gifsT')
function getTrending() {
    const found = fetch('https://api.giphy.com/v1/gifs/trending' + '?api_key=' + 'zY90ryMHijH2hKD3OHkqsojaU3SgyYWb' + '&limit=25')
        .then((response) => {
            return response.json()
        }).then(function (info) {
            for (var i = 0; i < gifs.length; i++) {
                gifs[i].src = info.data[i].images.downsized_large.url
                gifsT[i].innerHTML = "#" + info.data[i].title
            }
            console.log(info)
            return info
        })
        .catch((error) => {
            return error
        })
    return found
}

getTrending();

var gifs = document.getElementsByClassName('gifs');
function getSearchResults() {
    const found = fetch('https://api.giphy.com/v1/gifs/search?q=' + document.getElementById('search').value + '&api_key=' + 'zY90ryMHijH2hKD3OHkqsojaU3SgyYWb')
        .then((response) => {
            return response.json()
        }).then(function (info) {
            for (var i = 0; i < gifs.length; i++) {
                gifs[i].src = info.data[i].images.downsized_large.url
                gifsT[i].innerHTML = "#" + info.data[i].title
            }
            console.log(info)
            return info
        })
        .catch((error) => {
            return error
        })
    return found
}

function ocultarS() {
    var sugerencias = document.getElementsByClassName('sugerencias');
    sugerencias[0].className = 'ocultar';
}

function changeP() {
    const p = document.getElementById('resultados');
    p.innerHTML = document.getElementById('search').value + ' [resultados]';
}

function boton() {
    getSearchResults();
    ocultarS();
    changeP();
    ocultarBS();
    mostrarEj();
}

function buscarSug() {
    var botonB = document.getElementsByClassName('boton')[0];
    var lupa = document.getElementsByClassName("button-img")[0];
    var sugClick = document.getElementsByClassName("buscarSClick")[0];

    botonB.style.background = "#F7C9F3";
    botonB.style.color = "#110038";
    lupa.className = "button-imgActive"
    sugClick.style.display = "block"
}

function ocultarBS() {
    var sugClick = document.getElementsByClassName("buscarSClick")[0];
    sugClick.style.display = "none";
}

function mostrarEj() {
    var ejemplos = document.getElementsByClassName("buscarEj")[0];
    ejemplos.style.display = "block";
}

var input = document.getElementById('search');
input.addEventListener("click", buscarSug);

// function buscarSug() {
//     if (input > 0) {
//         sugClick.style.display = "block"
//     }
// }

function misGuifos() {
    var allGifs = document.getElementById("allGif");
    allGifs.style.display = "none";
}

var misGifos = document.getElementById("misGifos");
misGifos.addEventListener ("click", misGuifos)
// misGifos.addEventListener ("click", misGuifos)

function themeChanger(tema) {
    let stg = window.localStorage
    let temaActual = stg.getItem('Tema')
    if(temaActual != tema) {
        stg.setItem('Tema',tema)
        loadTheme();
    }
  }
  
  function loadTheme() {
    let temaActual = window.localStorage.getItem('Tema')
    if(temaActual == null) {temaActual = 'day'}
    let body = document.getElementById('body')
    switch(temaActual) {
        case 'day':
            body.className = "light";
        break;
        case 'night':
            body.className = "dark";
        break;
    }
  }