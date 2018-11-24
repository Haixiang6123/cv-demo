!function() {
    function initJumpAnimation() {
        let view = document.querySelectorAll('nav.menu > ul > li > a')

        view.forEach((aTag) => {
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

    requestAnimationFrame(animate)

    initJumpAnimation()
}()
