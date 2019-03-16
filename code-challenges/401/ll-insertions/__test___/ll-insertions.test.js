'use strict';

const LinkedList = require('./.');
const Node = require('../node');

// helper for printing linked list
const printLL = (ll) => {
  let current = ll.head;
  const result = [];
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  return result.join('');
};


describe('Linked Linked Insertions', () => {

  // ARRANGE
  let n0 = new Node('c');
  let n1 = new Node('o');
  let n2 = new Node('d');
  let n3 = new Node('e');
  n0.next = n1;
  n1.next = n2;
  n2.next = n3;
  const ll = new LinkedList();
  ll.head = n0;

  // ACT ---

  // ASSERT
  it('can append node to the end', () => {
    ll.insertAtTail('r');
    let current = ll.head;
    while(current.next){
      current = current.next;
    }
    expect(current.value).toEqual('r');
  })

  it('can append multiple nodes to the end', () => {
    ll.insertAtTail('f');
    ll.insertAtTail('e');
    ll.insertAtTail('l');
    const arr = [];
    let current = ll.head;
    while(current) {
      arr.push(current.value);
      current = current.next;
    }
    expect(arr.slice(arr.length - 3).join('')).toEqual('fel');
  });

  it('can insert node before value in middle', () => {
    ll.insertBefore('l', 'e');
    expect(printLL(ll)).toEqual('coderfeel');
  });

  it('can insert node before first node in list', () => {
    ll.insertBefore('c', 's');
    expect(printLL(ll)).toEqual('scoderfeel');
  });

  it('can insert node after node middle of list', () => {
    ll.insertAfter('s', 'o');
    expect(printLL(ll)).toEqual('socoderfeel');
  });

  it('can insert node after last node of list', () => {
    ll.insertAfter('l', 'z');
    expect(printLL(ll)).toEqual('socoderfeelz');
  });

  it('can delete first node of given value', () => {
    ll.delete('r');
    expect(printLL(ll)).toEqual('socodefeelz');
    ll.delete('s');
    expect(printLL(ll)).toEqual('ocodefeelz');
    ll.delete('z');
    expect(printLL(ll)).toEqual('ocodefeel');
  });

});