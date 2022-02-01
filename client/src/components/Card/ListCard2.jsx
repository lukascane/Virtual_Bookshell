import React from 'react';

function ListCard2() {
  return <div id="listcard" className="book-list">
<div className="info ">
<section className="d-flex col">
    <div className="poster justify-content-center">
    <img src="https://covers.openlibrary.org/b/id/8166951-M.jpg" alt="194x228" className="img-responsive"/>  
    </div>
    <div className="info">
    <section>
      <p>"Title:
      "<span>Lord of the Rings</span></p>
      <p>"Author:
      "<span>J.R.R. Tolkien</span></p>
      <p>"First Published: "
      <span>"1954"</span></p>
      
      <p>"Pages: "
      <span>
        "500"
        "pages"
      </span></p>
    </section>
    <section>
      <div>
        <h4>Plot</h4>
        <p>
          "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, The Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell, by chance, into the hands of the hobbit, Bilbo Baggins.

          From his fastness in the Dark Tower of Mordor, Sauron's power spread far and wide. He gathered all the Great Rings to him, but ever he searched far and wide for the One Ring that would complete his dominion."
        </p>
      </div>
      <div>
      <p>"Subjects: "
      <span>"The Lord of the Rings, Fiction, Ficción, English Fantasy fiction, Ficción fantástica inglesa, Fantasy fiction, Fiction in English, Open Library Staff Picks, Middle Earth (Imaginary place), Fiction, fantasy, epic, Middle earth (imaginary place), fiction, Baggins, frodo (fictitious character), fiction, Gandalf (fictitious character), fiction, British and irish fiction (fictional works by one author), English literature, Frodo Baggins (Fictitious character), Baggins, bilbo (fictitious character), fiction, Fiction, fantasy, general, English language"</span></p>
      </div>
    </section>
    <section>
    <div className="button col text-cente">
      <a href="#" className="btn cardBtn homeBtn btn-sm">List to read</a>
      <a href="#" className="btn cardBtn homeBtn btn-sm">Delete</a>
      <a href="#" className="btn cardBtn homeBtn btn-sm">Shere</a>
      </div>
    </section>
    </div>
</section>
</div>
       
  </div>;
}

export default ListCard2;
