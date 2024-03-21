import { LinkedList } from './linkedlist.js'

class Hashmap {
    constructor(capacity) {
        this.loadFactor = 0.75;
        this._buckets = new Array(capacity).fill(null);
        this._capacity = capacity;
        this._size = 0;
    }

    hash(key) {
        let hashCode = 0;
        
        const primeNumber = 31;
        
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    } 

    set(key, value) {
        let index = this.hash(key) % this._capacity;
        if(this._buckets[index] === null) {
            this._buckets[index] = new LinkedList();
        }

        this._buckets[index].append(key, value);
        this._size++;
    }

    get(key) {
        let index = this.hash(key) % this._capacity;
        let curr = this._buckets[index].root;
        
        while(curr !== null) {
            if(curr.key === key) {
                return curr.val;
            }
            
            curr = curr.next
        }

        return null;
    }

    has(key) {
        let index = this.hash(key) % this._capacity;

        if(this._buckets[index] === null || this._size === 0) {
            return false;
        }

        if(this._buckets[index].search(key) !== null) {
            return true;
        }

        return false;
    }

    remove(key) {
        let index = this.hash(key) % this._capacity;

        if(this._buckets[index] === null || this._size === 0) {
            return false;
        }

        if(this._buckets[index].search(key) !== null) {
            return true;
        }

        return false;
    }

    length() {
        return this._size;
    }

    values() {
        let arr = []

        for(let i = 0; i < this._capacity; i++) { //Loop through list
            if(this._buckets[i] !== null) { //Linked list exists
                let curr = this._buckets[i].root

                while(curr != null) {
                    arr.push(curr.val);
                    curr = curr.next;
                }
            }
        }

        return arr;
    }

    entries() {
        let arr = []

        for(let i = 0; i < this._capacity; i++) { //Loop through list
            if(this._buckets[i] !== null) { //Linked list exists
                let curr = this._buckets[i].root

                while(curr != null) {
                    arr.push([curr.key, curr.val])
                    curr = curr.next;
                }
            }
        }

        return arr;
    }
}

// let test = new Hashmap(12);
// console.table(test.values())
// test.set(5, "test");
// console.log(test.get(5));
// console.log(test.has(5));
// console.log(test.has(4));
// console.log(test.has("dwioa"));
// test.set("dwioa", "dhwia");
// console.log(test.has("dwioa"));
// console.log(test.get("dwioa"))
// console.log(test.length())
// console.table(test.values());
// test.set("jdiowajdoia", "dwioadioahdioa");
// console.table(test.values());
// console.table(test.entries());