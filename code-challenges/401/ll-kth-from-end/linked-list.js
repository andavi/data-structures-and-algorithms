'use strict';

function LLError(message) {
  this.message = message;
  this.name = 'LinkedListException';
}

const Node = require('./node');

// Variables
  // HEAD
// Behavior
  // Insert Values -> :)
  // Remove Values
  // Iterate / Loop -> :)
class LinkedList{
  constructor(){
    this.head = null;
  }

  insertAtHead(value){
    const newNode = new Node(value);
    // 1 - Connecting newNode to our list
    newNode.next = this.head;

    // 2 - re-assigning our HEAD
    this.head = newNode;
  }

  insertAtTail(value){
    const newNode = new Node(value);

    if(!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;

    while(current.next) { // Vinicio - WHILE I CAN MOVE CURRENT TO THE RIGHT
      current = current.next;
    }
    // Vinicio - once this while is over. I know I'm at the end
    // current.next is equal to null right now
    // this is making the new connection
    current.next = newNode;
  }

  // Vinicio - I'm teaching find, mainly to teach you how to loop
  find(value) {
    if(!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }
    if(this.head.value === value) {
      return this.head;
    }

    // Vinicio - let's loop over the linked list
    let current = this.head;
    while(current.next) {
      //------------------------------------------------------
      // Vinicio - While I'm looping I want to check if I find the
      // value I'm looking for
      if(current.next.value === value) {
        return current.next;
      }
      //------------------------------------------------------
      current = current.next;
    }
    // Vinicio - if I got to this point, I didn't find anything
    return null;
  }

  // Andrew - insert a new node before the node with the given value
  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    // Andrew - edge case if first new is value
    let current = this.head;
    if (current.value === value) {
      newNode.next = current;
      this.head = newNode;
    }
    while(current.next) {
      if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        break;
      } else {
        current = current.next;
      }
    }
  }

  // Andrew - insert new node after the node with given value
  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    while(current) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        break;
      } else {
        current = current.next;
      }
    }
  }
  // Delete first instance of giiven value
  delete(value) {
    let current = this.head;
    // Andrew - edge case first value is it
    if (current.value === value) {
      current = current.next;
      this.head = current;
    }
    while(current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }

  // Andrew - find the kth element from the end of the linked list
  kthFromEnd(k) {
    if (k < 0) {
      throw new LLError('k cannot be negative')
    }
    if (this.head.next === null && k !== 0) {
      throw new LLError('linked list has length of one')
    }
    let leader = this.head;
    let follower = this.head;
    // get leader k steps ahead of follower
    for (let i = 0; i < k; i++) {
      leader = leader.next;
      if (leader === null) {
        if (i === k - 1) {
          throw new LLError('k is equal to the length of LL');
        } else {
          throw new LLError('k is greater than length of LL');
        }
      }
    }
  }
}



module.exports = LinkedList;