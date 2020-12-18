/**
 * 合并有序数组
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6], n = 3
 * 输出: [1,2,2,3,5,6]
 */

const nums1 = [1, 2, 3, 3, 4, 5];
const nums2 = [2, 5, 6];
const mergeArr1 = (nums1, nums2) => {
	let i = nums1.length - 1,
		j = nums2.length - 1;
	let k = i + j + 1;
	while (i >= 0 && j >= 0) {
		if (nums1[i] > nums2[j]) {
			nums1[k] = nums1[i];
			i--;
			k--;
		} else {
			nums1[k] = nums2[j];
			j--;
			k--;
		}
	}
	while (j >= 0) {
		nums1[k] = nums2[j];
		k--;
		j--;
	}
	return nums1;
};

const mergeArr2 = (nums1, nums2) => {};

// console.log(mergeArr1(nums1, nums2));
/**
 *  给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，
 * 并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素
 * 示例: 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
 */

const nums = [2, 7, 11, 15];
const getIndexList = (arr, target) => {
	const map = new Map();
	for (let i = 0; i < arr.length; i++) {
		if (map.get(target - arr[i]) !== undefined) {
			return [map.get(target - arr[i]), i];
		} else {
			map.set(arr[i], i);
		}
	}
};

// console.log(getIndexList(nums, 9));

var sortedSquares = function (A) {
	const swap = (j) => {
		[A[0], A[j]] = [A[j], Math.pow(A[0], 2)];
	};
	let j = A.length - 1;
	while (j > 0) {
		// var a = Math.abs(A[0]);
		// var b = Math.abs(A[j]);
		if (Math.abs(A[0]) > Math.abs(A[j])) {
			swap(j);
		} else {
			A[j] = Math.pow(A[j], 2);
		}
		j--;
	}
	A[0] = Math.pow(A[0], 2);
	return A;
};

var A = [-4, -4, -1, 0, 3, 10];
// console.log(sortedSquares(A));

/**
 * 链表合并
 * 真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。
 * 示例： 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4
 */

const mergeTwoLists = function (l1, l2) {
	let head = new List();
	let cur = head;
	while (l1 && l2) {
		if (l1.val > l2.val) {
			cur.next = l2;
			l2 = l2.next;
		} else {
			cur.next = l1.next;
			l1 = l1.next;
		}
		cur = cur.next;
	}
	cur.next = l1 !== null ? l1 : l2;
	return head.next;
};

/**
 * 节点删除
 * 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 示例 1:
 * 输入: 1->1->2
 * 输出: 1->2
 * 示例 2:
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
 */
const deleteDuplicates = function (head) {
	let cur = head;
	while (cur && cur.next) {
		let next = cur.next;
		if (cur.val === next.val) {
			cur.next = next.next;
		} else {
			cur = cur.next;
		}
	}
	return head;
};

/**
 * 删除问题的延伸——dummy 结点登场
 * 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字
 * 示例 1:
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 * 示例 2:
 * 输入: 1->1->1->2->3
 * 输出: 2->3
 */

const deleteDuplicates2 = function (head) {
	if (!head || !head.next) {
		return head;
	}
	let dummy = new ListNode();
	dummy.next = head;
	let cur = dummy;
	while (cur.next && cur.next.next) {
		if (cur.next.val === cur.next.next.val) {
			let val = cur.next.val;
			while (cur.next && cur.next.val === val) {
				cur.next = cur.next.next;
			}
		} else {
			cur = cur.next;
		}
	}
	return dummy.next;
};

/**
 * 多指针法——链表的反转
 * 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
 * 示例:
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}
const reverseList = function (head) {
	function reverse(prev, next) {
		if (next) {
			const tmpNode = next.next;
			next.next = prev;
			return reverse(next, tmpNode);
		}
		return prev;
	}
	return reverse(null, head);
};

const reverseList2 = function (head) {
	let prev = null;
	let cur = head;
	while (cur !== null) {
		let next = cur.next;
		cur.next = prev;
		prev = cur;
		cur = next;
	}
	return prev;
};

var a = new ListNode(3);
var b = new ListNode(8);
var c = new ListNode(5);
var d = new ListNode(2);
a.next = b;
b.next = c;
c.next = d;
// console.log(reverseList(a));

/**
 * 局部反转一个链表
 * 真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 说明: 1 ≤ m ≤ n ≤ 链表长度。
 *
 * 示例:
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 */
const reverseListBetween = function (head, m, n) {
	const count = m - n;
	if (count <= 0) {
		return head;
	} else {
		let pre = head;
		let i = 1;
		while (i++ < m - 1 && prev) {
			prev = prev.next;
		}
		let cur = prev.next;
		while (i++ < n && cur && cur.next) {
			let node = cur.next.next;
			cur.next.next = cur;
			cur.next = node;
		}
	}
};

/**
 * 栈问题进阶-每日温度问题
 * 题目描述: 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。
 * 如果之后都不会升高，请在该位置用 0 来代替。
 *
 * 例如，给定一个列表
 * temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
 *
 * 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
 *
 * 尝试去维持一个递减栈
 */
