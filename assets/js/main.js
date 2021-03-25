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
        let toDoFatti = this.toDo.filter((todo) => todo.scope == 'done');
        let toDoDaFare = this.toDo.filter((todo) => todo.scope == 'to-do');
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

//Dobbiamo fare un'array di cose da fare così da avere alcuni esempio
//Dobbiamo dare la possibilità di aggiungere le cose da poter fare
  //Calcolare invio con la tastiera
  //L'inserimento di stringa vuota da disabilitare
  //Far tornare l'input vuoto quando mando il comando per inserire
//Quando clicchiamo sul check
  //Il testo deve sbarrarsi
  //Le icone devono sparire
  //Deve apparire l'icona del cestino
  //Quando clicchiamo sull'icona del cestino deve essere cancellato
  //Deve spostarsi come ultimo della lista
