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
      ]//Fine array toDos

    },//Chiurusa Data

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

      fatto: function(index) {
        this.toDos[index].scope = 'done';
        

      }


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
  //Deve spostarsi come ultimo della lista
