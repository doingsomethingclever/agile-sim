const express = require('express');
/* const validate = require('../../middlewares/validate'); */


const sprintController = require('../../controllers/sprint.controller');
const router = express.Router();

router.get('/board',[], sprintController.getSprintById);
/*
router.post('/board',[], sprintController.createBoard);
router.post('/story',[], sprintController.createStory);
router.put('/story/assign/user/:storyId',[], sprintController.assignStoryToUser);
router.put('/story/assign/sprint/:storyId',[], sprintController.assignStoryToSprint);
router.put('/story/:storyId',[], sprintController.editStory);

router.delete('/story/:storyId',[], sprintController.assignStoryToSprint);
 */
/* router.get('/sprint',[], sprintController.getSprints); */
router.put('/story/assign/lanes',[], sprintController.assignStoryToLane);
router.get('/sprint/:sprintId',[], sprintController.getSprintById);
/* 
router.get('/lanes',[], sprintController.getAllLanes);
router.get('/lanes/:lanesId',[], sprintController.getLaneById);

router.get('/stories',[], sprintController.getAllStories);
router.get('/stories/:storiesId',[], sprintController.getStoryById); */



module.exports = router