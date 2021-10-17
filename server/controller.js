module.exports = {
    createList: (req, res) => {
        const {list, rating} = req.body
        const newList = {
            list,
            rating: +rating,
            id: globalId
        }

        list.push(newList)
        res.status(200).send(list)
        globalId++
    },

    deleteList: (req,res) => {
        const {id} = req.params

        let index = list.findIndex((elem) => +elem.id === +id)

        list.splice(index, 1)

        res.status(200).send(list)
    }
}