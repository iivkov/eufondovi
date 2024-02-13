import React from "react";
import EUnoteProject from '../EUnoteProject';
import Petrinja from '../../assets/Petrinja.jpg';

const MedoPage = () => {
  return (
    <div className="main_content">
        <h1>NOVI RAZVOJ U PETRINJI MEDO GRUPA d.o.o.</h1>
        <h2>Kod projekta: KK.08.2.1.16.0147</h2>
        <h2>Naziv poziva: Podrška razvoju poduzetništva u gradu Petrinji</h2>
        <div className="container">
        <img src={Petrinja} alt="Slika Petrinje." style={{ width: '100%', height: 'auto' }} />
        <p>Cilj ovog projekta je održiva fizička, socijalna i gospodarska regeneracija grada Petrinje, s ciljem smanjenja socijalnih nejednakosti, isključenosti i siromaštva. 
                Nabavom novih roba i/ili usluga, Prijavitelj će povećati svoju konkurentnost i održivost poslovanja, proizvodne kapacitete te otvoriti nova tržišta. 
                Glavna aktivnost projekta odnosi se na ulaganje u materijalnu imovinu u sklopu koje se nabavlja mini bager s priključcima, tandem valjak. 
                Ostvarivanjem te nabave Prijavitelj će povećati svoje kapacitete za pružanje usluga, očuvat će se postojeća radna mjesta, otvorit će se nova radna mjesta, povećat će se prihod Prijavitelja, konkurentnost na postojećem i novom mikro i makro tržištu. 
                Djelatnici tvrtke će steći nova znanja povezana s korištenjem novih roba koje se nabavljaju.</p>
            <div className="box">
                <h3>Informacije o troškovima</h3>
                <p>Ukupni prihvatljivi troškovi (EUR): 212.549,87</p>
                <p>Ukupna bespovratna sredstva (EUR): 180.667,39</p>
            </div>
            <div className="box">
                <h3>Vrijeme provedbe</h3>
                <p>Početak provedbe: 21.04.2022.</p>
                <p>Kraj provedbe: 19.10.2023.</p>
                <p>Trajanje provedbe (mjeseci): 18</p>
            </div>
        </div>
        <EUnoteProject />
    </div>
    );
}
export default MedoPage;