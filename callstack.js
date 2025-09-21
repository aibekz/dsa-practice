// Call Stack
// The call stack is a mechanism for an interpreter (like JavaScript) to keep track of function calls.
// When a function is called, a new frame is created and pushed onto the stack.
// When the function returns, its frame is popped off the stack.

// Example: Call Stack in Action
function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("Hello from the third function!");
}

first(); // This will trigger the call stack