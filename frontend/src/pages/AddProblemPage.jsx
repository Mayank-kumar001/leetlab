import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import DropDownMenu from "../components/DropDownMenu";
import { HandHelping, Loader2, Plus, Trash2 } from "lucide-react";
import { Editor } from "@monaco-editor/react";
import authStore from "../store/auth.store";
import { data } from "react-router-dom";
import { axiosInstance } from "../lib/axios";

function AddProblemPage() {
  const onSubmit = async (data) => {
    console.log(data);
    data.codesnippets = {
      "JAVASCRIPT": data["codesnippets-JAVASCRIPT"], 
      "JAVA": data["codesnippets-JAVA"], 
      "PYTHON": data["codesnippets-PYTHON"], 
    }
    data.referenceSolution = {
      "JAVASCRIPT": data["referenceSolution-JAVASCRIPT"], 
      "JAVA": data["referenceSolution-JAVA"], 
      "PYTHON": data["referenceSolution-PYTHON"], 
    }

    const tags = data.tags.map((elem) => elem.tag);
    data.tags = tags;

    const res = await axiosInstance.post("/problem/create-problem", data); 
    console.log(res.data);
  }




  const {isLoggingIn} = authStore();
  const { register, control, handleSubmit, formState:{errors} } = useForm({
    defaultValues:{
  "title": "Valid Palindrome",
  "description": "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.",
  "difficulty": "EASY",
  "tags": ["String", "Two Pointers"],
  "constraints": "1 <= s.length <= 2 * 10^5\ns consists only of printable ASCII characters.",
  "hints": "Consider using two pointers, one from the start and one from the end, moving towards the center.",
  "editorial": "We can use two pointers approach to check if the string is a palindrome. One pointer starts from the beginning and the other from the end, moving towards each other.",
  "testcases": [
    {
      "input": "A man, a plan, a canal: Panama",
      "output": "true"
    },
    {
      "input": "race a car",
      "output": "false"
    },
    {
      "input": " ",
      "output": "true"
    }
  ],
  "examples": {
    "JAVASCRIPT": {
      "input": "s = \"A man, a plan, a canal: Panama\"",
      "output": "true",
      "explanation": "\"amanaplanacanalpanama\" is a palindrome."
    },
    "PYTHON": {
      "input": "s = \"A man, a plan, a canal: Panama\"",
      "output": "true",
      "explanation": "\"amanaplanacanalpanama\" is a palindrome."
    },
    "JAVA": {
      "input": "s = \"A man, a plan, a canal: Panama\"",
      "output": "true",
      "explanation": "\"amanaplanacanalpanama\" is a palindrome."
    }
  },
  "codeSnippets": {
    "JAVASCRIPT": "/**\n * @param {string} s\n * @return {boolean}\n */\nfunction isPalindrome(s) {\n  // Write your code here\n}\n\n// Add readline for dynamic input handling\nconst readline = require('readline');\nconst rl = readline.createInterface({\n  input: process.stdin,\n  output: process.stdout,\n  terminal: false\n});\n\n// Process input line\nrl.on('line', (line) => {\n  // Call solution with the input string\n  const result = isPalindrome(line);\n\n  // Output the result\n  console.log(result ? \"true\" : \"false\");\n  rl.close();\n});",
    "PYTHON": "class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        # Write your code here\n        pass\n\n# Input parsing\nif __name__ == \"__main__\":\n    import sys\n    # Read the input string\n    s = sys.stdin.readline().strip()\n\n    # Call solution\n    sol = Solution()\n    result = sol.isPalindrome(s)\n\n    # Output result\n    print(str(result).lower())  # Convert True/False to lowercase true/false",
    "JAVA": "import java.util.Scanner;\n\npublic class Main {\n  public static String preprocess(String s) {\n    return s.replaceAll(\"[^a-zA-Z0-9]\", \"\").toLowerCase();\n  }\n\n  public static boolean isPalindrome(String s) {\n    // Write your code here\n  }\n\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    String input = sc.nextLine();\n\n    boolean result = isPalindrome(input);\n    System.out.println(result ? \"true\" : \"false\");\n  }\n}"
  },
  "referenceSolutions": {
    "JAVASCRIPT": "/**\n * @param {string} s\n * @return {boolean}\n */\nfunction isPalindrome(s) {\n  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n\n  let left = 0;\n  let right = s.length - 1;\n\n  while (left < right) {\n    if (s[left] !== s[right]) {\n      return false;\n    }\n    left++;\n    right--;\n  }\n\n  return true;\n}\n\nconst readline = require('readline');\nconst rl = readline.createInterface({\n  input: process.stdin,\n  output: process.stdout,\n  terminal: false\n});\n\nrl.on('line', (line) => {\n  const result = isPalindrome(line);\n  console.log(result ? \"true\" : \"false\");\n  rl.close();\n});",
    "PYTHON": "class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        filtered_chars = [c.lower() for c in s if c.isalnum()]\n        return filtered_chars == filtered_chars[::-1]\n\nif __name__ == \"__main__\":\n    import sys\n    s = sys.stdin.readline().strip()\n    sol = Solution()\n    result = sol.isPalindrome(s)\n    print(str(result).lower())",
    "JAVA": "import java.util.Scanner;\n\npublic class Main {\n  public static String preprocess(String s) {\n    return s.replaceAll(\"[^a-zA-Z0-9]\", \"\").toLowerCase();\n  }\n\n  public static boolean isPalindrome(String s) {\n    s = preprocess(s);\n    int left = 0, right = s.length() - 1;\n\n    while (left < right) {\n      if (s.charAt(left) != s.charAt(right)) return false;\n      left++;\n      right--;\n    }\n    return true;\n  }\n\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    String input = sc.nextLine();\n\n    boolean result = isPalindrome(input);\n    System.out.println(result ? \"true\" : \"false\");\n  }\n}"
  }
}

  });
  const {
    fields: tagFields,
    append: appendTag,
    remove: removeTag,
  } = useFieldArray({ control, name: "tags" });

  const {
    fields: testcaseFields,
    append: appendTestcase,
    remove: removeTestcase,
  } = useFieldArray({ control, name: "testCases" });

  const {
    fields: exampleFields,
    append: appendExample,
    remove: removeExample,
  } = useFieldArray({ control, name: "example" });

  return (
    <div className=" w-full">
      <div className="flex justify-center items-baseline gap-96">
        <span className="text-4xl font-bold">ADD PROBLEM</span>
        <button
          type="submit"
          className=" w-60 flex justify-center items-center gap-4 cursor-pointer bg-neutral-900 text-white px-10 py-2 mb-4 rounded-lg hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
          Load sample data
        </button>
      </div>

      {/* form */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block">Title</label>
          <input
            type="text"
            className="text-sm font-medium px-2 py-1 w-[90%] mt-1 block border-2 border-gray-200 rounded-lg  focus:outline-none focus:border-blue-200 focus:shadow-sm focus:bg-blue-100"
            name="title"
            placeholder="Dr. Doom"
            {...register("title")}
            required
          />
        </div>

        <div>
          <label className="block">Description</label>
          <input
            type="text"
            className="text-sm font-medium px-2 py-1 w-[90%] mt-1 block border-2 border-gray-200 rounded-lg  focus:outline-none focus:border-blue-200 focus:shadow-sm focus:bg-blue-100"
            name="description"
            placeholder="RDJ is Dr. Doom"
            {...register("description")}
            required
          />
        </div>
        <div>
          <label className="block">constraints</label>
          <input
            type="text"
            className="text-sm font-medium px-2 py-1 w-[90%] mt-1 block border-2 border-gray-200 rounded-lg  focus:outline-none focus:border-blue-200 focus:shadow-sm focus:bg-blue-100"
            placeholder="Dr. Doom and wanda"
            {...register("constraints")}
            required
          />
        </div>
        <Controller name="difficulty" control={control} render={({field}) => (
          <div>
          <label className="block">Difficulty</label>
          <select onChange={field.onChange} value={field.value} className="bg-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:border-blue-200 focus:shadow-sm focus:bg-blue-100 cursor-pointer">
            <option value="EASY">Noob😊</option>
            <option value="MEDIUM">mid🥲</option>
            <option value="HARD">Pro😭</option>
          </select>
        </div>
        )} />
        

        {/* tags  */}
        <div>
          <div className="flex justify-between items-baseline h-fit mb-2">
            <label className="block">Tags</label>

            <button
              type="submit"
              className=" w-16 h-8 flex justify-center items-center gap-4 cursor-pointer bg-neutral-900 text-white px-10 py-2 rounded-lg hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              onClick={(e) => {
                e.preventDefault();
                const tag = prompt("Enter the tag");
                appendTag({ tag });
              }}
            >
              Add
            </button>
          </div>
          <div className="bg-neutral-200 rounded-lg w-full min-h-16 py-4 px-2 flex flex-wrap content-center">
            {/* <span>hello world</span> */}
            {tagFields.map((elem, index) => (
              <span
                className="flex w-fit items-center gap-2 rounded-lg p-1 mr-2 bg-blue-100 text-blue-600 border-2 border-blue-300"
                key={elem.id}
              >
                {elem.tag}
                <Trash2
                  size={20}
                  color="red"
                  strokeWidth={2}
                  className="cursor-pointer"
                  onClick={() => {
                    removeTag(index);
                  }}
                />
              </span>
            ))}
          </div>
        </div>
        {/* testCases */}
        <div>
          <div className="flex justify-between items-baseline h-fit mb-2">
            <label className="block">Test Cases</label>

            <button
              type="submit"
              className=" w-16 h-8 flex justify-center items-center gap-4 cursor-pointer bg-neutral-900 text-white px-10 py-2 rounded-lg hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              onClick={(e) => {
                e.preventDefault();
                const input = prompt("Enter the input");
                const output = prompt("Enter the output");
                appendTestcase({ input, output });
              }}
            >
              Add
            </button>
          </div>
          <div className="bg-neutral-200 rounded-lg w-full min-h-16 py-4 px-2 flex flex-wrap content-center">
            {/* <span>hello world</span> */}
            {testcaseFields.map((elem, index) => (
              <span
                className="flex flex-col w-fit items-center gap-1 rounded-lg p-1 mr-2 bg-blue-100 text-blue-600 border-2 border-blue-300"
                key={elem.id}
              >
                <div className=" flex justify-end w-full">
                  <Trash2
                    size={20}
                    color="red"
                    strokeWidth={2}
                    className="cursor-pointer"
                    onClick={() => {
                      removeTestcase(index);
                    }}
                  />
                </div>
                <div>input: {elem.input}</div>
                <div>output: {elem.output}</div>
              </span>
            ))}
          </div>
        </div>

        {/* examples  */}
        <div>
          <div className="flex justify-between items-baseline h-fit mb-2">
            <label className="block">Examples</label>

            <button
              type="submit"
              className=" w-16 h-8 flex justify-center items-center gap-4 cursor-pointer bg-neutral-900 text-white px-10 py-2 rounded-lg hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              onClick={(e) => {
                e.preventDefault();
                const input = prompt("Enter the input");
                const output = prompt("Enter the output");
                appendExample({ input, output });
              }}
            >
              Add
            </button>
          </div>
          <div className="bg-neutral-200 rounded-lg w-full min-h-16 py-4 px-2 flex flex-wrap content-center">
            {/* <span>hello world</span> */}
            {exampleFields.map((elem, index) => (
              <span
                className="flex flex-col w-fit items-center gap-1 rounded-lg p-1 mr-2 bg-blue-100 text-blue-600 border-2 border-blue-300"
                key={elem.id}
              >
                <div className=" flex justify-end w-full">
                  <Trash2
                    size={20}
                    color="red"
                    strokeWidth={2}
                    className="cursor-pointer"
                    onClick={() => {
                      removeExample(index);
                    }}
                  />
                </div>

                <div>input: {elem.input}</div>
                <div>output: {elem.output}</div>
              </span>
            ))}
          </div>
        </div>

        {/* codesnippets */}
        {["JAVASCRIPT", "PYTHON", "JAVA"].map((language) => (
          <div key={language}>
            <label className="block">Code Snippet</label>
            <span>{language}</span>
            <Controller
              name={`codesnippets-${language}`}
              control={control}
              render={({ field }) => (
                <Editor
                  width={"500px"}
                  className="h-96"
                  language={language.toLowerCase()}
                  theme="vs-dark"
                  value={field.value}
                  onChange={field.onChange}
                ></Editor>
              )}
            ></Controller>
          </div>
        ))}

        {/* Refrence Solution */}
        {["JAVASCRIPT", "PYTHON", "JAVA"].map((language) => (
          <div key={language}>
            <label className="block">Reference Solution</label>
            <span>{language}</span>
            <Controller
              name={`referenceSolution-${language}`}
              control={control}
              render={({ field }) => (
                <Editor
                  width={"500px"}
                  className="h-96"
                  theme={"vs-dark"}
                  language={language.toLowerCase()}
                  onChange={field.onChange}
                  value={field.value}
                ></Editor>
              )}
            />
          </div>
        ))}
        <button type='submit' className=' mt-4 w-full flex justify-center items-center gap-4 cursor-pointer bg-neutral-900 text-white px-10 py-2 mb-4 rounded-lg hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]' disabled={isLoggingIn}>Login {isLoggingIn ? (<Loader2 className='animate-spin' />) : ""}</button>
        <div className="h-96"></div>

      </form>
    </div>
  );
}

export default AddProblemPage;
