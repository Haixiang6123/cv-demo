window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            let APP_ID = '0K5L24aK460eefA9G78YILC4-gzGzoHsz'
            let APP_KEY = 'KXu4xLDOitvebqebNg83Dt2n'

            AV.init({appId: APP_ID, appKey: APP_KEY})
        },
        fetch: function () {
            let query = new AV.Query(resourceName)
            return query.find()
        },
        save: function (object) {
            let X = AV.Object.extend(resourceName)
            let x = new X()
            return x.save(object)
        }
    }
}