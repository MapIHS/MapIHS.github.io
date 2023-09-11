function onLoadLoading() {
    document.querySelector('div#loading').style.display = 'none'
    document.querySelector('div#myContent').style.display = 'block'
}

jsjs = document.querySelector("p#a")
osksjz = document.querySelector("span#satu")
osksjx = document.querySelector("span#dua")
function ossks() {
    setTimeout(()=> {
        jsjs.innerHTML = "loading "
        ossks()
    }, 1400)
    setTimeout(()=> {
        jsjs.innerHTML += "."
    }, 1100)
    setTimeout(()=> {
        jsjs.innerHTML += "."
    }, 800)
    setTimeout(()=> {
        jsjs.innerHTML += "."
    }, 500)
}
ossks()