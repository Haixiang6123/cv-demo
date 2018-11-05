setTimeout(function() {
    document.querySelector('#loading-wrapper').classList.remove('active')
}, 0)

window.onscroll = function(event) {
    if (window.scrollY > 0) {
        document.querySelector('#topNavBar').classList.add('sticky')
    }
    else {
        document.querySelector('#topNavBar').classList.remove('sticky')
    }
}

let menuTriggers = document.querySelectorAll('.menu-trigger')
for (let i = 0; i < menuTriggers.length; i++) {
    menuTriggers[i].onmouseenter = function (event) {
        let currentTarget = event.currentTarget
        let brother = currentTarget.nextSibling
        while (brother.nodeType === Node.TEXT_NODE) {
            brother = brother.nextSibling
        }
        // 找到 brother
        console.log(brother)
    }
    menuTriggers[i].onmouseleave = function (event) {
    }
}
