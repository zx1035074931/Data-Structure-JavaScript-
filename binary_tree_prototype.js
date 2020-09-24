/*  二叉搜索树 Binary search tree
左子节点的值 < 父节点，右子节点的值 > 父节点。
*/
//  定义节点
function Node(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.show = show
}

function show() {
    return this.data
}

//  定义二叉树
function BST() {
    this.root = null
    // this.insert = insert // 插入数据
    // this.inserts = inserts // 插入多个数据
    // this.inOrder = inOrder          // 中序遍历
    // this.preOrder = preOrder   // 先序遍历/顺序遍历
    // this.postOrder = postOrder // 后序遍历/倒序遍历
    // this.find = find // 查找特定数据是否在二叉树中
    // this.getMin = getMin // 查找最小值
    // this.getMax = getMax // 查找最小值
    // this.getSmallest = getSmallest
    // this.removeNode = removeNode
}

BST.prototype.insert = function (data) {
// function insert(data) {
    /*  二叉树插入新节点算法思路：
    （1）设根节点为当前节点。
    （2）如果待插入节点保存的数据小于当前节点，则设新的当前节点为原节点的左节点；反之，执行第4步。
    （3）如果当前节点的左节点为nul，就将新的节点插入这个位置，退出循环；反之，继续执行下一次循环。
    （4）设新的当前节点为原节点的右节点。
    （5）如果当前节点的右节点为nu，就将新的节点插入这个位置，退出循环；反之，继续执行下一次循环。
    */
    var n = new Node(data, null, null)
    if (this.root == null) {
        this.root = n
    } else {
        var current = this.root
        var parent
        while (true) {
            parent = current
            if (data < current.data) {
                current = current.left
                if (current == null) {
                    parent.left = n
                    break
                }
            } else {
                current = current.right
                if (current == null) {
                    parent.right = n
                    break
                }
            }
        }
    }
}

BST.prototype.inserts = function () {
    for (let index = 0; index < arguments.length; index++) {
        this.insert(arguments[index])
    }
}

BST.prototype.inOrder = function (node) {
    if (node != null) {
        this.inOrder(node.left)
        console.log(node.show() + ' ')
        this.inOrder(node.right)
    }
}

BST.prototype.preOrder = function (node) {
    if (node != null) {
        console.log(node.show() + ' ')
        this.preOrder(node.left)
        this.preOrder(node.right)
    }
}

BST.prototype.postOrder = function (node) {
    if (node != null) {
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.show() + ' ')
    }
}

BST.prototype.find = function (data) {
    var current = this.root
    while (current != null) {
        if (current.data = data) {
            return current
        } else if (data < current.data) {
            current = current.left
        } else {
            current = current.right
        }
    }
    return null
}

BST.prototype.getMin = function () {
    var current = this.root
    while (current.left != null) {
        current = current.left
    }
    return current.data
}

BST.prototype.getMax = function () {
    var current = this.root
    while (current.right != null) {
        current = current.right
    }
    return current.data
}

// 获取给定节点下的二叉树最小值
BST.prototype.getSmallest = function(node) {
    if(node.left == null) {
        return node;
    } else {
        return getSmallest(node.left);
    }
};
// 根据给定删除给定节点下二叉树的对应节点
BST.prototype.removeNode = function(node, data) {
    if(node == null) {
        return null;
    }
    if(data == node.data) {
        // 没有子节点（子树）
        if(node.left == null && node.right == null) {
            return null;
        } 
        // 只有右子节点（子树）
        else if(node.left == null ) {
            return node.right;
        } 
        // 只有左子节点（子树）
        else if(node.right == null){
            return node.left;
        } 
        // 有两个子节点（子树）
        else {
            var tempNode = this.getSmallest(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        }
    } else if(data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    } else {
        node.right = this.removeNode(node.right, data);
        return node;
    }
}

var nums = new BST()
nums.inserts(23, 45, 16, 37, 3, 99, 22)

console.log('inOrder traversal: ')
nums.inOrder(nums.root)

console.log('postOrder traversal: ')
nums.postOrder(nums.root)

console.log('preOrder traversal: ')
nums.preOrder(nums.root)

console.log('After removing: ')
nums.removeNode(nums.root, 16)
nums.preOrder(nums.root)

console.log(nums.find(23));
console.log(nums.getMin());
console.log(nums.getMax());


