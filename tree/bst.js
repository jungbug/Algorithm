class TreeNode{
    data;
    leftChild = null;
    rightChild = null;

    constructor(data){
        this.data = data
    }
}

class BST {
    root = null;
    insert(data){
        let node = this.root
        if(node == null){
            this.root = new TreeNode(data)
            return
        } else{
            let searchTree = (node) => {
                if(data < node.data){
                    if(node.leftChild){
                        return searchTree(node.leftChild)
                    }else{
                        node.leftChild = new TreeNode(data)
                        return
                    }
                }else if(data > node.data){
                    if(node.rightChild){
                        return searchTree(node.rightChild)
                    }else{
                        node.rightChild = new TreeNode(data)
                        return
                    }
                }else{
                    console.log("같은 값이 있다")
                    return null
                }
            }
            searchTree(node)
        }
    }
    
    inOrder(){
        let visited = []
        const traverse = (node) => {
            if(node.leftChild) traverse(node.leftChild)
            visited.push(node.data)
            if(node.rightChild) traverse(node.rightChild)
        }
        traverse(this.root)
        return visited.join("->")
    }
    preOrder(){
        let visited = []
        const traverse = (node) => {
            visited.push(node.data)
            if(node.leftChild) traverse(node.leftChild)
            if(node.rightChild) traverse(node.rightChild)
        }
        traverse(this.root)
        return visited.join("->")
    }
    postOrder(){
        let visited = []
        const traverse = (node) => {
            if(node.leftChild) traverse(node.leftChild)
            if(node.rightChild) traverse(node.rightChild)
            visited.push(node.data)
        }
        traverse(this.root)
        return visited.join("->")
    }
    isexist(data){
        let tempNode = this.root
        while(tempNode != null){
            if(tempNode.data == data){
                return true
            }
            if(tempNode.data > data){
                tempNode = tempNode.leftChild
            }else if(tempNode.data < data){
                tempNode = tempNode.rightChild
            }
        }
        return false
    }

}