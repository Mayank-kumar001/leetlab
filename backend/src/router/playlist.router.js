import express from "express";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import { getAllListDetails, getPlayListDetails, createPlaylist, addProblemToPlaylist, deletePlaylist, removeProblemFromPlaylist } from "../controller/playlist.controller.js";

const playlistRouter = express.Router();

playlistRouter.get("/", isLoggedIn, getAllListDetails);
playlistRouter.get("/:playlistId", isLoggedIn, getPlayListDetails);
playlistRouter.post("/create-playlist", isLoggedIn, createPlaylist);
playlistRouter.post("/:playlistId/add-problem", isLoggedIn, addProblemToPlaylist);
playlistRouter.delete("/:playlistId", isLoggedIn, deletePlaylist);
playlistRouter.delete("/:playlistId/remove-problem", isLoggedIn, removeProblemFromPlaylist)

export default playlistRouter;