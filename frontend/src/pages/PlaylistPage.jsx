import React, { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { useNavigate } from "react-router-dom";

function PlaylistPage() {
    const navigate = useNavigate()
    const [playlist, setPlaylist] = useState([]);
    const [paidPlaylist, setPaidPlaylist] = useState([])
    useEffect(() => {
        axiosInstance.get("/playlist/").then((res) => setPlaylist(res.data.data));
        axiosInstance.get("/playlist/paid").then((res) => setPaidPlaylist(res.data.data))
    }, []);
    return (
        <div className="min-h-screen w-full text-white">
            <div>hello</div>
            <div>
                <div className="text-2xl font-bold">Paid Playlist</div>

                <div className="flex gap-3 justify-center items-center">
                    {paidPlaylist.map((elem) => (
                        <div key={elem.id} onClick={() => navigate(`/playlist/paid/${elem.id}`)} className="bg-[#242424] w-60 px-2 py-2 rounded-lg min-h-36 flex flex-col gap-3 hover:bg-[#292828] cursor-pointer">
                            <div className="rounded-lg">
                                <img
                                    className="self-center"
                                    src={elem.coverImage}
                                    width={"250px"}
                                    height={"500px"}
                                />
                            </div>
                            <div className="text-white font-bold text-xl">{elem.name}</div>
                            <div className="text-sm text-neutral-400">{elem.description.slice(0, 10)}...</div>
                            <div className="text-lg font-medium text-white">₹ {elem.basePrice}</div>
                        </div>
                        
                    ))}
                </div>
            </div>

            <div>
                <div className="text-2xl font-bold">Your Playlist</div>

                <div className="flex gap-3 justify-center items-center">
                    {playlist.map((elem) => (
                        <div key={elem.id} onClick={() => navigate(`/playlist/${elem.id}`)} className="bg-[#242424] w-60 px-2 py-2 rounded-lg min-h-36 flex flex-col hover:bg-[#292828] cursor-pointer">
                            <div className="rounded-lg">
                                <img
                                    className="self-center"
                                    src={elem.coverImage}
                                    width={"250px"}
                                    height={"500px"}
                                />
                            </div>
                            <div className="text-white font-bold text-xl">{elem.name}</div>
                            <div className="text-sm text-neutral-400">{elem.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PlaylistPage;