const dailyTemperatures = function (T) {
	let stack = [];
	let res = new Array(T.length).fill(0);
	for (let i = 0; i < T.length; i++) {
		while (stack.length && T[i] > T[stack[stack.length - 1]]) {
			let top = stack.pop();
			res[top] = i - top;
		}
		stack.push(i);
	}
	return res;
};
// temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
// console.log(dailyTemperatures(temperatures));

/**
 * “最小栈”问题
 * 题目描述：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * push(x) —— 将元素 x 推入栈中。
 * pop() —— 删除栈顶的元素。
 * top() —— 获取栈顶元素。
 * getMin() —— 检索栈中的最小元素。
 *
 * 示例:
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin(); --> 返回 -3.
 * minStack.pop();
 * minStack.top(); --> 返回 0.
 * minStack.getMin(); --> 返回 -2.
 *
 */

const MinStack = function () {
	this.stack = [];
	this.min = [];
};

/**
 * @param {number} x
 * @return {void}
 */
// 栈的入栈操作，其实就是数组的 push 方法
MinStack.prototype.push = function (x) {
	this.stack.push(x);
	if (this.min.length === 0 || this.min[this.min.length - 1] > x) {
		this.min.push(x);
	}
};

/**
 * @return {void}
 */
// 栈的入栈操作，其实就是数组的 pop 方法
MinStack.prototype.pop = function () {
	if (this.stack.pop() === this.min[this.min.length - 1]) {
		this.min.pop();
	}
};

MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
	return this.min[0];
};

const root = {
	val: "A",
	left: {
		val: "B",
		left: {
			val: "D",
		},
		right: {
			val: "E",
		},
	},
	right: {
		val: "C",
		right: {
			val: "F",
		},
	},
};

const BFS = (root) => {
	const queue = [root];
	let cur;
	while (queue.length) {
		cur = queue.shift();
		console.log(cur.val);
		if (cur.left) {
			queue.push(cur.left);
		}
		if (cur.right) {
			queue.push(cur.right);
		}
	}
};

// BFS(root);

/**
 * 全排列问题
 * 示例：
 * 输入: [1,2,3]
 * 深度优先， 边界值
 *
 * 输出: [
 *          [1,2,3],
 *          [1,3,2],
 *          [2,1,3],
 *          [2,3,1],
 *          [3,1,2],
 *          [3,2,1]
 *      ]
 */

const permute = function (nums) {
	const len = nums.length;
	const curr = [];
	const res = [];
	const visited = {};
	function dfs(nth) {
		if (nth === len) {
			res.push(curr.slice());
			return;
		}
		for (let i = 0; i < len; i++) {
			if (!visited[nums[i]]) {
				visited[nums[i]] = 1;
				curr.push(nums[i]);
				dfs(nth + 1);

				curr.pop();
				visited[nums[i]] = 0;
			}
		}
	}
	dfs(0);
	return res;
};

// console.log(permute([1, 2, 3]));

/**
 * 组合问题：变化的“坑位”，不变的“套路”
 * 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 *
 * 示例: 输入: nums = [1,2,3]
 * 输出:
 * [
 *  [3],
 *  [1],
 *  [2],
 *  [1,2,3],
 *  [1,3],
 *  [2,3],
 *  [1,2],
 *  []
 * ]
 *
 */

const subsets = (nums) => {
	const len = nums.length;
	const res = [];
	const curr = [];

	const dfs = (nth) => {
		res.push(curr);
		for (let i = nth; i < len; i++) {
			curr.push(nums[i]);
			dfs(i + 1);
			curr.pop();
		}
	};
	dfs(0);
	return res;
};

const sors = (num, len) => {
	const curr = [];
	const res = [];

	const dfs = (nth) => {
		if (curr.length === len) {
			res.push(curr.slice());
			return;
		}
		for (let i = nth; i <= num; i++) {
			curr.push(i);
			dfs(i + 1);
			curr.pop();
		}
	};
	dfs(1);
	return res;
};

// const arr = [1, 2, 3];

// console.log(sors(4, 2));

var insert = function (intervals, newInterval) {
	let start, end;
	let i = 0;
	let res = [];
	while (i < intervals.length) {
		if (start === undefined) {
			if (intervals[i][1] < newInterval[0]) {
				res.push(intervals[i]);
				i++;
			} else if (intervals[i][0] >= newInterval[0]) {
				start = newInterval[0];
			} else {
				start = intervals[i][0];
			}
		} else if (end === undefined) {
			if (intervals[i][0] > newInterval[1]) {
				end = newInterval[1];
				res.push([start, end]);
			} else if (intervals[i][1] >= newInterval[1]) {
				end = intervals[i][1];
				res.push([start, end]);
				i++;
			} else {
				i++;
			}
		} else {
			res.push(intervals[i]);
			i++;
		}
	}
	if (start === undefined || end === undefined) {
		res.push([start != undefined ? start : newInterval[0], newInterval[1]]);
	}
	return res;
};

