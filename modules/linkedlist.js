export class LinkedList {
    constructor(root=null, size=0) {
        this._root = root;
        this._size = size;
    }

    set root(value) { this._root = value; }
    get root() { return this._root; }

    set size(value) { this._size = value; }
    get size() { return this._size; }

    append(key, value) {
        if(this.size === 0) {
            this.root = new Node(key, value);
        } else {
            let curr = this.root;
            while(curr.next !== null) {
                curr = curr.next;
            }

            let temp = new Node(key, value);
            curr.next = temp;
        }

        this.size++;
    }

    pop() {
        if(this.size === 0) {
            return null;
        }
        
        let curr = this.root;
        let prev = null;

        while(curr.next !== null) {
            prev = curr;
            curr = curr.next;
        }

        if(prev === null) {
            this.root === null;
        } else {
            prev.next = null;
        }

        const poppedVal = curr.val
        this.size--;

        return poppedVal;
    }

    search(key) {
        if(this.size === 0) {
            return null;
        }

        let curr = this.root;
        for(let i = 0; i < this.size; i++) {
            if(curr.key === key) {
                return (i + 1);
            }

            curr = curr.next
        }

        return null;
    }
}

export class Node {
    constructor(key=null, val=null, next=null) {
        this._key = key;
        this._val = val;
        this._next = next
    }

    set key(value) { this._key = value; }
    get key() { return this._key; }

    set val(value) { this._val = value; }
    get val() { return this._val; }

    set next(value) { this._next = value; }
    get next() { return this._next; }
}


// let test = new LinkedList();
// test.append(1, "dwa")
// test.append(5, "dadw")
// console.log(test.pop())
// console.log(test.pop())
// console.log(test.size);