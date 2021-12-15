// 2. 연결리스트(linked list)
const List = {
    head: {
        value: 90,
        next: {
            value: 2,
            next: {
                value: 77,
                next: {
                    value: 35,
                    next: null
                }
            }
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        // this.prev = prev;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node('init');
        this.head = init;
        this.tail = init;

        this.curNode = undefined;
        this.total = 0;
    }

    get fullData() {
        let curNodeLoop = this.head;
        curNodeLoop = curNodeLoop.next;

        let result = "";
        for (let i = 0; i < this.total; i++) {
            result += `${curNodeLoop.data},`
            curNodeLoop = curNodeLoop.next;
        }
        return JSON.parse(`[${result.slice(0, -1)}]`)
    }

    length(){
        return this.total;
    }

    append(data){01 
        let newNode = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = newNode;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = newNode;
        this.total += 1;
    }

    tostring() {
        let curNodeLoop = this.head;
        curNodeLoop = curNodeLoop.next;

        let result = "";
        for (let i = 0; i < this.total; i++) {
            result += `${curNodeLoop.data},`
            curNodeLoop = curNodeLoop.next;
        }
        return result.slice(0, -1);
    }

    // toString() {
    //     const output = [];
    //     let curNode = this.head;
    //     while (curNode) {
    //       output.push(curNode.data);
    //       curNode = curNode.next;
    //     }
    //     return `[${output.join(' -> ')}]`;
    //   }

    insert(index, value) {
        let curNodeLoop = this.head;
        curNodeLoop = curNodeLoop.next;
     
        for (let i = 0; i < index-1; i++) {
            curNodeLoop = curNodeLoop.next;
        }       

        let newNode = new Node(data);
        newNode.next = curNodeLoop.next;
        curNodeLoop.next = newNode;

        this.total += 1;
    } 
}

// console
let temList = new LinkedList();
temList.append(1);
temList.append(2);
temList.append(3);
temList.append(10);
temList.append(20);
temList.append(30);
temList.length()
console.log(temList);
console.log(temList.tostring());
console.log(temList.fullData);