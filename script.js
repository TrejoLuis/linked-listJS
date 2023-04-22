class LinkedList {
  #size = 0
  #head = null
  #tail = null

  prepend(value){
    let node = new Node(value)
    if(!this.#head){
      this.#head = node
      this.#tail = node
    } else {
      let tmpHead = this.#head
      this.#head = node
      node.next = tmpHead
    }
    this.#size++
  }

  append(value) {
    let node = new Node(value)
    if(!this.#head){
      this.#head = node
      this.#tail = node
    } else {
      let tmpTail = this.#tail
      this.#tail = node
      tmpTail.next = node 
      node.next = null
    }
    this.#size++
  }

  get size() {return this.#size} 
  get head() {return this.#head}
  get tail() {return this.#tail}

  at(index) {
    if(index >= this.#size || index < 0) return false
    if(index == 0) return this.#head
    let currentIndx = 1
    let currentNode = this.#head.next
    while(currentIndx < this.#size){
      if(currentIndx == index) return currentNode
      currentNode = currentNode.next
      currentIndx++
    }
  }

  pop(){
    if(!this.#head) return false
    if(this.#size == 1){
      let tmpNode = this.#head
      this.#head = null
      this.#tail = null
      this.#size = 0
      return tmpNode
    }
    let newTail = this.at(this.#size-2)
    let tmpNode = this.#tail
    newTail.next = null
    this.#tail = newTail
    this.#size--
    return tmpNode
  }

  contains(value){
    if(!this.#head) return false
    let currentIndx = 0
    let currentNode = this.#head
    while(currentIndx < this.#size){
      if(currentNode.value === value) return true
      currentNode = currentNode.next
      currentIndx++
    }
    return false
  }

  find(value){
    if(!this.#head) return null 
    let currentIndx = 0
    let currentNode = this.#head
    while(currentIndx < this.#size){
      if(currentNode.value === value) return currentIndx 
      currentNode = currentNode.next
      currentIndx++
    }
    return null 
  }

  toString(){
    if(!this.#head) return null 
    let currentNode = this.#head
    let currentIndx = 0
    let strOut = ''
    while(currentIndx < this.#size){
      strOut += `( ${currentNode.value} ) -> `
      currentNode = currentNode.next
      currentIndx++
    }
    strOut += 'null'
    return strOut
  }

  insertAt(value, index){
    if(index >= this.#size || index < 0) return false
    let oldNode = this.at(index)
    let newNode = new Node(value)
    //there was only one node
    if(this.#size == 1){
      this.#head = newNode
      this.#tail = oldNode
      newNode.next = oldNode
    } else {
      let preOldNode = this.at(index-1)
      preOldNode.next = newNode
      newNode.next = oldNode
    }
    this.#size++
  }

  removeAt(index){
    if(!this.#head || index >= this.#size || index < 0) return false
    let delNode = this.at(index)
    if(this.#size == 1){
      this.#head = null
      this.#tail = null
    } else if (index == 0){
      this.#head = this.#head.next
    } else if (index == this.#size-1){
      let prevNode = this.at(index-1)
      prevNode.next = null
      this.#tail = prevNode
    } else {
      let prevNode = this.at(index-1)
      prevNode.next = delNode.next
    }
    this.#size--
  }
}

class Node {
  constructor(value = null){
    this.value = value
    this.next = null
  }
}

