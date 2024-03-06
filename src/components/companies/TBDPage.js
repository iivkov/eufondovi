import React from "react";
import EUnoteProject from '../EUnoteProject';
import Petrinja from '../../assets/Petrinja.jpg';

const TBDPage = () => {
    const ime_tvrtke = "TBD";

  return (
    <div className="main_content">
        <EUnoteProject ime_tvrtke={ime_tvrtke}/>
        <h1>NOVI RAZVOJ U PETRINJI TBD</h1>
        <h2>Kod projekta: KK.08.2.1.16.TBD</h2>
        <h2>Naziv poziva: Podrška razvoju poduzetništva u gradu Petrinji</h2>
        <div className="container">
        <img src={Petrinja} alt="Slika Petrinje." style={{ width: '100%', height: 'auto' }} />
            <p>TBD...................................................................................................................................</p>
            <div className="box">
                <h3>Informacije o troškovima</h3>
                <p>Ukupni prihvatljivi troškovi (EUR): NNN.NNN,NN</p>
                <p>Ukupna bespovratna sredstva (EUR): NNN.NNN,NN</p>
                <p>Ukupna vrijednost projekta (EUR): NNN.NNN,NN</p>
            </div>
            <div className="box">
                <h3>Vrijeme provedbe</h3>
                <p>Početak provedbe: NN.NN.NNNN.</p>
                <p>Kraj provedbe: NN.NN.NNNN.</p>
                <p>Trajanje provedbe (mjeseci): NN</p>
            </div>
        </div>
        <EUnoteProject ime_tvrtke={ime_tvrtke}/>
    </div>
    );
}
export default TBDPage;