import { apiResponse } from "../libs/apiResponse.js";
import { apiError } from "../libs/apiError.js";
import { db } from "../libs/db.js";

export const getAllListDetails = async (req, res) => {
    try {
        const allPlaylists = await db.playlist.findMany({
            where: {
                userId: req.user.id,
            },
            include: {
                problems: {
                    include: {
                        problem: true,
                    },
                },
            },
        });

        const purchasedPlaylist = await db.playlist.findMany({
            where: {
                purchases: {
                    some: {
                        userId: req.user.id,
                        razorpayPaymentLinkStatus: "paid",
                    },
                },
            },
        });

        if (!allPlaylists) {
            throw new apiError(400, "Error while fetching all playlists");
        }
        res
            .status(200)
            .json(
                new apiResponse(
                    200,
                    [...allPlaylists, ...purchasedPlaylist],
                    "all playlists fetched successfully"
                )
            );
    } catch (error) {
        console.log(error);
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            });
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while fetching all playlists",
            success: false,
        });
    }
};
export const getPlayListDetails = async (req, res) => {
    try {
        const { playlistId } = req.params;
        let playlist;
        console.log("mil gyaa1")
        const playlistDetail = await db.playlist.findUnique({
            where: {
                id: playlistId,
            },
        });
        console.log(playlistDetail)

        if (playlistDetail.isPaid === false) {
            console.log(playlistId)
            console.log(req.user.id)
            playlist = await db.playlist.findUnique({
                where: {
                    id: playlistId,
                    userId: req.user.id,
                },
                include: {
                    problems: {
                        include: {
                            problem: true,
                        },
                    },
                },
            });
        } else {
            playlist = await db.playlist.findFirst({
                where: {
                    purchases: {
                        some: {
                            playlistId,
                            razorpayPaymentLinkStatus: "paid",
                        },
                    },
                },
                include: {
                    problems: {
                        include: {
                            problem: true,
                        },
                    },
                },
            });
        }

        if (!playlist) {
            throw new apiError(404, "Playlist not found");
        }
        res
            .status(200)
            .json(new apiResponse(200, playlist, "playlist fetched successfully"));
    } catch (error) {
        console.log(error);
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            });
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while fetching playlist",
            success: false,
        });
    }
};
export const createPlaylist = async (req, res) => {
    try {
        const { name, description } = req.body;
        const playlist = await db.playlist.create({
            data: {
                name,
                description,
                userId: req.user.id,
            },
        });

        return res
            .status(201)
            .json(new apiResponse(201, playlist, "playlist created successfully"));
    } catch (error) {
        console.log(error);
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            });
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while creating playlist",
            success: false,
        });
    }
};
export const addProblemToPlaylist = async (req, res) => {
    try {
        const { playlistId } = req.params;
        const { problemId } = req.body; // this should be an array so that for future we can implement adding problem in batches
        // if(!Array.isArray(problemIds) || problemIds.length === 0){
        //     throw new apiError(400, "Invalid problem id");
        // }
        const addedproblems = await db.problemInPlaylist.create({
            data: {
                playListId: playlistId,
                problemId: problemId,
            },
        });

        res
            .status(201)
            .json(
                new apiResponse(
                    201,
                    addedproblems,
                    "problems added to playlist successfully"
                )
            );
    } catch (error) {
        console.log(error);
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            });
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while adding Problems to playlist",
            success: false,
        });
    }
};
export const deletePlaylist = async (req, res) => {
    try {
        const { playlistId } = req.params;
        const deletedPlaylist = await db.playlist.delete({
            where: { id: playlistId },
        });
        res
            .status(200)
            .json(
                new apiResponse(200, deletedPlaylist, "playlist deleted successfully")
            );
    } catch (error) {
        console.log(error);
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            });
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while deleting playlist",
            success: false,
        });
    }
};
export const removeProblemFromPlaylist = async (req, res) => {
    try {
        const { playlistId } = req.params;
        console.log(req.body);
        const { problemId } = req.body;
        // if(!Array.isArray(problemIds) || problemIds.length === 0){
        //     throw new apiError(400, "Invalid problem id");
        // }
        const removedProblems = await db.problemInPlaylist.delete({
            where: {
                playListId_problemId: {
                    playListId: playlistId,
                    problemId,
                },
            },
        });
        res
            .status(200)
            .json(
                new apiResponse(
                    200,
                    removedProblems,
                    "problems removed from playlist successfully"
                )
            );
    } catch (error) {
        console.log(error);
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            });
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while removing problems from playlist",
            success: false,
        });
    }
};

export const getAllPaidPlaylist = async (req, res) => {
    // console.log("hello world 1")
    try {
        const paidPlaylist = await db.playlist.findMany({
            where: {
                isPaid: true,
            },
        });
        // console.log("hello world 2")
        res
            .status(200)
            .json(new apiResponse(200, paidPlaylist, "fetched paid playlist"));
    } catch (error) {
        // console.log(error);
        console.log("hello world");
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            });
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while fetching paid playlist",
            success: false,
        });
    }
};

export const getPaidPlaylistDetails = async (req, res) => {
    try {
        const { playlistId } = req.params;
        console.log("hello world");
        const details = await db.playlist.findUnique({
            where: {
                id: playlistId,
            },
        });
        console.log(details);
        if (!details.isPaid) {
            throw new apiError(400, "playlist not found");
        }
        res
            .status(200)
            .json(new apiResponse(200, details, "Details fetched successfully"));
    } catch (error) {
        console.log(error);
        if (error instanceof apiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message,
                success: false,
            });
        }
        return res.status(500).json({
            statusCode: 500,
            message: "Something went wrong while deleting playlist",
            success: false,
        });
    }
};
