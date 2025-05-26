import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import DescriptionComponent from "../components/DescriptionComponent";
import EditorialsComponent from "../components/EditorialsComponent";
import SolutionComponent from "../components/SolutionComponent";
import SubmissionComponent from "../components/SubmissionComponent";
import { Editor, useMonaco } from "@monaco-editor/react";
import { useParams } from "react-router-dom";
import {useForm, Controller} from "react-hook-form"
import myCustomTheme from "./codeEditorTheme";
import {useScroll, useMotionValueEvent,} from "motion/react";
import { Circle, Equal, FileCode2, Flame, Loader2, WineOff } from "lucide-react";
import problemStore from "../store/problem.store";
import toast from "react-hot-toast";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getLanguageId } from "../lib/getLanguageId";
import codeExecutionStore from "../store/codeExecution.store";




const leftBarElements = ["Description", "Editorials", "Solution", "Submission"];
const codeExecutionSchema = z.object({
  source_code: z.string().min(1, "source code should be of min 1 char"),
})

function CodeExecutionPage() {
  
  const a = localStorage.getItem("mycode");
  
  const monaco = useMonaco();
  const {problemId} = useParams();
  const { getProblemByID, problemData } = problemStore();
  const {execute, isExecuting, executionData} = codeExecutionStore();
  const { scrollY } = useScroll();
  const {control, register, handleSubmit, setValue, formState:{errors}} = useForm({
    resolver: zodResolver(codeExecutionSchema),
    defaultValues: {
    source_code: a, // set a default here
  }})
  
  const leftContainerRef = useRef();
  const outerContainerRef = useRef();

  
  let codeEditorData;
  let availableLanguage;
  // const {codesnippet, setCodeSnippet} = useState("")
  const [scroll, setScroll] = useState(false);
  const [topHeight, setTopHeight] = useState(70);
  const [leftWidth, setLeftWidth] = useState(50);
  const [showElement, setShowElement] = useState("Description")
  const [language, setLanguage] = useState("JAVASCRIPT")
  const [testcaseNumber, setTestcaseNumber] = useState(1)

  useEffect(() => {

    window.addEventListener("keydown", (e) => {
      if((e.ctrlKey || e.metaKey) && e.key === "s"){
        e.preventDefault();
        toast.success("code saved Successfully");
      }
    })
    
    if(monaco){
      monaco.editor.defineTheme('myCustomTheme', myCustomTheme);
      monaco.editor.setTheme('myCustomTheme');
      
      // console.log("I am out")
      getProblemByID(problemId).then((res) => {
        // console.log("I am in")
        // console.log(res)
        availableLanguage = Object.keys(res.referenceSolution);
        // console.log(availableLanguage)
        setLanguage(availableLanguage[0])
        // console.log("I am in2")
        
        const existingData = JSON.parse(localStorage.getItem(`${problemId}-EditorCode`) || "{}")
        // console.log("helo loo", existingData)
        // console.log("I am in3")
        codeEditorData = {...existingData};
        console.log("code editor data", codeEditorData)
        availableLanguage.map((elem) => {
          if(!codeEditorData[elem]){
            codeEditorData[elem] = res.codesnippets[elem]
          }
        })
        // console.log(codeEditorData)
        // console.log(JSON.stringify(codeEditorData))
        localStorage.setItem(`${problemId}-EditorCode`, JSON.stringify(codeEditorData))
        setValue("source_code", codeEditorData[availableLanguage[0]])
      }).catch((error) => console.log(error))
      
      
    }

    
  

    return ()=> {
      window.removeEventListener("keydown" , () => (console.log("hello world")));
      localStorage.removeItem(`${problemId}-EditorCode`)
    }

}, [monaco]);








  



  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (latest > 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  const dragStart = (e) => {
    // console.log(e);
    // e.clientY
    // console.log(e.getBoundingClientRect().top);
    // console.log(containerRef.current);
  }



  const onDragY = (e) => {
    const newHeight = (e.clientY - leftContainerRef.current.getBoundingClientRect().top) / (leftContainerRef.current.offsetHeight);
    // console.log(newHeight);
    if (0.1 < newHeight && newHeight < 0.8) {
      // e.target.draggable = false;
      setTopHeight(newHeight * 100)
    };
  }

  const onDragX = (e) => {
    e.preventDefault();
    const newWidth = (e.clientX - outerContainerRef.current.getBoundingClientRect().left) / (outerContainerRef.current.offsetWidth)
    // console.log(newWidth);
    if (0.1 < newWidth && newWidth < 0.9) {
      setLeftWidth(newWidth * 100)
      // console.log("new width", newWidth);
    }
  }

  const onDragEnd = (e) => {
    e.preventDefault();
    const newWidth = (e.clientX - outerContainerRef.current.getBoundingClientRect().left) / (outerContainerRef.current.offsetWidth)
    if (0.1 < newWidth && newWidth < 0.9) {
      setLeftWidth(newWidth * 100)
      // console.log("new width", newWidth);
    }
  }

  const onSubmit = async (data) => {
    try {
      const stdin = problemData.testCases.map((elem) => (elem.input))
      const expected_output = problemData.testCases.map((elem) => (elem.output))
      data.language_id = getLanguageId(language)
      data.problemId = problemId
      data.stdin = stdin
      data.expected_output = expected_output
      console.log("mera dataaaaa", data);
      await execute(data);
      console.log("baale baale")
    } catch (error) {
      // console.log(error)
    }


  }

  return problemData ? (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center min-h-screen w-full relative text-white overflow-hidden" style={{
        backgroundImage: "url(./public/bg-dark.png)",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }} >
        {/* <Navbar className="" isScroll={scroll} /> */}
        <div className="text-white w-full bg-black h-10 mb-4 flex justify-center items-center">
          <button type="submit" className="bg-[#00ff006e] text-neutral-200 cursor-pointer rounded-lg px-4 ">{isExecuting ? <Loader2 className="animate-spin" /> : "Submit"}</button>
        </div>

        <div ref={outerContainerRef} className="w-[90%] h-[calc(100vh-100px)] flex" >
          <div
            ref={leftContainerRef}
            className=" h-full relative" style={{ width: `${leftWidth}%` }}>
              {/* //description bar  */}
            <div className={`bg-black border border-neutral-800 px-2 pt-1 w-[100%] rounded-sm`} style={{ height: `${topHeight}%` }}>
              <div className="bg-black h-fit w-full ">
                <ul className="flex items-center px-3 gap-2 overflow-hidden">
                  {leftBarElements.map((elem, index) => (<li key={index} className={`hover:bg-[#242424]
                  ${showElement === elem ? "bg-[#242424]" : ""}`} style={{borderRadius:"8px 8px 0px 0px"}}><button className="cursor-pointer px-3 py-1 text-sm" onClick={(e) => {
                    e.preventDefault();
                    setShowElement(elem)
                    }}>{elem}</button></li>))}
                </ul>
              </div>
              <div className="bg-[#242424] rounded-sm w-full overflow-x-hidden" style={{height:"calc(100% - 40px)"}}>
                {showElement === "Description" ? <DescriptionComponent></DescriptionComponent>: ""}
                {showElement === "Editorials" ? <EditorialsComponent></EditorialsComponent> : ""}
                {showElement === "Solution" ? <SolutionComponent language={language} value={problemData.referenceSolution[language]}></SolutionComponent> : ""}
                {showElement === "Submission" ? <SubmissionComponent problemId={problemId}></SubmissionComponent>: ""}
              </div>

            </div>
            <div draggable={true} onDrag={onDragY} className="group flex justify-center items-center cursor-row-resize ">
              <Equal size={16} color="white" className="" />
            </div>
              {/* //tescase bar  */}
            <div className={`bg-black px-2 w-[100%] rounded-sm border border-neutral-800`} style={{ height: `${100 - topHeight}%` }}>
              <div>
                <ul className="flex items-center gap-3 px-2 pt-2 bg-black overflow-x-hidden ">
                  {problemData.testCases.map((elem, index) => (<li onClick={() => setTestcaseNumber(index + 1)} key={index} className={`${testcaseNumber === (index + 1) ? "bg-neutral-800" : ""} flex items-center gap-2 hover:bg-neutral-800 rounded-lg px-4 cursor-pointer text-sm pb-1`} style={{borderRadius:"8px 8px 0px 0px"}}>{executionData ? <Circle size={10} color={executionData.testcase[index].passed ? "green" : "red"} fill={executionData.testcase[index].passed ? "green" : "red"} /> : ""} {`case ${index + 1}`}</li>))}
                </ul>
              </div>
              {executionData?.testcase[testcaseNumber - 1]?.stderr ? (
                <div className=" flex justify-center items-center bg-red-800 text-red-300 rounded-lg px-2 py-1 opacity-70 overflow-y-auto overflow-x-hidden" style={{ height: `calc(100% - 40px)` }}>
                  {executionData.testcase[testcaseNumber - 1].stderr}
                </div>
              )
            :(
              <div className="abcd flex flex-col gap-3  p-3 bg-[#242424] rounded-md overflow-y-auto " style={{ height: `calc(100% - 40px)` }}>
                {executionData ? (<div className={`font-semibold text-xl ${executionData.testcase[testcaseNumber - 1].passed ? "text-green-600" : "text-red-700"}`}>{executionData.testcase[testcaseNumber - 1].passed ? "Accepted" : "Wrong Answer"}
                  <span className="text-sm font-normal text-neutral-200 bg-neutral-700 rounded-lg px-2 py-1 mx-2">{executionData.testcase[testcaseNumber - 1].memory}</span>
                  <span className="text-sm font-normal text-neutral-200 bg-neutral-700 rounded-lg px-2 py-1 mx-2">{executionData.testcase[testcaseNumber - 1].time}</span>
                </div>) : ""}
                <div className="font-medium w-full">Input: <span className="bg-[#3d3c3c] px-3 rounded-lg text-sm text-neutral-300 font-normal py-0.5">{problemData.testCases[testcaseNumber - 1].input}</span></div>
                <div className="font-medium w-full">Target: <span className="bg-[#3d3c3c] px-2 rounded-lg text-sm text-neutral-300 font-normal py-0.5">{problemData.testCases[testcaseNumber - 1].output}</span></div>
                {executionData ? (<div className="font-medium w-full mt-5">Output: <span className="bg-[#3d3c3c] px-2 rounded-lg text-sm text-neutral-300 font-normal py-0.5">{`${executionData.testcase[testcaseNumber - 1].sdtout}`}</span></div>) : ""}
                {executionData ? (<div className="font-medium w-full">Expected: <span className="bg-[#3d3c3c] px-2 rounded-lg text-sm text-neutral-300 font-normal py-0.5">{executionData.testcase[testcaseNumber - 1].expected}</span></div>) : ""}
              </div>
            )}
            </div>
          </div>


          <div draggable={true} onDrag={onDragX} onDragEnd={onDragEnd} className="flex flex-col justify-center">
            <Equal size={16} color="white" className="self-center rotate-90" />
          </div>
          <div className="h-full bg-[#171717] rounded-sm" style={{ width: `${100 - leftWidth}%` }}>
            <div className="bg-black h-6 flex justify-between text-white text-sm px-2">
              <span className="flex gap-2 text-sm"><FileCode2 size={20} /> Code Editor</span>
              <div>
                <Controller
                  name = "language"
                  control={control}
                  render={({field}) => (
                    <select onChange={async (e) => {
                      field.onChange(e);
                      const newValue = e.target.value
                      setLanguage(newValue)
                      const editorData = JSON.parse(localStorage.getItem(`${problemId}-EditorCode`))
                      setValue("source_code", editorData[newValue])
                }} className="bg-[#242424] rounded-lg px-2 focus:outline-none focus:shadow-sm cursor-pointer"> 
                {Object.keys(problemData.referenceSolution).map((elem, index) => (
                  <option key={index} value={elem}>{elem.toLowerCase()}</option>
                ))}
            {console.log(language)}
          </select>
                  )}
                 />
              </div>
            </div>
            {/* {console.log("bhiyaa ji", problemData.codesnippets[language])} */}
            <Controller 
            name="source_code" 
            control={control}
            render={({field}) => (
              <Editor language={language.toLowerCase()} theme="myCustomTheme"
              onMount={(editor, monaco) =>{
                editor.addCommand(
                  monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
                  () => {
                    toast.success("Code saved successfully")
                  }
                )
              }}
               onChange={(value, event) => {
                field.onChange(value);
                console.log("heelo world")
                const editorData = JSON.parse(localStorage.getItem(`${problemId}-EditorCode`))
                editorData[language] = value
                localStorage.setItem(`${problemId}-EditorCode`, JSON.stringify(editorData))
              }} value={field.value}  width={"100%"} options={{
              minimap: { enabled: false },
              fontFamily: 'JetBrains Mono',
              fontSize: 14,
              lineNumbers: "on",
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              renderLineHighlight: "none",
              wordWrap: "on",
            }}></Editor>
            )}
            />
            
          </div>
        </div>


        {/* <div className="text-white">hello world</div>
      <div className="text-white">hello world</div>
      <div className="text-white">hello world</div>
      <div className="text-white">hello world</div>
      <div className="text-white">hello world</div>
      <div className="text-white">hello world</div>
      <div className="text-white">hello world</div> */}
      </form>
    </>
  ) : (<div className="h-full w-full flex justify-center items-center">
    <Loader2 size={32} color="white" className=" animate-spin"></Loader2>

  </div>)
}

export default CodeExecutionPage;
