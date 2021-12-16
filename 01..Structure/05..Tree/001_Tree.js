// 트리의 기본형태
// value
// child - left
// child - right

// images/tree.png
const tree = {
    root: {
        value: 5,
        left: {
            value: 3,
            left: {
                value: 1,
                left : null,
                right: null
            },
            right : {
                value: 4,
                left : null,
                right: null
            }
        },
        right: {
            value: 8,
            left: {
                value: 6,
                left : null,
                right: null
            },
            right : {
                value: 9,
                left : null,
                right: null
            }
        }
    }
}
// tree.root.value
// tree.root.left.value

// object

class Node {
    constructor(data) {
        this.data = data;
        // this.child = []; // 2진트리가 아닌 트리
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(data) {
        let init = new Node(data);
        this.root = init;
        this.total = 0;
    }

    length () {
        return this.total;
    }

    insert(data) {
        let newNode = new Node(data);
        let loopNode = this.root;

        while (loopNode) {
            if (data === loopNode.data) {
                // 중복된 값은 탈락!
                return;
            }

            if (data < loopNode.data) {
                 // 들어온 데이터가 작으면 왼쪽에
                // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
                if (!loopNode.left) {
                    loopNode.left = newNode;
                    return;
                }
                loopNode = loopNode.left;
            } 

            if (data > loopNode.data) {
                // 들어온 데이터가 크면 오른쪽에
                // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
                if (!loopNode.right){
                    loopNode.right = newNode;
                    return;
                }
                loopNode = loopNode.right;
            }
        }
        // 마지막 값(null)은 새로우 노드가 됨
        // this.tail.next = newNode;
        // 마지막 노드는 새로운 노드가 됨
        // this.tail = newNode;
        this.total += 1;
    }

    DFS() {
        // 깊이 우선 탐색, DFS(Depth First Search)
        // Stack 이용 !
        let result = [];
        let stack = [this.root];

        while(stack.length !== 0) {
            let current = stack.pop();
            if (current.right) {
                stack.push(current.right);
            }

            if (current.left) {
                stack.push(current.left);
            }
            return result.push(current.data);
        }
        return result;
    }

    BFS() {
        // 너비우선탐색 (Breadth Frist Search) 
        // Queue 이용
        let result = [];
        let queue = [this.root];

        while(queue.length !== 0) {
            let current = queue.shift();
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
            return result.push(current.data);
        }
        return result;
    }
}