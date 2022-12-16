import React, { useState } from 'react';

import { PaymentPopup } from '../containers';

const HomePage = () => {
  const [dateFirst, setDateFirst] = useState(false);
  const [dateSecond, setDateSecond] = useState(false);
  const [dateThird, setDateThird] = useState(false);
  const [partyFirst, setPartyFirst] = useState(false);
  const [partySecond, setPartySecond] = useState(false);
  const [partyThird, setPartyThird] = useState(false);

  return (
    <div className="content_wrapper clearfix">
      <style>
        {`body {
              color: #fff !important;
            }`}
      </style>
      <PaymentPopup
        open={dateFirst}
        onClose={() => setDateFirst(false)}
        title="Surprise du rendez-vous VIP"
        hours="3"
        price="25"
      />
      <PaymentPopup
        open={dateSecond}
        onClose={() => setDateSecond(false)}
        title="Rendez-vous VIP «Soirée de l'amour»"
        hours="3"
        price="45"
      />
      <PaymentPopup
        open={dateThird}
        onClose={() => setDateThird(false)}
        title="Rendez-vous VIP «Rendez-vous sous les étoiles»"
        hours="4"
        price="90"
      />
      <PaymentPopup
        open={partyFirst}
        onClose={() => setPartyFirst(false)}
        title="«Tous les amis»"
        hours="3"
        price="250"
      />
      <PaymentPopup
        open={partySecond}
        onClose={() => setPartySecond(false)}
        title="«Tout ce qui est nécessaire»"
        hours="3"
        price="340"
      />
      <PaymentPopup
        open={partyThird}
        onClose={() => setPartyThird(false)}
        title="«Tout et tout de suite»"
        hours="3"
        price="430"
      />
      <div className="sections_group">
        <div className="entry-content" itemProp="mainContentOfPage">
          <div
            className="section mcb-section full-screen   bg-cover"
            style={{
              paddingTop: '0px',
              paddingBottom: '0px',
              backgroundColor: '',
              backgroundImage: 'url(/style/img/main_first_bg.jpeg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
              backgroundAttachment: '',
              backgroundSize: '',
              WebkitBackgroundSize: '',
            }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column show-on-mobile column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <h1 className="main_header" style={{ minHeight: '70px', paddingTop: '120px' }}>
                        Privates Cafe
                      </h1>
                      <div className="main_form_item" onClick={() => setDateFirst(true)}>
                        <button>Book</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one column_column progress column-margin-">
                  <div className="column_attr clearfix align_center" style={{}}>
                    <h1 className="main_header">Privates Cafe</h1>
                    <br />
                    <br />
                    <button className="button main_button" onClick={() => setDateFirst(true)}>
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section mcb-section    bg-cover"
          id="action"
          style={{
            paddingTop: '80px',
            paddingBottom: '80px',
            backgroundColor: '',
            backgroundImage: 'url(/style/img/halls_ny.jpeg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundAttachment: '',
            backgroundSize: '',
            WebkitBackgroundSize: '',
          }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix align_center" style={{}}>
                    <h2>Offres pour un rendez-vous parfait</h2>
                    <hr
                      style={{
                        width: '100px',
                        marginBottom: '10px',
                        marginTop: 0,
                        border: 0,
                        borderTop: '2px solid #e5097f',
                      }}
                    />
                    <p>Nous avons 3 variantes parfaites pour vous:</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one-third column_pricing_item price-vip">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="/style/img/vip-5-new.jpeg" alt="vip-5-new" width={600} height={370} />
                      </div>
                      <h3>
                        Surprise
                        <br />
                        du rendez-vous VIP
                      </h3>
                      <div className="price">
                        <span>25</span>
                        <sup className="currency">€</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          Lors de la réservation d'un rendez-vous VIP
                          <br />
                          En guise de surprise, vous recevrez:
                        </big>
                      </p>
                      <big></big>
                      <p />
                    </div>
                    <div className="plan-inside">
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Décoration romantique de la salle avec des pétales de rose et des bougies;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Présélectionnez votre film ou votre musique préférée;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Dîner pour deux (italien, japonais et chinois, au choix);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Des desserts délicieux: Fondue au chocolat avec des fruits;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Thé ou café (au choix);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Durée : 3 heures.</p>
                      <button className="button main_button fourth_button" onClick={() => setDateFirst(true)}>
                        Book
                      </button>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one-third column_pricing_item price-vip-top">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="style/img/svvip7.jpg" alt="vip-7-new" width={600} height={370} />
                      </div>
                      <h2></h2>
                      <h3>
                        Rendez-vous VIP
                        <br />
                        «Soirée de l'amour»
                      </h3>
                      <div className="price">
                        <span>45</span>
                        <sup className="currency">€</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          Lors de la réservation d'un rendez-vous VIP
                          <br />
                          Pendant une «Soirée de l'amour», vous recevrez
                        </big>
                      </p>
                      <big></big>
                      <p />
                    </div>
                    <div className="plan-inside">
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Décoration romantique de la salle avec des pétales de rose et des bougies;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Présélectionnez votre film ou votre musique préférée;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                       Dîner pour deux (italien, japonais et chinois, au choix);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Des desserts délicieux: Fondue au chocolat avec des fruits;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Thé ou café (au choix);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Une surprise du «Kino Haus»: une bouteille de champagne
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Durée: 3 heures.</p>
                      <button
                        className="button main_button fourth_button"
                        onClick={() => setDateSecond(true)}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one-third column_pricing_item price-vip">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="style/img/svvip15.jpg" alt="vip-15-new" width={600} height={370} />
                      </div>
                      <h2></h2>
                      <h3>
                        Rendez-vous VIP
                        <br />
                        «Rendez-vous sous les étoiles»
                      </h3>
                      <div className="price">
                        <span>90</span>
                        <sup className="currency">€</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          Lors de la réservation d'un rendez-vous VIP
                          <br />
                          «Rendez-vous dans les étoiles», vous obtenez
                        </big>
                      </p>
                      <big></big>
                      <p />
                    </div>
                    <div className="plan-inside">
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Décoration méga-romantique du grande salle avec pétales de roses, bougies, boules (20 pièces)
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Dîner pour deux (italien, japonais et chinois, au choix);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px' }}>Une séance de photos à la fin du rendez-vous;</p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Bouquet de fleurs pour la femme / plat préféré pour l'homme;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Des desserts délicieux: Fondue au chocolat avec des fruits;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Thé ou café (au choix);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Surprise de «Privates Cafe» : une bouteille de champagne «Mondoro» ou de vin (au choix);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Durée: 4 heures;</p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Présélectionnez votre film ou votre musique préférée;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Un cadeau de «Kino Haus» - «Croisière sur le fleuve»
                      </p>
                      <button className="button main_button fourth_button" onClick={() => setDateThird(true)}>
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section mcb-section    bg-cover"
          style={{
            paddingTop: '80px',
            paddingBottom: '80px',
            backgroundColor: '',
            backgroundImage: 'url(/style/img/bg6.jpeg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundAttachment: '',
            backgroundSize: '',
            WebkitBackgroundSize: '',
          }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix align_center" style={{}}>
                    <h2>Solutions de retraite avec l'entreprise</h2>
                    <hr
                      style={{
                        width: '100px',
                        marginBottom: '10px',
                        marginTop: 0,
                        border: 0,
                        borderTop: '2px solid #e5097f',
                      }}
                    />
                    <p>3 options pour des fêtes clés en main</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one-third column_pricing_item price-vip">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="/style/img/vsesloyi.jpeg" alt="vsesloyi" width={600} height={370} />
                      </div>
                      <h2>«Tous les amis»</h2>
                        <div className="price">
                          <span>90</span>
                          <sup className="currency">€</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p style={{ color: '#ffffff' }}>
                          <big>
                            Conçu pour une entreprise comptant jusqu'à 10 personnes.
                            <br />
                            Pendant - 3 heures
                            <br />
                            (Grande salle).
                          </big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                      <div className="plan-inside">
                        Nous avons aussi:
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Karaoke;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Regarder des clips musicaux et des films;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>PlayStation;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Jeux de société (grand choix);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          1 produit chaque goût; thé/café pour les invités
                        </p>
                        <br />
                        <button
                          className="button main_button fourth_button"
                          onClick={() => setPartyFirst(true)}
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-third column_pricing_item price-vip-top">
                    <div className="pricing-box  cp-right pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/vsechtonado.jpeg" alt="vsechtonado" width={600} height={370} />
                        </div>
                        <h2>«Tout ce qui est nécessaire»</h2>
                        <div className="price">
                          <span>340</span>
                          <sup className="currency">€</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p style={{ color: '#ffffff' }}>
                          <big>
                            Conçu pour une entreprise comptant jusqu'à 15 personnes.
                            <br />
                            Pendant - 3 heures
                            <br />
                            (Grande salle).
                          </big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                      <div className="plan-inside">
                        Nous avons aussi:
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Karaoke;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Regarder des clips musicaux et des films;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>PlayStation;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Jeux de société (grand choix);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          2 produits chaque goût; thé/café pour les invités
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Snacks (chips/popcorn dans l'assortiment) et coca-cola illimité;
                        </p>
                        <br />
                        <button
                          className="button main_button fourth_button"
                          onClick={() => setPartySecond(true)}
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  cp-right pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/vseisrazu.jpeg" alt="vseisrazu" width={600} height={370} />
                        </div>
                        <h2>«Tout et tout de suite»</h2>
                        <div className="price">
                          <span>430</span>
                          <sup className="currency">€</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p style={{ color: '#ffffff' }}>
                          <big>
                            Nombre d'invités - jusqu'à 50 personnes.
                            <br />
                            Pendant - 3 heures
                            <br />
                            (Rez-de-chaussée: 2 chambres et salle).
                          </big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                      <div className="plan-inside">
                        Nous avons aussi:
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Karaoke;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Regarder des clips musicaux et des films;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>PlayStation;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Jeux de société (grand choix);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Thé/café pour les invités;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Snacks (chips/popcorn dans l'assortiment) et coca-cola illimité;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Boules de décoration (15 pièces);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Gâteau d'anniversaire;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Séance photo;</p>
                        <br />
                        <button
                          className="button main_button fourth_button"
                          onClick={() => setPartyThird(true)}
                        >
                          Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section mcb-section  main_six "
          style={{ paddingTop: '40px', paddingBottom: '0px', backgroundColor: '#361841' }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix" style={{}}>
                    <center>
                      <h2>Commentaires de nos visiteurs</h2>
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one-second column_icon_box ">
                  <div className="icon_box icon_position_left no_border">
                    <div className="image_wrapper">
                      <img
                        src="/style/img/1.png"
                        className="scale-with-grid"
                        alt={1}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="desc_wrapper">
                      <h4 className="title">Louisa Bäcker</h4>
                      <div className="desc">
                        Hier, nous nous sommes réunis à l'Anti-Cinéma pour regarder un film que nous avons réalisé nous-mêmes. Nous en sommes très contents ! Nous étions 11, réunis dans la 9. Salle de la rue Rusakovskaya. L'écran est lumineux, le son est bon. Je vois maintenant qu'il n'y avait pas de meilleur endroit pour cette réunion.Nous reviendrons certainement ! Aujourd'hui, nous visitons le Privates Cafe avec une grande entreprise:)
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one-second column_icon_box ">
                  <div className="icon_box icon_position_left no_border">
                    <div className="image_wrapper">
                      <img
                        src="/style/img/2.png"
                        className="scale-with-grid"
                        alt={2}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="desc_wrapper">
                      <h4 className="title">Sebastian Fuhrmann</h4>
                      <div className="desc">
                        Nous sommes venus ici une fois avec une fille. Si vous cherchez un endroit agréable pour regarder tranquillement vos films préférés sur des chaises/canapés confortables et boire votre cocktail préféré, vous êtes au bon endroit. Nous avons aussi bien dormi. Le seul inconvénient est que le prépaiement peut être effectué par une carte. Remboursement expire dans les 24 heures suivant une visite personnelle.
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one-second column_icon_box ">
                  <div className="icon_box icon_position_left no_border">
                    <div className="image_wrapper">
                      <img
                        src="/style/img/3.png"
                        className="scale-with-grid"
                        alt={3}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="desc_wrapper">
                      <h4 className="title">Ella Hofer</h4>
                      <div className="desc">
                        J'ai fêté mon anniversaire et j'étais très heureuse ! L'ambiance était excellente, la salle était propre et confortable. Les coûts correspondent à la qualité. Merci beaucoup à Margaret pour tout !  Mon seul souhait est d'élargir le choix de boissons à un prix abordable) Bonne année!
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one-second column_icon_box ">
                  <div className="icon_box icon_position_left no_border">
                    <div className="image_wrapper">
                      <img
                        src="/style/img/4.png"
                        className="scale-with-grid"
                        alt={4}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="desc_wrapper">
                      <h4 className="title">Nikolas Meinhardt</h4>
                      <div className="desc">
                        Bonjour, je m'appelle Nikolas et nous sommes allés au cinéma avec une fille. Nous voulions laisser un commentaire sur cet endroit ! Nous avons été très bien accueillis et conduits dans notre chambre. C'est très confortable. De nombreux oreillers et une couverture, un canapé très doux et confortable, un beau tapis sont disponibles. L'endroit est pratique pour projeter des films. Les images claires du projecteur et l'excellent son des enceintes transmettent parfaitement toute l'action du film. En effet, il y a beaucoup de moments intéressants et agréables qui ne laissent personne indifférent. Merci à toutes les personnes qui travaillent dans ce cinéma, vous faites un excellent travail, nous reviendrons plus d'une fois!
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section mcb-section  main_seven "
          id="contacts"
          style={{ paddingTop: '80px', paddingBottom: '0px', backgroundColor: '#2d183a' }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix" style={{}}>
                    <h2>Wie kommen wir dahin?</h2>
                    <div className="footer-impressum">
                      <p>
                          Contact <br />
                          <br />
                          Pour plus d'informations sur l'utilisation du Privates Cafe, suivez ce lien et cliquez également sur le bouton «Chat» dans le coin inférieur droit.
                          <br />
                          <br /> Rechtliche und behordliche Anfragen nehmen wir per Post, per Fax unter +33745906110
                          <br /> Nous acceptons les demandes légales et officielles par courrier et par fax au +33745906110.
                                 par téléphone au +33745906110. Notre adresse électronique générale est kontakt@privatescafe.com et nous pouvons également être contactés au numéro  de téléphone ci-dessus. Pour plus d'informations sur l'utilisation de Privates Cafe, veuillez suivre le lien ci-dessus  ou cliquer sur «Chat». 
                        </p>
                      </div>
                      <div className="main_seven-flex">
                        <div className="main_seven-item adress_item">
                          <div className="adress-wrap">
                            <p className="main_seven-phone">
                              <a className="roistat-phone" href="tel:74996497094">
                                +7 (499) 649-70-94
                              </a>
                              <br />
                            </p>
                            <ul>
                              <li>
                                <span></span> 12:00 - 06:00
                              </li>
                              <li>
                                <span>Adressen: </span>
                                <ul className="contacts-list-inner">
                                  <li>
                                    <span>4 Rue de Ventadour, 75001 Paris</span>
                                  </li>
								  <li>
                                    <span>108 Rue d'Alésia, 75014 Paris</span>
                                  </li>
                                  <li>
                                    <span>1 La Canebière, 13001 Marseille</span>
                                  </li>
                                  <li>
                                    <span>6 Pl. Carnot, 69002 Lyon</span>
                                  </li>
                                  <li>
                                    <span>132 Av. de Muret, 31300 Toulouse</span>
                                  </li>
                                  <li>
                                    <span>30 Rue Vernier, 06000 Nice</span>
                                  </li>
                                  <li>
                                    <span>21 Bd Princesse Charlotte, 98000 Monaco</span>
                                  </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section the_content no_content" />
        <div className="section section-page-footer">
          <div className="section_wrapper clearfix">
            <div className="column one page-pager"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
