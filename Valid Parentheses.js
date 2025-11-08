class Stack {
    constructor() { this.items = []; }

    // Push operation
    push(element) { this.items.push(element); }

    // Pop operation
    pop()
    {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Peek operation
    peek()
    {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // isEmpty operation
    isEmpty() { return this.items.length === 0; }

    // Size operation
    size() { return this.items.length; }

    // Print the stack
    print() { console.log(this.items); }
}

console.log(stack)

const bracketChecker = (str)=>{
    const stack = new Stack();

const bracketMap = {
")":"(",
"}":"{",
"]":"["
}


    for(let i = 0; i < str.length; i++){
        console.log("str",str[i])
        const char = str[i]
        if(char === "(" || char === "{" || char === "["){
stack.push(char)
        }else if(char === ")" || char === "}" || char === "]"){
            if(stack.isEmpty() || stack.pop()  !== bracketMap[char]){
                return false
            }
        }

    }
    return stack.isEmpty();
}
bracketChecker("(){}[]")