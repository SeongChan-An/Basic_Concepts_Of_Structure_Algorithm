// 1. 스택과 큐
class Stack {
    constructor() {
        this.arr = [];
    }
    push(data) {
        this.arr.push(data);
    }

    pop(index = this.arr.length-1) {
        if (index === this.arr.length - 1) {
            return this.arr.pop();
        } else {
            return this.arr.splice(index, 1);
            // let result = this.arr[index];
            // this.arr = [...this.arr.slice(0, index), ...this.arr.slice(index + 1)];
            // return result;
        }
    }

    empty() {
        if (this.arr.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    top() {
        if (this.empty() == false) {
            return this.arr[this.arr.length - 1];
        } else {
            // undefined 반환함.
            return "stack is empty"
        }
    }

    bottom() {
        if (this.empty() == false) {
            return this.arr[0];
        } else {
            return "stack is empty"
        }        
    }
}

let stk = new Stack();
stk.push(10);
stk.push(20);
stk.push(30);
stk.push(40);
stk.push(50);
stk.push(60);
stk.pop();
stk.pop(0);
stk.pop(2);
stk.pop(1);
console.log(stk);
console.log(stk.bottom());
console.log(stk.top());
