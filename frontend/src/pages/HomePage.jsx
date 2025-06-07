import React, { useEffect, useState } from "react";
import authStore from "../store/auth.store";
import { useNavigate } from "react-router-dom";
import MonakoEditor from "../components/MonakoEditor";
import { axiosInstance } from "../lib/axios";
import { Loader2 } from "lucide-react"
import { useMotionValueEvent, useScroll } from "motion/react";
import Navbar from "../components/Navbar";
import { Code2, CheckSquare, Music, ArrowRight, BookOpen, Target, ListMusic } from "lucide-react"

function HomePage() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { scrollY } = useScroll();
  const [scroll, setScroll] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (latest > 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  useEffect(() => {

    axiosInstance.get("/problem/get-all-problems/")
      .then((res) => setProblems(res.data.data))
      .then(() => setLoading(!loading))
    // setProblems(res.data.data);
  }, []);
  const navigate = useNavigate();
  const { logout } = authStore();

  return (
    <>

      {/* {loading ? <Loader2 className="animate-spin"/> : (<p>hello world</p>)} */}
      <div className="flex flex-col gap-2 min-h-screen w-full items-center relative text-white">
        <Navbar isScroll={scroll}></Navbar>
        <div className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl mt-6">🚀 Ace Your Coding Interviews</div>
        <div className="text-sm text-neutral-400 font-medium w-96 mt-2 text-center">Whether you're preparing for your first job or your next big tech interview, our platform helps you build the 
confidence and mastery you need.</div>
        <div className="flex gap-10 mt-4">
          <button className="bg-[#0a2b52] border-2  border-[#0646a5a1] px-4 py-2 rounded-2xl font-mono">Practice</button>
          <button className="bg-[#de930a] border-2  border-[#f76b12] px-4 py-2 rounded-2xl font-mono">Learn</button>
          <button className="bg-[#09d12270] border-2  border-[#23a525a1] px-4 py-2 rounded-2xl font-mono">Succeed</button>
        </div>
        <div>
          <div>Solve problems</div>
        </div>
        <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Solve Questions Section */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Solve Questions</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Challenge yourself with thousands of coding problems ranging from beginner to expert level. Master
                  algorithms, data structures, and problem-solving techniques used by top tech companies.
                </p>
              </div>

              <div className="mt-auto">
                <button onClick={() => navigate("/allProblem")} className="group/btn w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-orange-500/25">
                  <BookOpen className="h-5 w-5" />
                  <span>Start Solving</span>
                  <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Tasks Section */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckSquare className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Manage Tasks</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Organize your learning journey with our intelligent task management system. Set goals, track progress,
                  and stay motivated with personalized study plans and reminders.
                </p>
              </div>

              <div className="mt-auto">
                <button onClick={() => navigate("/callstack")} className="group/btn w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-orange-500/25">
                  <Target className="h-5 w-5" />
                  <span>Manage Tasks</span>
                  <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Playlist Section */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Music className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Create Your Playlist</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Curate personalized learning playlists with your favorite problems and topics. Build custom study
                  sessions, share with friends, and learn at your own pace.
                </p>
              </div>

              <div className="mt-auto">
                <button onClick={() => navigate("/playlist")} className="group/btn w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-orange-500/25">
                  <ListMusic className="h-5 w-5" />
                  <span>Create Playlist</span>
                  <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: Add some decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
      </div>
    </>
  );
}

export default HomePage;



