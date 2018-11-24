!function () {
    let view = document.querySelector('section.message')

    let model = {
        init: function () {
            let APP_ID = '0K5L24aK460eefA9G78YILC4-gzGzoHsz'
            let APP_KEY = 'KXu4xLDOitvebqebNg83Dt2n'

            AV.init({appId: APP_ID, appKey: APP_KEY})
        },
        fetch: function () {
            let query = new AV.Query('Message')
            return query.find()
        },
        save: function (name, content) {
            let Message = AV.Object.extend('Message')
            let message = new Message()
            return message.save({
                content: content,
                name: name
            })
        }
    }

    let controller = {
        view: null,
        messageList: null,
        noteForm: null,
        init: function (view) {
            this.view = view
            this.noteList = view.querySelector('#noteList')
            this.noteForm = view.querySelector('form')
            model.init()
            this.loadMessage()
            this.bindEvents()
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
            model.save(name, content).then((object) => {
                this.loadMessage()
            })
        }
    }

    controller.init(view)
}()

