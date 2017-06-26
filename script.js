function readData() {
    var itemList = JSON.parse(localStorage.getItem('todo'));
    if(itemList==null) {
        itemList = [];
    }
    return itemList;
}

var app = new Vue({
  el: '#container',
  data: {
    todos: readData(),
     input: ''
  },
  methods: {
    addMessage: function () {
      if(this.input!='') {
        app.todos.push({ text: this.input })
        localStorage.setItem( 'todo', JSON.stringify(this.todos) );
        var val = localStorage.getItem('todo');
      }
    },
    removeMessage: function (key) {
      this.todos.splice(key, 1);
      localStorage.setItem( 'todo', JSON.stringify(this.todos) );
    }
  }
})
