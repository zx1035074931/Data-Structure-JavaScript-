/*
链表：
链表是一种特殊的表结构，由一组节点组成，每个节点都使用一个对象的引用指向它的后继
指向1另一个节点的引用叫链
*/

//  链表的节点 包含数据的element和指向下一个节点的next组成  
function Node(element) {
    this.element = element
    this.next = null
}

//  链表类
function LinkList() {
    this.head = new Node('head')  //  创建链表的表头
    this.find = find  //  find方法用于查找特定的节点
    this.findPrevious = findPrevious  //  findPrevious方法用于查找特定的节点的前驱节点
    this.insert = insert  //  insert方法用于在特定节点后面插入节点
    this.remove = remove  //  remove方法用于删除特定的节点
    this.display = display  //  输出链表的所有元素
}

function find(item) {
    var currNode = this.head  //  从表头开始遍历
    while (currNode.element != item) {
        currNode = currNode.next
    }
    return currNode
}

//  newElement为待插入的元素，targetElement为待插入的位置
function insert(newElement, targetElement) {
    var newNode = new Node(newElement)
    var targetNode = this.find(targetElement)
    newNode.next = targetNode.next
    targetNode.next = newNode
}

//  查找特点节点的前一个节点
function findPrevious(targetElement) {
    var currNode = this.head
    while (currNode != null && currNode.next.element != targetElement) {
        currNode = currNode.next
    }
    return currNode
}

function remove(targetElement) {
    var preNode = this.findPrevious(targetElement)
    if(preNode.next!=null){
        preNode.next = preNode.next.next
    }
}

function display() {
    var currNode = this.head
    while (currNode != null) {
        console.log(currNode.element)
        currNode = currNode.next
    }
}

// 链表使用示例
var cities = new LinkList()
cities.insert('北京', 'head')
cities.insert('南京', '北京')
cities.insert('广州', '南京')
cities.insert('苏州', '广州')
cities.display()  // 结果：head 北京 南京 广州 苏州
cities.remove('苏州')
cities.display()  // 结果：head 北京 南京 广州