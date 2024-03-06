import React from "react";
import EUnoteProject from '../EUnoteProject';
import Petrinja from '../../assets/Petrinja.jpg';

const StrojnaMehanikaPage = () => {
    const ime_tvrtke = "STROJNA MEHANIKA d.o.o.";

  return (
    <div className="main_content">
        <EUnoteProject ime_tvrtke={ime_tvrtke}/>
        <h1>NOVI RAZVOJ U PETRINJI STROJNA MEHANIKA d.o.o.</h1>
        <h2>Kod projekta: KK.08.2.1.16.0133</h2>
        <h2>Naziv poziva: Podrška razvoju poduzetništva u gradu Petrinji</h2>
        <div className="container">
        <img src={Petrinja} alt="Slika Petrinje." style={{ width: '100%', height: 'auto' }} />
            <p>Cilj ovog projekta je održiva fizička, socijalna i gospodarska regeneracija grada Petrinje, s ciljem smanjenja socijalnih nejednakosti, isključenosti i siromaštva. 
                Nabavom novih roba i/ili usluga, Prijavitelj će povećati svoju: konkurentnost i održivost poslovanja i proizvodne kapacitete.
                Prijavitelj će otvoriti nova tržišta i povećat će mu se prihod. 
                Projekt je usmjeren na djelatnike Prijavitelja, kupce i dobavljače kao ciljne skupine projekta, ali i sve građane Republike Hrvatske i to upravo kroz očuvanje postojećih radnih mjesta i otvaranje novih. 
                Projekt vodi računa o zaštiti okoliša.</p>
            <div className="box">
                <h3>Informacije o troškovima</h3>
                <p>Ukupni prihvatljivi troškovi (EUR): 207.246,00</p>
                <p>Ukupna bespovratna sredstva (EUR): 176.159,10</p>
                <p>Ukupna vrijednost projekta (EUR): 261.862,38</p>
            </div>
            <div className="box">
                <h3>Vrijeme provedbe</h3>
                <p>Početak provedbe: 15.04.2022.</p>
                <p>Kraj provedbe: 12.12.2023.</p>
                <p>Trajanje provedbe (mjeseci): 20</p>
            </div>
        </div>
        <EUnoteProject ime_tvrtke={ime_tvrtke}/>
    </div>
    );
}
export default StrojnaMehanikaPage;