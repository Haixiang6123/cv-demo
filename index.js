let specialTags = document.querySelectorAll('section[data-scroll]')
let navItems = document.querySelectorAll('nav.menu > ul > li')

simulateLoading()

initScrollAnimation()

addSubmenuListeners()

initJumpAnimation()

requestAnimationFrame(animate)

function simulateLoading() {
    setTimeout(function () {
        document.querySelector('#loading-wrapper').classList.remove('active')
        setTimeout(() => {
            scrollHighlight(navItems, specialTags)
        }, 150)
    }, 0)
}

function scrollHighlight(navItems, specialTags) {
    // Find activated nav item and add activated class
    let activeSection = specialTags[0]
    specialTags.forEach((tag) => {
        if (Math.abs(tag.offsetTop - window.scrollY) < Math.abs(activeSection.offsetTop - window.scrollY)) {
            activeSection = tag
        }
    })

    // Remove class to float up
    activeSection.classList.remove('float-up')

    let id = activeSection.id
    let liEl = document.querySelector('a[href="#' + id + '"]').parentNode
    // Remove active
    navItems.forEach((navItem) => {
        navItem.classList.remove('highlight')
    })
    liEl.classList.add('highlight')
}

function initScrollAnimation() {

    specialTags.forEach((tag) => {
        tag.classList.add('float-up')
    })

    window.onscroll = function (event) {
        if (window.scrollY > 0) {
            document.querySelector('#topNavBar').classList.add('sticky')
        }
        else {
            document.querySelector('#topNavBar').classList.remove('sticky')
        }

        scrollHighlight(navItems, specialTags)
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

            let top = document.querySelector(event.currentTarget.getAttribute('href')).offsetTop
            let offset = 150

            let currentTop = window.scrollY
            let targetTop = top - offset
            let deltaDistance = Math.abs(targetTop - currentTop)
            // Set time depend on distance
            let time = deltaDistance / 100 * 800
            // Maximum total time
            if (time > 800) {
                time = 800
            }

            let coords = {y: currentTop} // Start at (0, 0)

            let tween = new TWEEN.Tween(coords)
                .to({y: targetTop}, time) // 100px 500ms
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start()
        }
    })
}

// Setup the animation loop.
function animate(time) {
    requestAnimationFrame(animate)
    TWEEN.update(time)
}
