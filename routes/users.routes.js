const { Router } = require('express');

const router = Router();

router.get('/users', (req, res) => {
    res.send('Este es un GET a users desde mi servidor');
});

router.post('/users', (req, res) => {
    console.log(req.body);
    res.json({
        title: 'Respuesta POST a users',
        body: req.body
    });
});



module.exports = router;