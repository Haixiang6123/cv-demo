!function () {
    let view = View('section.message')

    let model = Model({resourceName: 'Message'})

    let controller = Controller({
        init: function (view, model) {
            this.noteList = view.querySelector('#noteList')
            this.noteForm = view.querySelector('form')
            this.loadMessage()
        },
        loadMessage: function () {
            let query = new AV.Query('Message')
            model.fetch().then((messages) => {
                let array = messages.map((item) => item.attributes)
                this.noteList.innerHTML = ''
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = item.name + ': ' + item.content
                    this.noteList.append(li)
                })
            }, function (error) {
                alert('Fail')
            })
        },
        bindEvents: function () {
            this.noteForm.addEventListener('submit', (event) => {
                event.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let content = this.noteForm.querySelector('input[name=content]').value
            let name = this.noteForm.querySelector('input[name=name]').value
            model.save({name, content}).then((object) => {
                this.loadMessage()
            })
        }
    })

    controller.init(view, model)
}()
