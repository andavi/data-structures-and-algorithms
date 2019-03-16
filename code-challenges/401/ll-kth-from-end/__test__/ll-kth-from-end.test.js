'use strict';

const LinkedList = require('../linked-list');
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

  // // ARRANGE
  let n0 = new Node(5);
  let n1 = new Node(4);
  let n2 = new Node(3);
  let n3 = new Node(2);
  let n4 = new Node(1);
  let n5 = new Node(0);

  n0.next = n1;
  n1.next = n2;
  n2.next = n3;
  n3.next = n4;
  n4.next = n5;

  const ll = new LinkedList();
  ll.head = n0;

  // ACT ---

  // ASSERT
  it('returns greater than error when k is greater than length of LL', () => {
    const testGreater = () => ll.kthFromEnd(8);
    expect(testGreater).toThrowError(/greater/);
  });

  it('returns error when k is equal to length of LL', () => {
    const testEqual = () => ll.kthFromEnd(6);
    expect(testEqual).toThrowError(/equal/);
  });

  it('returns error when length of LL is only one', () => {
    oneLL = new Node('one');
    const lengthOne = () => oneLL.kthFromEnd(1);
    expect(lengthOne).toThrowError(/length of one/);
  });





});