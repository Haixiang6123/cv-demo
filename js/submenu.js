!function () {
    let view = document.querySelectorAll('nav.menu > ul > li')
    let controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
            for (let i = 0; i < view.length; i++) {
                view[i].onmouseenter = function (event) {
                    let currentTarget = event.currentTarget
                    currentTarget.classList.add('active')
                }
                view[i].onmouseleave = function (event) {
                    let currentTarget = event.currentTarget
                    currentTarget.classList.remove('active')
                }
            }
        },
    }

    controller.init(view)
}()