// var intervals = [
// 	[1, 2],
// 	[3, 5],
// 	[6, 7],
// 	[8, 10],
// 	[12, 16],
// ];
// var newInterval = [2, 5];

// console.log(insert(intervals, newInterval));

/* 题目描述：给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

示例：

二叉树：[3,9,20,null,null,15,7],

  3
 / \
9  20
  /  \
 15   7
返回其层次遍历结果：

[
[3],
[9,20],
[15,7]
]
*/
function BinaryTree(val) {
	this.val = val;
	this.left = this.right = null;
}
const bfs = (root) => {
	const stack = [];
	const res = [];
	if (!root) {
		return res;
	}
	stack.push(root);
	while (stack.length) {
		const curRes = [];
		const len = stack.length;
		for (let i = 0; i < len; i++) {
			const item = stack.shift();
			if (item.left) {
				stack.push(item.left);
			}
			if (item.right) {
				stack.push(item.right);
			}
		}
		res.push(curRes);
	}
	return res;
};

// const root1 = new BinaryTree(3);
// const left1 = new BinaryTree(9);
// const right1 = new BinaryTree(20);
// const left12 = new BinaryTree(15);
// const right12 = new BinaryTree(7);

// root1.left = left1;
// root1.right = right1;
// right1.left = left12;
// right1.right = right12;
// console.log(bfs(root1));

/**
 *  题目描述：翻转一棵二叉树。
 * 示例：
 *
 * 输入：
 *
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 * 输出：
 *
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 *
 *  */

function reverseTree(root) {
	if (!root) {
		return root;
	}
	const right = reverseTree(root.right);
	const left = reverseTree(root.left);
	root.right = left;
	root.left = right;
	return root;
}

// const root1 = new BinaryTree(3);
// const left1 = new BinaryTree(9);
// const right1 = new BinaryTree(20);
// const left12 = new BinaryTree(15);
// const right12 = new BinaryTree(7);

// root1.left = left1;
// root1.right = right1;
// right1.left = left12;
// right1.right = right12;

// console.log(reverseTree(root1));

/**
 * 二叉搜索树 查找节点
 * @param {type: TreeNode } root 根节点
 * @param {type: number } target 目标值
 */
const searchNode = (root, target) => {
	let result;
	if (!root) {
		return result;
	} else if (root.val === target) {
		result = root;
	} else if (root.val < target) {
		result = searchNode(root.right, target);
	} else if (root.val > target) {
		result = searchNode(root.left, target);
	}
	return result;
};

// const left1 = new BinaryTree(3);
// const root1 = new BinaryTree(9);
// const right1 = new BinaryTree(20);
// const left12 = new BinaryTree(15);
// const right12 = new BinaryTree(7);

// root1.left = left1;
// root1.right = right1;
// right1.left = left12;
// left1.right = right12;

// console.log(searchNode(root1, 7));

/**
 * 二叉搜索树插入节点
 * @param {type: TreeNode} root 根节点
 * @param {type: number} target 插入目标值
 */
const insertBST = (root, target) => {
	if (!root) {
		root = new BinaryTree(target);
		return root;
	}
	if (root.val < target) {
		root.right = insertBST(root.right, target);
	} else {
		root.left = insertBST(root.left, target);
	}
	return root;
};

// const left1 = new BinaryTree(3);
// const root1 = new BinaryTree(9);
// const right1 = new BinaryTree(20);
// const left12 = new BinaryTree(15);
// const right12 = new BinaryTree(7);

// root1.left = left1;
// root1.right = right1;
// right1.left = left12;
// left1.right = right12;

// console.log(JSON.stringify(insertBST(root1, 17)));

const searchMaxNode = (root) => {
	while (root.right) {
		root = root.right;
	}
	return root;
};

const searchMinNode = (root) => {
	while (root.left) {
		root = root.left;
	}
	return root;
};

const deleteBSTNode = (root, target) => {
	if (!root) {
		return root;
	}
	if (root.val === target) {
		if (root.right) {
			const minNode = searchMinNode(root.right);
			root.val = minNode.val;
			deleteBSTNode(root.right, minNode.val);
		} else if (root.left) {
			const maxNode = searchMaxNode(root.left);
			root.val = maxNode.val;
			deleteBSTNode(root.left, maxNode.val);
		} else {
			root = null;
		}
	} else if (root.val < target) {
		root.right = deleteBSTNode(root.right, target);
	} else {
		root.left = deleteBSTNode(root.left, target);
	}
	return root;
};

/**
 * 题目描述：给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 * 假设一个二叉搜索树具有如下特征：
 * 节点的左子树只包含小于当前节点的数。
 * 节点的右子树只包含大于当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 */

const isValidBST = (root) => {
	const dfs = (root, min, max) => {
		if (!root) {
			return true;
		}
		if (root.val <= min || root.val >= max) {
			return false;
		}
		return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
	};
	return dfs(root, -Infinity, Infinity);
};

const tranverseBST = (arr) => {
	const root;
	if (!arr.length) {
		return root;
	}
	root = new BinaryTree(arr.shift());
	while (arr.length) {
		insert(root, arr.shift());
	}
	return root;
};
