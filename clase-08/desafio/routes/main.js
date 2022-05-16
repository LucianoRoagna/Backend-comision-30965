// /* REQUIRE'S *//
const {Router} = require('express')
const router = new Router()

// /* MAIN ROUTES */ //

router.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/clase-08/desafio/public/index.html')
})



 // /* EXPORTS */ //

 module.exports = router