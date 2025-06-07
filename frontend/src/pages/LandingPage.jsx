// import React, { useState } from 'react'
import Navbar from '../components/Navbar'
// import { useMotionValueEvent, useScroll } from 'motion/react';

// function LandingPage() {
//   const { scrollY } = useScroll();
//   const [scroll, setScroll] = useState(false)

//   useMotionValueEvent(scrollY, "change", (latest) => {
//         console.log("Page scroll: ", latest);
//         if (latest > 10) {
//             setScroll(true);
//         } else {
//             setScroll(false);
//         }
//     });

//   return (
//     <div className='text-white w-full min-h-screen flex flex-col items-center'>
//       <Navbar isScroll={scroll} />
//       <div>
//         <div className='text-2xl font-bold mb-3'>Master Algorithms. Hack Your Interviews.</div>
//         <div className='text-sm font-medium text-neutral-300'>AlgoHack helps developers and interview aspirants crack coding challenges with ease.</div>
//       </div>
      
      
//     </div>
//   )
// }

// export default LandingPage





"use client"

import { useState } from "react"
import {
  CheckCircle,
  Code,
  Database,
  FileCode,
  Github,
  Layers,
  LineChart,
  Terminal,
  Trophy,
  Users,
  Menu,
  X,
} from "lucide-react"
import { useMotionValueEvent, useScroll } from 'motion/react';
import Footer from '../components/Footer';

