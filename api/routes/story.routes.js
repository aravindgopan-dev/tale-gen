const express = require("express");
const router = express.Router();
const {
  createStory,
  getAllStories,
  getPagesOfStory,
  deleteStory,
} = require("../controllers/story.controller");
const geminiMiddleware = require("../services/gemini.service");
const generateImagesMiddleware = require("../services/replicate.service");

router
  .post("/", geminiMiddleware, generateImagesMiddleware, createStory)
  .get("/", getAllStories)
  .get("/:storyId/pages", getPagesOfStory)
  .delete("/:storyId", deleteStory);

module.exports = router;
