import crypto from "crypto"

// generate a object which has language name as key and a reference solution to some problme as value of that key


// const referenceSolution = {
//     c: "int main() { return 0; }",
//     cpp: "int main() { return 0; }",
//     java: "class Main { public static void main(String[] args) { } }",

// }

// [
//     [ 'c', 'int main() { return 0; }' ],
//     [ 'cpp', 'int main() { return 0; }' ],
//     ['java','class Main { public static void main(String[] args) { } }']
//   ]
// console.log(referenceSolution);
// console.log(Object.entries(referenceSolution));

// for(const [e,r] of Object.entries(referenceSolution)){
//     console.log(e,r);
//     console.log("-------");
// }



// const testcases = {
//     1: {input: "helloworld",
//     output: "dlrowolleh",},
//     2: {input: "helloworld",
//     output: "dlrowolleh",},
//     2: {input: "helloworld",
//     output: "dlrowolleh",}
// }

// const l = testcases.map((e)=>e);
// console.log(l);


const verificationToken = crypto.randomBytes(3).toString("hex")
console.log(verificationToken);