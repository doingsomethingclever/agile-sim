const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');

const getSprintById = catchAsync(async (req, res) => {
  /* const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']); */
  /* const result = await userService.queryUsers(filter, options); */
  const sprintId = req.params.sprintId;
  // Fetch sprint, lanes, stories, for a sprint
  const sprintData = entityManager.findOne(SprintEntity, {
    where: {sprintId},
    using: [Lanes, Stories]
  })

  const mockResponse = {
    sprintName: "ABC",
    sprintGoals: "",
    lanes: [
      {
        laneDetails: {
          name: ""
        },
        stories:[
          {
            name: "",
            assigne: {

            }
          }
        ]
      },
      {
        laneDetails: {

        },
        stories:[
          {
            name: "",
            assigne: {

            }
          }
        ]
      }
    ]
  }
  res.send(mockResponse);
});

const assignStoryToLane = catchAsync(async (req, res) => {
  const reqBody = req.body;
  const {laneId, status}= reqBody;
  entityManager.update(Stories, {
    where: {storyId},
    update: {laneId}
  });

});

module.exports = {
  getSprintById,
  assignStoryToLane
};
