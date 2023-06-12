import { Libro } from './libro';

export class Archivio {
  archivio: Array<Libro>;
  constructor(archivio: Array<Libro>) {
    this.archivio = archivio;
  }

  //metodi da applicare su archivio
  filtraLibro(){}

  aggiuntaLibro(nuovoLibro: Libro) {
    this.archivio.push(nuovoLibro);
  }

  rimozioneLibro() {}

  prestitoLibro() {}
}


/*
const archivio = db.filter((el) =>
      (el.titolo + el.autore).toLowerCase().includes(btnInput.value));
*/