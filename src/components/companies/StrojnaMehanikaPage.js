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
                <p>Ukupna bespovratna sredstva EU (EUR): 176.159,10</p>
                <p>Ukupna vrijednost projekta (EUR): 261.862,38</p>
            </div>
            <div className="box">
                <h3>Vrijeme provedbe</h3>
                <p>Početak provedbe: 15.04.2022.</p>
                <p>Kraj provedbe: 12.12.2023.</p>
                <p>Trajanje provedbe (mjeseci): 20</p>
            </div>
        </div>
        <div className="bottom-border" />
        <div className="container">
            <p>Prijavitelj, gospodarski subjekt STROJNA MEHANIKA d.o.o. za trgovinu i usluge; OIB: 86346142181; sa sjedištem na adresi: Horvati (Grad Zagreb), 
                Palijaši 18 ovim projektnim prijedlogom želi u provedbi projekta provesti niz aktivnosti, kojima bi nabavio nove robe i/ili usluge kako slijedi:</p>
            <div className="activity_box">
                <h3>AKTIVNOST 1. i 2 Ulaganje u materijalnu imovinu, u ovoj aktivnosti se nabavlja:</h3>
                <p>- Mini damper nosivosti do 3 tone, 1 kom</p>
                <p>- Mini damper nosivosti do 6 tona, 1 kom</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave Prijavitelj će povećati svoje
                    kapacitete za pružanje usluga, očuvat će se postojeća radna mjesta, otvorit će se nova radna mjesta,
                    povećat će se prihod Prijavitelja, konkurentnost na postojećem i novom mikro i makro tržištu. Djelatnici
                    Prijavitelja će steći nova znanja povezana s korištenjem novih roba i/ili usluga koje se nabavljaju. Složeni
                    postupak provedbe svih nabava obavit će vanjski stručnjak, a proračunom je određena cijena njegovog
                    rada.</p>
            </div>
            <div className="activity_box">
                <h3>AKTIVNOST: 3. Marketing i promocija proizvoda i usluga; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi izrade mrežne stranice</p>
                <p>- Troškovi izrade stranice na FACEBOOK-u</p>
                <p>- Troškovi reklamnih majica kratkih rukava</p>
                <p>- Troškovi reklamnih kapa</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave Prijavitelj će povećati svoju
                    vidljivost na mikro i makro tržištu, kao i na društvenim mrežama. Djelatnici Prijavitelja će steći nova
                    znanja povezana s korištenjem novih roba i/ili usluga koje se nabavljaju. Promidžbeni materijal dijelit
                    će se poslovnim partnerima. Složeni postupak provedbe svih nabava obavit će vanjski stručnjak, a
                    proračunom je određena cijena njegovog rada.</p>
            </div>
            <div className="activity_box">
                <h3>AKTIVNOST: 4. Edukacije, stručno osposobljavanje i stjecanje novih znanja zaposlenika; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi stjecanja znanja iz područja uvođenja novih proizvodnih procesa</p>
                <p>- Troškovi stjecanja znanja iz područja organizacije poslovanja</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave djelatnici Prijavitelja će steći
                    nova stručna znanja i biti u prilici rada sa novim proizvodnim procesima i organizacijom poslovanja, što
                    do završetka ovog projekta nije bio slučaj. Složeni postupak provedbe svih nabava obavit će vanjski
                    stručnjak, a proračunom je određena cijena njegovog rada.</p>
            </div>
            <div className="activity_box">
                <h3>AKTIVNOST: 5. Prijava na Poziv; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi usluga pripreme projektnog prijedloga (vanjski stručnjak)</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave članovi projektnog tima će
                    steći nova stručna. Složeni postupak provedbe svih nabava obavit će vanjski stručnjak, a proračunom je
                    određena cijena njegovog rada.</p>
            </div>
            <div className="activity_box">
                <h3>AKTIVNOST: 6. Provedba postupka nabave za potrebe projekta; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi povezani s provedbom postupka nabave za potrebe projekta (vanjski stručnjak)</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave članovi projektnog tima će
                    steći nova stručna. Složeni postupak provedbe svih nabava obavit će vanjski stručnjak, a proračunom je
                    određena cijena njegovog rada.</p>
            </div>
            <div className="activity_box">
                <h3>AKTIVNOST: 7. Promicanje horizontalnih načela; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi vezani uz aktivnosti promicanja horizontalnih načela</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave djelatnici Prijavitelja će steći
                    nova stručna povezana s ranjivim skupinama društva. Složeni postupak provedbe svih nabava obavit će
                    vanjski stručnjak, a proračunom je određena cijena njegovog rada.</p>
            </div>
            <div className="activity_box">
                <h3>AKTIVNOST: 8. Upravljanje projektom; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Troškovi usluga za upravljanje projektom (vanjski stručnjak)</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave članovi projektnog tima će
                    steći nova stručna. Složeni postupak provedbe svih nabava obavit će vanjski stručnjak, a proračunom je
                    određena cijena njegovog rada.</p>
            </div>
            <div className="activity_box">
                <h3>AKTIVNOST: 9. Promidžba i vidljivost; u ovoj aktivnosti se nabavlja:</h3>
                <p>- Informiranje i vidljivost</p>
                <p>OPIS: planirana je nabava novih roba i/ili usluga. Ostvarivanjem te nabave Prijavitelj će povećati svoju
                    vidljivost na mikro i makro tržištu, kao i na društvenim mrežama. Djelatnici Prijavitelja će steći nova
                    znanja povezana s korištenjem novih roba i/ili usluga koje se nabavljaju. Promidžbeni materijal dijelit
                    će se poslovnim partnerima. Složeni postupak provedbe svih nabava obavit će vanjski stručnjak, a
                    proračunom je određena cijena njegovog rada.</p>
            </div>
            <div className="activity_box">
                <h3>Nova tržišta:</h3>
                <p>MIKRO TRŽIŠTE: grad Petrinja i njegova naselja.</p>
                <p>MAKRO TRŽIŠTE: ŽUPANIJA - III. SISAČKO-MOSLAVAČKA; ŽUPANIJA - IV. KARLOVAČKA; ŽUPANIJA - I. ZAGREBAČKA; ŽUPANIJA - XXI. GRAD ZAGREB.</p>
                <p>IZVOZ: Prijavitelj je u referentnoj 2021. god, ostvario izvoz roba i/ili usluga u iznosu od: 1.842.948,00 kn.</p>
            </div>
        </div>
        <div className="container" id="environment_container">
            <div className="activity_box">
                <p>Prijavitelj će tijekom provedbe projektnog prijedloga i nakon njega, voditi računa o utjecaju projekta na okoliš, i to:</p>
            </div>
            <div className="activity_box">
                <h3>1. utjecaj na ZRAK:</h3>
                <p>- tijekom provedbe: 2 (veoma mali utjecaj)</p>
                <p>- nakon provedbe: 2 (veoma mali utjecaj);</p>
                <p>OPIS: doći će do povećanja onečišćenja zraka ispušnim plinovima zbog povećanja poslova koje
                    Prijavitelj izvodi. Novim nabavama će se smanjiti negativan utjecaj projekta na ZRAK.</p>
            </div>
            <div className="activity_box">
                <h3>2. utjecaj na TLO:</h3>
                <p>- tijekom provedbe: 2 (veoma mali utjecaj),</p>
                <p>- nakon provedbe: 3 (mali utjecaj);</p>
                <p>OPIS: doći će do povećanja onečišćenja tla zbog tehničkih voda koje nastaju tijekom rada i to radi
                    povećanja poslova koje Prijavitelj izvodi. Novim nabavama će se smanjiti negativan utjecaj projekta na TLO.</p>
            </div>
            <div className="activity_box">
                <h3>3. utjecaj na VODA:</h3>
                <p>- tijekom provedbe: 2 (veoma mali utjecaj),</p>
                <p>- nakon provedbe: 2 (veoma mali utjecaj);</p>
                <p>OPIS: doći će do gotovo nikakvoga ili izrazito malenoga onečišćenja podzemnih voda koje nastaju
                    tijekom rada i to radi povećanja poslova koje Prijavitelj izvodi. Novim nabavama će se smanjiti negativan
                    utjecaj projekta na VODA.</p>
            </div>
            <div className="activity_box">
                <h3>4. utjecaj na KULTURNA BAŠTINA:</h3>
                <p>- tijekom provedbe: 0 (nema utjecaja),</p>
                <p>- nakon provedbe: 0 (nema utjecaja);</p>
                <p>OPIS: ne će doći do bilo kakvog negativnog utjecaja rada i to radi povećanja poslova koje Prijavitelj
                    izvodi. Novim nabavama će se smanjiti negativan utjecaj projekta na KULTURNA BAŠTINA.</p>
            </div>
            <div className="activity_box">
                <h3>5. utjecaj na OTPAD:</h3>
                <p>- tijekom provedbe: 2 (veoma mali utjecaj),</p>
                <p>- nakon provedbe: 2 (veoma mali utjecaj);</p>
                <p>OPIS: doći će do povećanja stvaranja otpada koji će nastati tijekom rada i to radi povećanja poslova koje
                    Prijavitelj izvodi. Svakodnevno će se otpad selektirati i odlagati na za to predviđeno odlagalište. Novim
                    nabavama će se smanjiti negativan utjecaj projekta na OTPAD.</p>
            </div>
            <div className="activity_box">
                <h3>6. utjecaj na ZDRAVLJE:</h3>
                <p>- tijekom provedbe: 1 (zanemarivi utjecaj),</p>
                <p>- nakon provedbe: 1 (zanemarivi utjecaj);</p>
                <p>OPIS: neće doći do povećanja negativnog utjecaja na zdravlje ljudi tijekom rada i to radi povećanja
                    poslova koje Prijavitelj izvodi. Novim nabavama će se smanjiti negativan utjecaj projekta na ZDRAVLJE.</p>
            </div>
        </div>

        <EUnoteProject ime_tvrtke={ime_tvrtke}/>
    </div>
    );
}
export default StrojnaMehanikaPage;