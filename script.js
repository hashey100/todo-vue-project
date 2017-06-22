function readData(){
  var itemList = localStorage.getItem('todo');
    return JSON.parse(itemList);
  }

var updatedlist = readData();

if(updatedlist==null)
{
  updatedlist = [];
}

var app = new Vue({
  el: '#container',
  data: {
    todos: updatedlist,
     input: ''
  },
  methods: {
    addMessage: function () {

      if(this.input!='')
      {
        app.todos.push({ text: this.input })
        localStorage.setItem( 'todo', JSON.stringify(this.todos) );
        var val = localStorage.getItem('todo');
      }
    },
    removeMessage: function (todo) {
      this.todos.splice(todo, 1);
      console.log(todo);
      localStorage.setItem( 'todo', JSON.stringify(this.todos) );
    }
  }
})
