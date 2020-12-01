class ArrayDeque {
  constructor(length) {
    this.items = [];
    this.length = length;
  }
  push(element) {
    // push element into the items
    if(this.items.length + 1> this.length){
      throw new Error(`Can't add more`);
    }
    this.items.push(element);
  }
  offer(element){
    if(this.items.length + 1> this.length){
      return false;
    }
    this.items.push(element);
    return true;
  }
  pop() {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length === 0)
      return "Underflow";
    return this.items.pop();
  }
  peek() {
    // return the top most element from the stack
    // but doesn't delete it.
    return this.items[0];
  }
  peekLast() {
    return this.items[this.items.length - 1];
  }
  poll() {
    const value = this.peek();
    this.items.shift();
    return value;
  }
  pollLast() {
    const value = this.peekLast();
    this.items.pop();
    return value;
  }
  isEmpty() {
    // return true if stack is empty
    return this.items.length === 0;
  }
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++)
      str += this.items[i] + " ";
    return str;
  }
  size(){
    return this.items.length;
  }
}

module.exports = {
  ArrayDeque
};
