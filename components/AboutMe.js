import Image from 'next/image';
import Link from 'next/link';

import LazyImage from './lazyImage';

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me__profile">
        <div className="about-me__image">
          <Image
            alt="Annukka Rajala — profiilikuva"
            src="/assets/profile.png"
            width={200}
            height={214}
            quality={100}
          />
        </div>
        <div>
          <h4>Annukka Rajala</h4>
          <p>Frontend-kehittäjä</p>
        </div>
      </div>
      <div className="about-me__p">
        <p>
          Vuosi oli ehkä 2009, kun päätin koodata omat netti&shy;sivut. Huomasin pian, että
          web-kehitys on koukuttava sekoitus luovaa työtä ja ongelman&shy;ratkaisua. Jatkoin
          netti&shy;sivujen rakentelua, ja koodaaminen alkoi vetää puoleensa eri tavalla kuin muut
          harrastukset. Ura&shy;polkua valitessa web-kehitys tuntui itsestäänselvältä.
        </p>
        <p>
          Opiskelen kolmatta vuotta media&shy;tekniikkaa Jyväskylän ammatti&shy;korkea&shy;koulussa.
          Tavoitteenani on erikoistua frontend-kehittäjäksi, joka selviää myös UI/UX-suunnittelun
          haasteista. Eniten innostun projekteista, joissa pääsen osallistumaan sekä visuaaliseen
          suunnitteluun että koodaamiseen. Vapaa-ajalla todennäköisesti työstän omia projekteja,
          mutta uppoudun mielelläni myös ruoan&shy;laittoon, liikuntaan tai viher&shy;kasvien
          hoitoon.
        </p>
        {/* <p>
          Tässä muutamia tuttuja teknologioita ja työkaluja, joiden parissa olen työskennellyt viime
          aikoina:
        </p>
        <p>yy</p>
        <p>kaa</p>
        <p>koo</p> */}
      </div>
    </div>
  );
}
