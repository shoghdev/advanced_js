class HashTable {
    keys = []
    values = []
    constructor(size) {
        this.size = size
    }
    retrive(key) {
        let hash = this.#hash(key)

        return this.values[hash]
    }
    put(key,value) {
        let hash = this.#hash(key)
        this.keys[hash] = key
        this.values[hash] = value
    }

    #hash(key) {
        let s = 0
        for(let c of key) {
            s += c.charCodeAt(0)
        }

        return s % this.size
    }
}

let ht = new HashTable(11)

ht.put("name", "Ashxen")
ht.put("age", 45)
/* console.log(ht)
console.log(ht.retrive("age")) */

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

/* class LinkedList{
    head = null
    tail = null

    insert(value) {
        let node = new Node(value)
        if(this.tail == null) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail =  node
        }
    }
}

let list =  new LinkedList()

list.insert(42)
list.insert(17)
list.insert(64)
list.insert(180)
list.insert(280) */

//console.log(list)


class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    root = null

    insert(value) {
        let node = new Node(value)

        if(!this.root) {
            this.root = node
            return
        }

        let current = this.root

        while (true) {
            if(value < current.value) {
                if(current.left == null) {
                    current.left =  node
                    return
                }

                current = current.left
            } else {
                if(current.right == null) {
                    current.right = node
                    return
                }

                current = current.right
            }
        }

    }

}

let c1 = new BinarySearchTree()
c1.insert(12)
c1.insert(3)
c1.insert(5)
c1.insert(16)
c1.insert(7)
c1.insert(26)

console.log(c1)


