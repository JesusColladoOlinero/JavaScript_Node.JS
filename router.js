'use strict';
const express = require('express');
const { getTeams } = require('./model.js');
const { getTeam } = require('./model.js');
const { getTeamsByFilter } = require('./model.js');

const router = express.Router();

router.get('/', (req, res) => {
    let data = {
        routes: {
            'teams': {
                methods: ['GET', 'POST']
            },
            '/team/find': {
                methods: ['POST']
            }
        }
    };
    res.json(data);
});

router.get('/teams', (req, res) => {
    getTeams().then((data) => {
        res.json(data);
    });
});

router.get('/team/:id', (req, res) => {
    let id = req.params.id
    getTeam(id).then((data) => {
        res.json(data);
    });
});

router.post('/team/find', (req, res) => {
    let filter = req.body;
    console.log(filter);
    getTeamsByFilter(filter).then((data) => {
        res.json(data);
    });
});

router.post('/teams', (req, res) => {
    let data = req.body;
    req.app.get('child').send(data);
    res.json(data);
});

module.exports = router;
