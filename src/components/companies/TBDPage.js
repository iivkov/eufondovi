import React from "react";
import Petrinja from '../../assets/Petrinja.jpg';

const TBDPage = () => {
  return (
    <div className="main_content">
        <h1>NOVI RAZVOJ U PETRINJI TBD</h1>
        <h2>Kod projekta: KK.08.2.1.16.TBD</h2>
        <h2>Naziv poziva: Podrška razvoju poduzetništva u gradu Petrinji</h2>
        <div className="container">
        <img src={Petrinja} alt="Slika Petrinje." style={{ width: '100%', height: 'auto' }} />
            <p>TBD...................................................................................................................................</p>
            <div className="box">
                <h3>Informacije o troškovima</h3>
                <p>Ukupni prihvatljivi troškovi (EUR): NNN.NN,NN</p>
                <p>Ukupna bespovratna sredstva (EUR): NNN.NNN,NN</p>
            </div>
            <div className="box">
                <h3>Vrijeme provedbe</h3>
                <p>Početak provedbe: NN.NN.NNNN.</p>
                <p>Kraj provedbe: NN.NN.NNNN.</p>
                <p>Trajanje provedbe (mjeseci): NN</p>
            </div>
        </div>
    </div>
    );
}
export default TBDPage;