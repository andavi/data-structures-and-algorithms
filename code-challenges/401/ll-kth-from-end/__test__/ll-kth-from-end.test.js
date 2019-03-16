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

  it('returns error when k < 0', () => {
    const testNegativeK = () => ll.kthFromEnd(-3);
    expect(testNegativeK).toThrowError(/negative/);
  });

  it('returns error when length of LL is only one and k is not 0', () => {
    const oneLL = new LinkedList();
    oneLL.head = new Node('one');
    const testOne = () => oneLL.kthFromEnd(1);
    expect(testOne).toThrowError(/length of one/);
  });

  it('returns correct value after passing all edge cases', () => {
    // const value = ll.kthFromEnd(3);
    // expect(value).toEqual(3);
    const results = [];
    for (let i = 0; i < 6; i++) {
      results.push(ll.kthFromEnd(i))
    }
    results.forEach((value, index) => {
      expect(value).toEqual(index);
    })
  })


});