export default function LandingPage() {
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
  const [activeTab, setActiveTab] = useState("arrays")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const problemsByCategory = {
    arrays: [
      { title: "Two Sum", difficulty: "Easy", companies: ["Amazon", "Google", "Facebook"] },
      { title: "Best Time to Buy and Sell Stock", difficulty: "Easy", companies: ["Microsoft", "Apple"] },
      { title: "Contains Duplicate", difficulty: "Easy", companies: ["Amazon", "Facebook"] },
      { title: "Maximum Subarray", difficulty: "Medium", companies: ["Google", "Microsoft"] },
      { title: "Product of Array Except Self", difficulty: "Medium", companies: ["Facebook", "Amazon"] },
    ],
    "linked-lists": [
      { title: "Reverse Linked List", difficulty: "Easy", companies: ["Amazon", "Microsoft"] },
      { title: "Merge Two Sorted Lists", difficulty: "Easy", companies: ["Google", "Apple"] },
      { title: "Linked List Cycle", difficulty: "Easy", companies: ["Amazon", "Facebook"] },
      { title: "Remove Nth Node From End", difficulty: "Medium", companies: ["Google", "Microsoft"] },
      { title: "LRU Cache", difficulty: "Hard", companies: ["Facebook", "Amazon", "Google"] },
    ],
    trees: [
      { title: "Maximum Depth of Binary Tree", difficulty: "Easy", companies: ["Amazon", "Microsoft"] },
      { title: "Validate Binary Search Tree", difficulty: "Medium", companies: ["Google", "Facebook"] },
      { title: "Binary Tree Level Order Traversal", difficulty: "Medium", companies: ["Amazon", "Microsoft"] },
      {
        title: "Construct Binary Tree from Preorder and Inorder",
        difficulty: "Medium",
        companies: ["Google", "Apple"],
      },
      {
        title: "Serialize and Deserialize Binary Tree",
        difficulty: "Hard",
        companies: ["Facebook", "Amazon", "Google"],
      },
    ],
    graphs: [
      { title: "Number of Islands", difficulty: "Medium", companies: ["Amazon", "Google", "Facebook"] },
      { title: "Course Schedule", difficulty: "Medium", companies: ["Google", "Microsoft"] },
      { title: "Clone Graph", difficulty: "Medium", companies: ["Facebook", "Amazon"] },
      { title: "Pacific Atlantic Water Flow", difficulty: "Medium", companies: ["Google", "Amazon"] },
      { title: "Word Ladder", difficulty: "Hard", companies: ["Facebook", "Amazon", "Google"] },
    ],
  }

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Software Engineer at Google",
      quote:
        "After 3 months of practicing on this platform, I was able to ace my Google interview. The problems were very similar to what I had practiced!",
    },
    {
      name: "Sarah Chen",
      role: "Senior Developer at Amazon",
      quote:
        "The structured learning paths helped me fill gaps in my knowledge. I went from struggling with basic algorithms to solving complex problems with ease.",
    },
    {
      name: "Michael Rodriguez",
      role: "Frontend Engineer at Meta",
      quote:
        "The mock interviews were incredibly realistic. They prepared me for the pressure of real technical interviews and helped me land my dream job.",
    },
    {
      name: "Emily Wong",
      role: "Software Developer at Microsoft",
      quote:
        "I credit this platform for helping me understand complex data structures. The visualizations made concepts click that I had struggled with for years.",
    },
    {
      name: "David Kim",
      role: "Backend Engineer at Netflix",
      quote:
        "The company-specific problem sets were a game-changer. I practiced exactly what Netflix was likely to ask, and it paid off in my interview.",
    },
    {
      name: "Priya Patel",
      role: "Full Stack Developer at Airbnb",
      quote:
        "From arrays to dynamic programming, this platform covered everything I needed. I went from zero offers to multiple job offers in just 2 months.",
    },
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 border-green-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Hard":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center text-white">
      {/* Header */}
      <Navbar isScroll={scroll}></Navbar>
     

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-2 md:py-24 lg:py-16 xl:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex rounded-md bg-orange-500 px-3 py-1 text-sm font-medium text-white">
                    New Problems Added Weekly
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    Master Data Structures & Ace Your Tech Interviews
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Practice with 1000+ problems, learn algorithms, and prepare for technical interviews with real-world
                    challenges from top tech companies.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-500 transition-colors">
                    Start Practicing Now
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                    Explore Problems
                  </button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>1000+ Problems</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Interactive Coding Environment</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
                    <span>Mock Interviews</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:mx-0">
                <div className="relative h-[450px] w-full overflow-hidden rounded-xl border bg-white p-2 shadow-lg">
                  <div className="flex h-full flex-col rounded-lg bg-gray-50 p-4">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <div className="h-3 w-3 rounded-full bg-green-500" />
                      </div>
                      <div className="text-xs font-medium">Problem: Two Sum</div>
                    </div>
                    <div className="flex-1 overflow-auto p-4 text-sm">
                      <pre className="text-xs text-gray-600">
                        <code>{`/**
 * Problem: Two Sum
 * 
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * 
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

function twoSum(nums, target) {
  // Your solution here
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}`}</code>
                      </pre>
                    </div>
                    <div className="mt-auto border-t pt-2">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-600">JavaScript</div>
                        <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm hover:bg-orange-500 transition-colors">
                          Run Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-2 md:py-2 lg:py-2 ">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-500 px-3 py-1 text-sm font-medium text-white">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Everything You Need to Succeed</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  Our platform provides all the tools and resources you need to master data structures and algorithms.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-[#242424] rounded-lg border border-neutral-600 p-6 shadow-sm">
                <FileCode className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Coding Problems</h3>
                <p className="text-neutral-400">
                  Practice with a vast library of problems ranging from easy to hard, covering all major data structures
                  and algorithms.
                </p>
              </div>
              <div className="bg-[#242424] rounded-lg border border-neutral-600 p-6 shadow-sm">
                <Terminal className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Coding Environment</h3>
                <p className="text-neutral-400">
                  Code directly in your browser with support for multiple programming languages.
                </p>
              </div>
              <div className="bg-[#242424] rounded-lg border border-neutral-600 p-6 shadow-sm">
                <Database className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Playlist</h3>
                <p className="text-neutral-400">
                  create own playlist and keep tracking yourself. prepare your own sheets for future 
                </p>
              </div>
              
              
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>

      
      
    </div>
  )
}


