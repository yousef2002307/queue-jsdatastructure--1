class queue{
    static front = - 1;
    static rear = - 1;
    static arr = [];
    constructor(max){
      
        this.max = max;
    }
    isfull(){
        if(queue.rear == this.max - 1){
            return true;
        }else{
            return false;
        }
    }
    isempty(){
        if(queue.rear == -1 && queue.front == -1){
            return true;
        }else{
            return false;
        }
    }
    push(ele){
        if(this.isfull()){
            console.log("queue is full");
        }else{
            if(queue.front == -1){
                queue.front = 0;
            }
            queue.rear++;
            queue.arr[queue.rear] = ele;
        }
    }
    dequeue(){
        if(this.isempty()){
            console.log("queue is empty");
        }else if(queue.front == queue.rear){
            queue.front = -1;
            queue.rear = -1;
        }else{
         queue.front++;
        }
    }
    display(){
        if(this.isempty()){
           console.log("queue is empty");
        }else{
            for(let i = queue.front; i <= queue.rear; i++){
           
                console.log(queue.arr[i])
            }
        }
    }
}
const obj1 = new queue(5);
obj1.push(20);
obj1.push(2034);
obj1.push(209);
obj1.push(240);
obj1.push(10);
obj1.dequeue();
obj1.push(999)


obj1.display()
