import React, { useEffect, useState } from "react";
import problemStore from "../store/problem.store";

import TagComponent from "../components/TagComponent";
import { Bookmark, X } from "lucide-react";
import Navbar from "../components/Navbar";
import { useScroll, useMotionValueEvent } from "motion/react";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const topics = ["string", "Dynamic Programming"];

function AllProblemPage() {
    const navigate = useNavigate();
    const { getAllProblem, allProblems } = problemStore();
    const { scrollY } = useScroll();
    const [scroll, setScroll] = useState(false);
    const [topic, setTopic] = useState("All");
    const [playlist, setPlaylist] = useState([]);
    const [selectedPlaylistId, setSelectedPlaylistId] = useState("");
    const [openPlaylistModal, setOpenPlaylistModal] = useState(false);
    const [selectedProblemId, setSelectedProblemId] = useState("");

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest);
        if (latest > 10) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    });
    useEffect(() => {
        getAllProblem().then(() => console.log("all problem fetched"));
        axiosInstance.get("/playlist/").then((res) => setPlaylist(res.data.data));
    }, []);

    const addProblemToplaylist = async () => {
        try {
            console.log(selectedProblemId);
            if (selectedPlaylistId === "") {
                toast.error("Select a playlist");
                return;
            }
            const res = await axiosInstance.post(
                `/playlist/add-problem/${selectedPlaylistId}`,
                { problemId: selectedProblemId }
            );
            toast.success("problem added to playlist");
            setSelectedPlaylistId("");
            setOpenPlaylistModal(false);
        } catch (error) {
            console.log(error.response.data);
            toast.error("Problem already exists in this playlist");
        }
    };

    return (
        <>
            <div
                className={`text-white w-full min-h-screen flex flex-col gap-2 items-center`}>
                <Navbar className="" isScroll={scroll} />
                <div className="flex justify-end gap-2 w-full px-24 h-full ">
                    <label>SortBy</label>
                    <div className="">
                        <select
                            onChange={(e) => setTopic(e.target.value)}
                            className="bg-[#242424] py-1 rounded-lg px-2">
                            <option value="All">All</option>
                            {topics.map((elem, index) => (
                                <option key={index} value={`${elem}`}>
                                    {elem}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className=" flex flex-col items-center gap-4 w-[90%] h-full mt-2 ">
                    {allProblems
                        .filter((elem) => {
                            if (topic === "All") {
                                return elem;
                            }
                            return elem.tags[0] === topic;
                        })
                        .map((elem) => (
                            <div onClick={() => navigate(`/code-execute/${elem.id}`)}
                                key={elem.id}
                                className=" py-2 px-4 hover:bg-[#242424] w-full rounded-lg flex justify-between cursor-pointer bg-[#191919]">
                                <span className="">{elem.title}</span>
                                <span className="flex gap-2  justify-start">
                                    <TagComponent>{elem.difficulty}</TagComponent>
                                    <TagComponent>{elem.tags[0]}</TagComponent>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setOpenPlaylistModal(!openPlaylistModal);
                                            setSelectedProblemId(elem.id);
                                        }}
                                        className="bg-orange-400 p-1 rounded-2xl relative">
                                        <Bookmark color="white" fill="white" />
                                    </button>
                                </span>
                            </div>
                        ))}
                    {openPlaylistModal ? (
                        <div className="bg-neutral-900 py-2  px-5 flex flex-col gap-2 w-52 h-60 rounded-lg absolute top-2/4 left-2/4 -translate-[50%] shadow-2xl shadow-orange-500/20">
                            <div
                                onClick={() => setOpenPlaylistModal(!openPlaylistModal)}
                                className="self-end mb-2 cursor-pointer">
                                <X size={16} />
                            </div>
                            <button onClick={() => navigate("/create-playlist")} className="bg-orange-500 rounded-lg cursor-pointer">
                                Create playlist
                            </button>
                            <div className="w-full flex items-center justify-center gap-2">
                                <span className="h-0 w-[25%] border border-gray-200"></span>
                                <span className="text-sm text-center text-gray-500 font-medium">
                                    or Existing Playlist
                                </span>
                                <span className="h-0 w-[25%] border border-gray-200"></span>
                            </div>
                            <div className="flex justify-center">
                                <select
                                    onChange={(e) => setSelectedPlaylistId(e.target.value)}
                                    className="bg-[#242424] py-1 rounded-lg px-2">
                                    <option value="">select a playlist</option>
                                    {playlist.map((elem) => (
                                        (!elem.isPaid ? (<option key={elem.id} value={`${elem.id}`}>
                                            {elem.name}
                                        </option>):"")
                                    ))}
                                </select>
                            </div>
                            <button
                                onClick={addProblemToplaylist}
                                className="bg-orange-500 rounded-lg cursor-pointer">
                                Add
                            </button>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
}

export default AllProblemPage;
