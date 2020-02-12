/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.menu-dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function changeThemeL() {
    document.getElementById('body').className="light"
}

function changeThemeD() {
    document.getElementById('body').className="dark"
}

var gifsSug1 = document.getElementById('gif1')
function getSuggestions1() {
    const found = fetch('http://api.giphy.com/v1/gifs/search?q=' + 'dog' + '&api_key=' + 'zY90ryMHijH2hKD3OHkqsojaU3SgyYWb')
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

var gifsSug2 = document.getElementById('gif2')
function getSuggestions2() {
    const found = fetch('http://api.giphy.com/v1/gifs/search?q=' + 'sailormoon' + '&api_key=' + 'zY90ryMHijH2hKD3OHkqsojaU3SgyYWb')
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

var gifsSug3 = document.getElementById('gif3')
function getSuggestions3() {
    const found = fetch('http://api.giphy.com/v1/gifs/search?q=' + 'bts' + '&api_key=' + 'zY90ryMHijH2hKD3OHkqsojaU3SgyYWb')
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

var gifsSug4 = document.getElementById('gif4')
function getSuggestions4() {
    const found = fetch('http://api.giphy.com/v1/gifs/search?q=' + 'cat' + '&api_key=' + 'zY90ryMHijH2hKD3OHkqsojaU3SgyYWb')
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

var gifs = document.getElementsByClassName('gifs')
function getTrending() {
    const found = fetch('http://api.giphy.com/v1/gifs/trending' + '?api_key=' + 'zY90ryMHijH2hKD3OHkqsojaU3SgyYWb' + '&limit=25')
        .then((response) => {
            return response.json()
        }).then(function (info) {
            for (var i = 0; i < gifs.length; i++) {
                gifs[i].src = info.data[i].images.downsized_large.url
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
    const found = fetch('http://api.giphy.com/v1/gifs/search?q=' + document.getElementById('search').value + '&api_key=' + 'zY90ryMHijH2hKD3OHkqsojaU3SgyYWb')
        .then((response) => {
            return response.json()
        }).then(function (info) {
            for (var i = 0; i < gifs.length; i++) {
                gifs[i].src = info.data[i].images.downsized_large.url
            }
            console.log(info)
            return info
        })
        .catch((error) => {
            return error
        })
    return found
}

function ocultar() {
    var sugerencias = document.getElementsByClassName('sugerencias');
    sugerencias[0].className = 'sugerenciasO'
}

function changeP() {
    const p = document.getElementById('resultados');
    p.innerHTML = document.getElementById('search').value + ' [resultados]';
}

function boton() {
    getSearchResults();
    ocultar();
    changeP();
}