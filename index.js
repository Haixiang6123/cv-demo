simulateLoading()

initScrollAnimation()

addSubmenuListeners()

initJumpAnimation()

function simulateLoading() {
    setTimeout(function () {
        document.querySelector('#loading-wrapper').classList.remove('active')
    }, 0)
}

function initScrollAnimation() {
    window.onscroll = function (event) {
        if (window.scrollY > 0) {
            document.querySelector('#topNavBar').classList.add('sticky')
        }
        else {
            document.querySelector('#topNavBar').classList.remove('sticky')
        }
    }
}

function addSubmenuListeners() {
    let menuLiEls = document.querySelectorAll('nav.menu > ul > li')
    for (let i = 0; i < menuLiEls.length; i++) {
        menuLiEls[i].onmouseenter = function (event) {
            let currentTarget = event.currentTarget
            currentTarget.classList.add('active')
        }
        menuLiEls[i].onmouseleave = function (event) {
            let currentTarget = event.currentTarget
            currentTarget.classList.remove('active')
        }
    }
}

function initJumpAnimation() {
    let aTags = document.querySelectorAll('nav.menu > ul > li > a')
    aTags.forEach((aTag) => {
        aTag.onclick = function (event) {
            event.preventDefault()
            let href = event.currentTarget.getAttribute('href')
            let element = document.querySelector(href)
            let top = element.offsetTop
            let top2 = element.getBoundingClientRect().top + window.scrollY
            console.log(top, top2)
            window.scrollTo(0, top - 80)
        }
    })
}
