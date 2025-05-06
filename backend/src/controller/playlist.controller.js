import { apiResponse } from "../libs/apiResponse.js";
import { apiError } from "../libs/apiError.js";
import { db } from "../libs/db.js";

export const getAllListDetails = async (req, res) => {
    try {
        const allPlaylists = await db.playlist.findMany({
            where: {
                userId: req.user.id
            },
            include: {
                problems: {
                    include: {
                        problem: true
                    }
                }
            }
        })
        if(!allPlaylists){
            throw new apiError(400, "Error while fetching all playlists")
        }
        res.status(200).json(new apiResponse(200, allPlaylists, "all playlists fetched successfully"))
    } catch (error) {
        console.log(error);
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while fetching all playlists",
            success: false,
        })
    }
}
export const getPlayListDetails = async (req, res) => {
    try {
        const playlist = await db.playlist.findUnique({
            where: {
                id: req.params.playlistId,
                userId: req.user.id
            },
            include: {
                problems: {
                    include: {
                        problem: true
                    }
                }
            }
        })
        if(!playlist){
            throw new apiError(404, "Playlist not found")
        }
        res.status(200).json(new apiResponse(200, playlist, "playlist fetched successfully"))
    } catch (error) {
        console.log(error);
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while fetching playlist",
            success: false,
        })
    }
}
export const createPlaylist = async (req, res) => {
    try {
        const { name, description } = req.body;
        const playlist = await db.playlist.create({
            data: {
                name,
                description,
                userId: req.user.id
            }
        })
        
        return res.status(201).json(new apiResponse(201, playlist, "playlist created successfully"))
    } catch (error) {
        console.log(error);
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while creating playlist",
            success: false,
        })
    }
}
export const addProblemToPlaylist = async (req, res) => {
    try {
        const { playlistId } = req.params;
        const { problemIds} = req.body; // this should be an array so that for future we can implement adding problem in batches
        if(!Array.isArray(problemIds) || problemIds.length === 0){
            throw new apiError(400, "Invalid problem id");
        }
        const addedproblems = await db.problemInPlaylist.createMany({
            data:problemIds.map((problemId) => ({
                playListId: playlistId,
                problemId
            }))
        });
        
        res.status(201).json(new apiResponse(201, addedproblems, "problems added to playlist successfully"))
    } catch (error) {
        console.log(error);
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while adding Problems to playlist",
            success: false,
        })
    }
}
export const deletePlaylist = async (req, res) => {
    try {
        const { playlistId } = req.params;
        const deletedPlaylist = await db.playlist.delete({where:{id:playlistId}})
        res.status(200).json(new apiResponse(200, deletedPlaylist, "playlist deleted successfully"))
    } catch (error) {
        console.log(error);
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while deleting playlist",
            success: false,
        })
    }
}
export const removeProblemFromPlaylist = async (req, res) => {
    try {
        const { playlistId } = req.params;
        const { problemIds } = req.body;
        if(!Array.isArray(problemIds) || problemIds.length === 0){
            throw new apiError(400, "Invalid problem id");
        }
        const removedProblems = await db.problemInPlaylist.deleteMany({
            where: {
                playListId: playlistId,
                problemId: {
                    in: problemIds
                }
            }
        })
        res.status(200).json(new apiResponse(200, removedProblems, "problems removed from playlist successfully"))
    } catch (error) {
        console.log(error);
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            })
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while removing problems from playlist",
            success: false,
        })
    }
}