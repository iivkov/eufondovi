import React from "react";
import EUnoteProject from '../EUnoteProject';
import Petrinja from '../../assets/Petrinja.jpg';

const PondtPage = () => {
  return (
    <div className="main_content">
        <EUnoteProject />
        <h1>NOVI RAZVOJ U PETRINJI PONDT d.o.o.</h1>
        <h2>Kod projekta: KK.08.2.1.16.0201</h2>
        <h2>Naziv poziva: Podrška razvoju poduzetništva u gradu Petrinji</h2>
        <div className="container">
        <img src={Petrinja} alt="Slika Petrinje." style={{ width: '100%', height: 'auto' }} />
            <p>Cilj ovog projekta je održiva fizička, socijalna i gospodarska regeneracija grada Petrinje, s ciljem smanjenja socijalnih nejednakosti, isključenosti i siromaštva. 
                Nabavom novih roba i usluga, korisnik će povećati svoju konkurentnost i održivost poslovanja i proizvodne kapacitete. Prijavitelj će otvoriti nova tržišta i povećat će mu se prihod. 
                U sklopu aktivnosti ulaganje u materijalnu imovinu nabavlja se ultrazvučni uređaj za ispitivanje zavarenih spojeva, automatski procesor za razvijanje radiograma mobile, RTG uređaj za ispitivanje zavarenih spojeva, uređaj za vizualno ispitivanje zavarenih spojeva, tračna pila za metal. 
                Provedbom aktivnosti ulaganja Korisnik će povećati svoje kapacitete za pružanje usluga, očuvat će se postojeća radna mjesta,otvorit će se nova radna mjesta, povećat će se prihod Prijavitelja, konkurentnost na postojećem i novom mikro i makro tržištu. 
                Kroz aktivnost Marketing i promocija proizvoda i usluga Prijavitelj će povećati svoju vidljivost na mikro i makro tržištu, kao i na društvenim mrežama, a provedbom aktivnosti edukacije i stručnog osposobljavanja djelatnici Korisnika će steći nova znanja povezana s korištenjem novih roba koje se nabavljaju.</p>
            <div className="box">
                <h3>Informacije o troškovima</h3>
                <p>Ukupna vrijednost projekta (EUR): 273.093,32</p>
                <p>Ukupna bespovratna sredstva (EUR): 185.703,46</p>
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
export default PondtPage;