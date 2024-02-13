import React from "react";
import EUnoteProject from '../EUnoteProject';
import Petrinja from '../../assets/Petrinja.jpg';

const KabelOptikaPage = () => {
  return (
    <div className="main_content">
        <h1>NOVI RAZVOJ U PETRINJI KABEL-OPTIKA d.o.o.</h1>
        <h2>Kod projekta: KK.08.2.1.16.0148</h2>
        <h2>Naziv poziva: Podrška razvoju poduzetništva u gradu Petrinji</h2>
        <div className="container">
        <img src={Petrinja} alt="Slika Petrinje." style={{ width: '100%', height: 'auto' }} />
            <p>Nabavom novih roba, Prijavitelj će povećati svoju konkurentnost i održivost poslovanja te proizvodne kapacitete. 
                Nabavlja se mini bager s priključcima te Tandem valjak. Također obuhvaća troškove transporta, montaže i stavljanja u probni rad, te edukacije za rad na siguran način, stručno osposobljavanje i stjecanje novih znanja i vještina djelatnika vezano uz robu koja se nabavlja.</p>
            <div className="box">
                <h3>Informacije o troškovima</h3>
                <p>Ukupni prihvatljivi troškovi (EUR): 209.364,52</p>
                <p>Ukupna bespovratna sredstva (EUR): 177.959,84</p>
            </div>
            <div className="box">
                <h3>Vrijeme provedbe</h3>
                <p>Početak provedbe: NN.NN.NNNN.</p>
                <p>Kraj provedbe: NN.NN.NNNN.</p>
                <p>Trajanje provedbe (mjeseci): 18</p>
            </div>
        </div>
        <EUnoteProject />
    </div>
    );
}
export default KabelOptikaPage;