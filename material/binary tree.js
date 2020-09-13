/*  二叉树

*/
//  定义节点
function Node(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    // this.left=left
}

//  定义二叉树
function BST() {
    this.root = null
    this.insert = insert
}

function insert(data) {
    /*  二叉树插入新节点算法思路：
    （1）设根节点为当前节点。
    （2）如果待插入节点保存的数据小于当前节点，则设新的当前节点为原节点的左节点；反之，执行第4步。
    （3）如果当前节点的左节点为nul，就将新的节点插入这个位置，退出循环；反之，继续执行下一次循环。
    （4）设新的当前节点为原节点的右节点。
    （5）如果当前节点的右节点为nu，就将新的节点插入这个位置，退出循环；反之，继续执行下一次循环。
    */
    var n = new Node(data, left, right)
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
