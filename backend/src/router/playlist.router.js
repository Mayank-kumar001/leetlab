import express from "express";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import { getAllListDetails, getPlayListDetails, createPlaylist, addProblemToPlaylist, deletePlaylist, removeProblemFromPlaylist, getPaidPlaylistDetails, getAllPaidPlaylist } from "../controller/playlist.controller.js";

const playlistRouter = express.Router();

playlistRouter.get("/", isLoggedIn, getAllListDetails);
playlistRouter.post("/create-playlist", isLoggedIn, createPlaylist);
playlistRouter.post("/add-problem/:playlistId", isLoggedIn, addProblemToPlaylist);
playlistRouter.get("/paid", getAllPaidPlaylist)
playlistRouter.get("/paid/:playlistId", isLoggedIn, getPaidPlaylistDetails)
playlistRouter.get("/:playlistId", isLoggedIn, getPlayListDetails);
playlistRouter.delete("/:playlistId", isLoggedIn, deletePlaylist);
playlistRouter.delete("/remove-problem/:playlistId", isLoggedIn, removeProblemFromPlaylist)

export default playlistRouter;