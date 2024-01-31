import React from "react";
import Petrinja from '../../assets/Petrinja.jpg';

const StrojnaMehanikaPage = () => {
  return (
    <div className="main_content">
        <h1>NOVI RAZVOJ U PETRINJI STROJNA MEHANIKA d.o.o.</h1>
        <h2>Kod projekta: KK.08.2.1.16.0133</h2>
        <h2>Naziv poziva: Podrška razvoju poduzetništva u gradu Petrinji</h2>
        <div className="container">
        <img src={Petrinja} alt="Slika Petrinje." style={{ width: '100%', height: 'auto' }} />
            <p>Aktivnosti projekta su nabava novih roba kojima Prijavitelj planira povećati svoju konkurentnost te otvoriti nova tržišta. 
                Nabavlja se mini damper te se ulaže u marketing i promociju proizvoda, odnosno planiraju se i edukacije djelatnika povezane sa aktivnostima projekta.</p>
            <div className="box">
                <h3>Informacije o troškovima</h3>
                <p>Ukupni prihvatljivi troškovi (EUR): 207.246,00</p>
                <p>Ukupna bespovratna sredstva (EUR): 176.159,10</p>
            </div>
            <div className="box">
                <h3>Vrijeme provedbe</h3>
                <p>Početak provedbe: NN.NN.NNNN.</p>
                <p>Kraj provedbe: NN.NN.NNNN.</p>
                <p>Trajanje provedbe (mjeseci): 18</p>
            </div>
        </div>
    </div>
    );
}
export default StrojnaMehanikaPage;