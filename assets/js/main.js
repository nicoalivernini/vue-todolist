var app = new Vue (
  {
    el: '#root',
    data: {
      toDoUtente: '',
      toDos: [
        {
          title: 'Allenarsi',
          scope: 'to-do'
        },
        {
          title: 'Bere acqua',
          scope: 'to-do'
        },
        {
          title: 'Fare la spesa',
          scope: 'to-do'
        },
        {
          title: 'Esercizi Inglese',
          scope: 'to-do'
        }
      ],//Fine array toDos

    },//Chiurusa Data

    computed: {
      toDosFatti: function () {
        let toDoFatti = this.toDos.filter((toDos) => toDos.scope == 'done');
        let toDoDaFare = this.toDos.filter((toDos) => toDos.scope == 'to-do');
        console.log(toDoFatti);
        return [...toDoDaFare, ...toDoFatti]
      },



    },//Chiusura created

    methods: {
      insertInput: function() {

        if (this.toDoUtente != '') {
          var newObj = {
            title: this.toDoUtente,
            scope: 'to-do'
          }
          this.toDos.push(newObj);
          this.toDoUtente = '';
        }
      },

      fatto: function(toDo) {
        let index = this.toDos.indexOf(toDo);
        this.toDos[index].scope = 'done';

      },

      cancellare: function(toDo){
        let index = this.toDos.indexOf(toDo);

        this.toDos.splice(index, 1)
        console.log(index);
      },

    }//Chiusura Methods


}); //Chiusura Vue
