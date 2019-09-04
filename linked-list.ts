export interface DoublyLinkedListNode<T> {
    value: T
    next?: DoublyLinkedListNode<T>
    prev?: DoublyLinkedListNode<T>
}

/**
 * Linked list for items of type T
 */
export default class DoublyLinkedList<T> {
    public head?: DoublyLinkedListNode<T> = undefined;
    public tail?: DoublyLinkedListNode<T> = undefined;


    /**
     * Insert value at back
     **/
    push(value: T) {
        const node: DoublyLinkedListNode<T> = {
            value,
            next: undefined,
            prev: undefined,
        }
        if (!this.head) {
            this.head = node;
        }
        if (this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
        }
        this.tail = node;
    }

    /**
       * Remove value at back
       */
    pop(): T | undefined {
        if (this.tail) {
            const value = this.tail.value;
            this.tail = this.tail.prev;
            if (!this.tail) {
                this.head = undefined;
            }
            else {
                this.tail.next = undefined;
            }
            return value;
        }
    }

    /**
     * Insert value at front
     */
    unshift(value: T) {
        const node: DoublyLinkedListNode<T> = {
            value,
            next: undefined,
            prev: undefined
        }

        if(!this.tail){
            this.tail = node;
        } 
        if(this.head){
            this.head.prev = node;
            node.next = this.head
        }
        this.head= node;
    }

    /**
     * Remove value at front
     */
    shift(): T | undefined {
        if (this.head) {
            const value = this.head.value;
            this.head = this.head.next;
            if (!this.head) {
                this.tail = undefined;
            }
            else {
                this.head.prev = undefined;
            }
            return value;
        }
    }



    public count(): number {
        let count = 0
        let node: DoublyLinkedListNode<T> | undefined = this.head
    
        while (this.head && node) {
          count++
          node = node.next
        }
        return count
      }


}