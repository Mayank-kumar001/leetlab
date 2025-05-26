import React from 'react'
import TagComponent from './TagComponent'
import problemStore from '../store/problem.store'
import { Loader2 } from 'lucide-react';

function DescriptionComponent() {
  const { problemData } = problemStore();

  return problemData ? (
    <div className='px-3 py-1'>
      <div className='font-semibold text-xl mb-2'>{problemData.title}</div>
      <div className='text-sm text-neutral-300 mb-3'>{problemData.description}</div>
      <div className='flex items-center gap-1 flex-wrap mb-3'>
      <span><TagComponent>{problemData.difficulty}</TagComponent></span>
      {problemData.tags.map((elem, index) => (<span key={index}><TagComponent>{elem}</TagComponent></span>))}
      </div>
      {problemData.examples.map((elem, index) => (
        <div key={index} className=' bg-[#2d2c2c] rounded-lg my-3 px-4 py-1 '>
          <div className="font-semibold">{`Example ${index + 1} :`}</div>
          <div className='px-2'>
            <div className='text-neutral-400 text-sm mb-1'><span className='font-medium text-white text-md'>Input:</span>  {elem.input}</div>
            <div className='text-neutral-400 text-sm mb-1'><span className='font-medium text-white text-md'>Output:</span>  {elem.output}</div>
            <div className='text-neutral-400 text-sm mb-1'><span className='font-medium text-white text-md'>Explanation:</span>  {elem.explanation}</div>
          </div>
        </div>
      ))}
      
      <div className='text-md font-medium'>Constraints</div>
      <div>
        <ul className='text-sm text-neutral-400 list-disc px-6'>
          {/* {problemData.constraints} */}
          {problemData.constraints.split("\n").map((elem, index) => (<li key={index}>{elem}</li>))}
        </ul>
      </div>

    </div>
  ) : ""


  
}

export default DescriptionComponent