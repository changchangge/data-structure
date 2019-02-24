/*
 * @Author: changchang
 * @github: https://github.com/changchangge
 * @LastEditors: changchang
 * @Date: 2019-02-24 22:43:46
 * @LastEditTime: 2019-02-24 23:59:01
 */

//使用js实现一个队列

class Queue {
  constructor() {
    this.dataStore = [];
  }
  //入队
  enqueue = (e) => {
    this.dataStore.push(e)
  }
  //出队
  dequeue = () => {
    if(this.empty()===true){return "This queue is empty";}
    this.dataStore.shift();
  }
  //查看队首元素
  front = () => {
    return this.dataStore[0];
  }
  //查看队尾元素
  back = () => {
    return this.dataStore[this.dataStore.length-1];
  }
  //显示队列所有元素
  toString = () => {
    return this.dataStore.join(",");
  }
  //清空当前队列
  clear = () => {
    delete this.dataStore;
    this.dataStore=[];
  }
  //判断当前队列是否为空
  empty = () => {
    if(this.dataStore.length===0){return true;}
    return false;
  }
}


/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.data=[];
  this.queueLength=k;
};

/**
* Insert an element into the circular queue. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if(this.data<this.queueLength){this.data.push(value);return true}
  return false;
};

/**
* Delete an element from the circular queue. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if(this.isEmpty()===false){
      this.data.shift();
      return true;
  }
};

/**
* Get the front item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if(this.isEmpty()===true){return -1;}
  return this.data[0];·
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  if(this.isEmpty()===true){return -1;}
  return this.data[this.data.length-1];
};

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  if(this.data.length===0){return true;}
  return false;
};

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  if(this.data.legth===this.queueLength){return true;}
  return false;
};

/** 
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = Object.create(MyCircularQueue).createNew(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/


//循环队列
/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.data=[];
  this.queueLength=k;
};

/**
* Insert an element into the circular queue. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if(this.data.length<this.queueLength){this.data.push(value);return true}
  return false;
};

/**
* Delete an element from the circular queue. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if(this.isEmpty()===false){
      this.data.shift();
      return true;
  }
  return false;
};

/**
* Get the front item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if(this.isEmpty()===true){return -1;}
  return this.data[0];
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  if(this.isEmpty()===true){return -1;}
  return this.data[this.data.length-1];
};

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  if(this.data.length===0){return true;}
  return false;
};

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  if(this.data.length===this.queueLength){return true;}
  return false;
};

/** 
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = Object.create(MyCircularQueue).createNew(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/