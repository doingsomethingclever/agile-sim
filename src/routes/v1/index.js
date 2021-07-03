const express = require('express');
const sprintRoute = require('./sprint.route')

const router = express.Router();

const defaultRoutes = [
  {
    path: '/sprint',
    route: sprintRoute,
  },
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
