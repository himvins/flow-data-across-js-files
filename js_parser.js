function function1() {console.log('function1')}
function function3() {console.log('function3')}
function function2() {console.log('function2');function1();function3();}



function formatCallHierarchy(fn, hierarchy) {
  let result = fn;
  const children = hierarchy[fn];
  if (children) {
    children.forEach(childFn => {
      result += `->${formatCallHierarchy(childFn, hierarchy)}`;
    });
  }
  return result;
}



const callHierarchy = {};
const visitedFunctions = new Set();

function findCallHierarchy(fn, parentFn) {
  if(visitedFunctions.has(fn)) return;
  visitedFunctions.add(fn);
  const sourceCode = fn.toString();
  const functionRegex = /(?:[^\.]|^)\b(\w+)\(/g;
  let match;
  while (match = functionRegex.exec(sourceCode)) {
    const functionName = match[1];
    if (!callHierarchy[parentFn]) {
      callHierarchy[parentFn] = []
    }
    callHierarchy[parentFn].push(functionName);
    if (typeof window[functionName] === 'function') {
      findCallHierarchy(window[functionName], functionName);
    }
  }
}

findCallHierarchy(function2, 'function2');
console.log(formatCallHierarchy('function2', callHierarchy));
