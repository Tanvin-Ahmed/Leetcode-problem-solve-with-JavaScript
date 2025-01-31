/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const partition = function (head, x) {
  let sList = new ListNode();
  let bList = new ListNode();
  let small = sList;
  let big = bList;

  while (head) {
    if (head.val < x) {
      small.next = head;
      small = small.next;
    } else {
      big.next = head;
      big = big.next;
    }
    head = head.next;
  }

  small.next = bList.next;
  big.next = null;

  return sList.next;
};

const head = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 5,
          next: {
            val: 2,
            next: null,
          },
        },
      },
    },
  },
};

const viewList = (head) => {
  while (head) {
    console.log(head.val, " ");
    head = head.next;
  }
};

const list = partition(head, 3);
viewList(list);

/*
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]
*/

// const x = {
//   val: 2,
//   next: {
//     val: 1,
//     next: null,
//   },
// };

// const y = { ...x };

// y.val = 1;

// console.log(x);
// console.log(y);
