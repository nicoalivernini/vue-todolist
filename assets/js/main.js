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
      ]

    },

    methods: {
      insertInput: function() {
        let newObj = {
          title: this.toDoUtente,
          scope: 'to-do'
        }

        this.toDos.push(newObj);
        console.log(this.toDoUtente);
        console.log(newObj);
      },

    }


}); //Chiusura Vue

//Dobbiamo fare un'array di cose da fare così da avere alcuni esempio
//Dobbiamo dare la possibilità di aggiungere le cose da poter fare
  //Calcolare invio con la tastiera
  //L'inserimento di stringa vuota da disabilitare
  //Far tornare l'input vuoto quando mando il comando per inserire
