import React, { useState } from 'react'
import { useEffect } from 'react'
import submissionStore from '../store/submission.store'
import { useParams } from 'react-router-dom';
import { get } from 'react-hook-form';
import { ChevronDown, ChevronUp, Loader2 } from 'lucide-react';
import {easeInOut, easeOut, motion} from "motion/react"
import { Editor, useMonaco } from '@monaco-editor/react';
import myCustomTheme from '../pages/codeEditorTheme';

function SubmissionComponent({ problemId }) {
  const monaco = useMonaco();
  const { submissionByUser, getSubmissionByProblemId } = submissionStore();
  const [openSubmission, setOpenSubmission] = useState("")
  const [openTestcase, setOpenTestcase] = useState("")
  const [openSourcecode, setOpenSourcecode] = useState("")

  const toggleOpenSubmission = (id) => {
    setOpenSubmission(prev => prev === id ? "" : id);
  };
  const toggleOpenTestcase = (id) => {
    setOpenTestcase(prev => prev === id ? "" : id);
  };
  const toggleOpenSourcecode = (id) => {
    setOpenSourcecode(prev => prev === id ? "" : id);
  };

  useEffect(() => {
    getSubmissionByProblemId(problemId).then(() => console.log("submission loaded"))
    if(monaco){
      monaco.editor.defineTheme('myCustomTheme', myCustomTheme);
      monaco.editor.setTheme('myCustomTheme');
    }
  }, [monaco])
  return (
    <div className='h-full w-full'>
      {submissionByUser ? (<div className=' py-1 px-2'>

        {submissionByUser.map((elem) => <div className='flex flex-col bg-[#2d2c2c] my-4 rounded-lg px-3 py-3 text-sm font-semibold hover:bg-[#383838] hover:cursor-pointer' key={elem.id} onClick={() => toggleOpenSubmission(elem.id)}>
          <div className='flex justify-between items-center w-full '>
            <span className={`${elem.status === "ACCEPTED" ? "text-green-500" : "text-red-600"} flex justify-start w-[33%]`}>{elem.status}</span>
            <span className=' flex justify-center w-[33%] text-sm text-neutral-300 '>{elem.createdAt.split("T")[0]}</span>
            <span className=' flex justify-end w-[33%] '>{elem.id === openSubmission ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</span>
          </div>
          {elem.id === openSubmission ? (<motion.div
          initial={{height:"0px"}}
            animate={{height: "100%"}}
            transition={{
              duration:0.2,
              ease:easeOut
            }}
           className='bg-[#2d2c2c] overflow-hidden rounded-lg p-2'>
            {elem.testcase.map((testElem) => (<div key={testElem.id} className='bg-[#2d2c2c] px-2 py-1 rounded-lg' onClick={(e) => {
              e.stopPropagation();
              toggleOpenTestcase(testElem.id)
            }}><div className='bg-[#353333] text-sm text-neutral-300 font-normal px-2 py-1 rounded-t-lg flex justify-between items-center'>{`TestCase ${testElem.testCase}`} {testElem.id === openTestcase ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</div>
            {openTestcase === testElem.id ? (<motion.div
            initial={{height:"0px"}}
            animate={{height: "100%"}}
            transition={{
              duration:0.2,
              ease:easeOut
            }}
             className='bg-[#353333] py-1 rounded-b-lg'>
              <div className='my-2 px-2 rounded-lg'>Expected: <span className="bg-[#3d3c3c] px-3 rounded-lg text-sm text-neutral-300 font-normal py-0.5">{testElem.expected}</span></div>
              <div className='my-2 px-2 py-1 rounded-lg'>Output: <span className="bg-[#3d3c3c] px-3 rounded-lg text-sm text-neutral-300 font-normal py-0.5">{testElem.stdout}</span></div>
            </motion.div>) : ""}
            </div>))}
            <div className='bg-[#353333] my-2 px-2 py-1 rounded-lg flex justify-between items-center text-sm text-neutral-300' onClick={(e) =>{
              e.stopPropagation()
              toggleOpenSourcecode(elem.id)
            }}>Source code {elem.id === openSourcecode ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</div>
            {openSourcecode ? (<div className='h-52 flex justify-center bg-neutral-800 py-2 rounded-lg'>
              {console.log(elem.language)}
              <Editor onClick={(e) => e.stopPropagation()} language={(elem.language).toLowerCase()} theme="myCustomTheme" value={elem.sourceCode} height={"100%"}  width={"98%"} options={{
                            minimap: { enabled: false },
                            readOnly:true,
                            fontFamily: 'JetBrains Mono',
                            fontSize: 14,
                            lineNumbers: "on",
                            roundedSelection: false,
                            scrollBeyondLastLine: false,
                            automaticLayout: true,
                            renderLineHighlight: "none",
                            wordWrap: "on",
                          }}></Editor>
            </div>) : ""}

          </motion.div>) : ""}
        </div>)}
      </div>) : (<Loader2 className='animate-spin' />)}
    </div>
  )
}

export default SubmissionComponent