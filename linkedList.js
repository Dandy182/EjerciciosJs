function LinkedList(){
    this.head = null;
    this._size = 0;
  }
  
function Node(dato){
    this.dato = dato;
    this.next = null;
  }
  

  LinkedList.prototype.add = function(dato){
    let nodo = new Node(dato);
    let actual = this.head;
    
    this._size++;
    
    if(this.head === null){
      this.head = nodo;
    }else{
      
      while(actual.next !== null){
        actual = actual.next;
      }
      
      actual.next = nodo;
      
    }
    
    return nodo;
 }
  
  
  
  let lista = new LinkedList()
  lista.add('Carlos');
  lista.add('Miguel');
  lista.add('3')
  
  console.log(lista)