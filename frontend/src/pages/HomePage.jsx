import React, { useEffect, useState } from "react";
import authStore from "../store/auth.store";
import { useNavigate } from "react-router-dom";
import MonakoEditor from "../components/MonakoEditor";
import { axiosInstance } from "../lib/axios";
import { Loader2 } from "lucide-react"

function HomePage() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
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
      <div className="flex flex-col gap-2">{problems.map((elem) => (<div className="bg-neutral-300 rounded-lg p-2" key={elem.id}>
        <span>{elem.title}</span>
      </div>))}</div>
    </>
  );
}

export default HomePage;
