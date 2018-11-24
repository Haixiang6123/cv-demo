!function () {
    let specialTags = document.querySelectorAll('section[data-scroll]')
    let navItems = document.querySelectorAll('nav.menu > ul > li')

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

    function simulateLoading() {
        setTimeout(function () {
            document.querySelector('#loading-wrapper').classList.remove('active')
            setTimeout(() => {
                scrollHighlight(navItems, specialTags)
            }, 150)
        }, 0)
    }


    function initScrollAnimation() {
        specialTags.forEach((tag) => {
            tag.classList.add('float-up')
        })

        window.addEventListener('scroll', function (event) {
            if (window.scrollY > 0) {
                document.querySelector('#topNavBar').classList.add('sticky')
            }
            else {
                document.querySelector('#topNavBar').classList.remove('sticky')
            }

            scrollHighlight(navItems, specialTags)
        })
    }

    initScrollAnimation()

    simulateLoading()
}()
