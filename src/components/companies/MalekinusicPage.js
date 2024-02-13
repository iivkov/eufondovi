import React from "react";
import EUnoteProject from '../EUnoteProject';
import Petrinja from '../../assets/Petrinja.jpg';

const MalekinusicPage = () => {
  return (
    <div className="main_content">
        <h1>NOVI RAZVOJ U PETRINJI MALEKINUŠIĆ d.o.o.</h1>
        <h2>Kod projekta: KK.08.2.1.16.0142</h2>
        <h2>Naziv poziva: Podrška razvoju poduzetništva u gradu Petrinji</h2>
        <div className="container">
        <img src={Petrinja} alt="Slika Petrinje." style={{ width: '100%', height: 'auto' }} />
            <p>Svrha ovog projektnog prijedloga je održiva fizička, socijalna i gospodarska regeneracija grada Petrinje s ciljem smanjenja socijalnih nejednakosti, isključenosti i siromaštva, što bi se ostvarilo jer Prijavitelj ovim projektnim prijedlogom nabavlja novu robu i/ili uslugu u svrhu povećanja svoje konkurentnosti i produktivnosti rada. 
                Prijavitelj bi završetkom projekta stvorio pozitivan efekt na lokalnu zajednicu, jer bi svoje djelovanje ostvario na nova mikro i makro tržišta. 
                Prijavitelj će otvoriti nova tržišta i povećat će mu se prihod. 
                Projekt je usmjeren na djelatnike Prijavitelja, kupce i dobavljače kao ciljne skupine projekta, ali i sve građane Republike Hrvatske i to upravo kroz očuvanje postojećih radnih mjesta i otvaranje novih. 
                Projekt vodi računa o zaštiti okoliša.</p>
            <div className="box">
                <h3>Informacije o troškovima</h3>
                <p>Ukupni prihvatljivi troškovi (EUR): 207.850,55</p>
                <p>Ukupna bespovratna sredstva (EUR): 176.672,97</p>
            </div>
            <div className="box">
                <h3>Vrijeme provedbe</h3>
                <p>Početak provedbe: 22.04.2022.</p>
                <p>Kraj provedbe: 19.10.2023.</p>
                <p>Trajanje provedbe (mjeseci): 18</p>
            </div>
        </div>
        <EUnoteProject />
    </div>
    );
}
export default MalekinusicPage;