/*
Abbiamo un array di alimenti.
Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
Consegna:
Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell’inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while   */

const food = [
    'Arance',
    'Meloni',
    'Pomodori',
    'Olive',
    'Succo',
    'Latte',
];

const list =  document.querySelector('ul');
let foodList = '';

for(i = 0; i < food.length; i++){
    foodList = `<li>${food[i]}</li>`;

    list.innerHTML += foodList;
}