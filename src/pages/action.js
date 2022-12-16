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
        title="«Alles, was man braucht»"
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
      <style>
        {`body {
              color: #fff !important;
            }`}
      </style>
      <div className="sections_group">
        <div className="entry-content" itemProp="mainContentOfPage">
          <div
            className="section mcb-section action-main-page bg-cover"
            style={{
              paddingTop: '220px',
              paddingBottom: '0px',
              backgroundImage: 'url(https://msk.kinohouse.me/wp-content/uploads/2018/04/main_first_bg.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
            }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center">
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
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  cp-right pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img
                            src="https://msk.kinohouse.me/wp-content/uploads/2018/05/vip-5-new.jpg"
                            alt="vip-5-new"
                            width={600}
                            height={370}
                          />
                        </div>
                        <h2></h2>
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
              backgroundImage: 'url(style/img/bg6.jpeg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
            }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center">
                      <h2>Solutions pour les fêtes d'entreprise</h2>
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
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  cp-right pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/vsesloyi.jpeg" alt="vsesloyi" width={600} height={370} />
                        </div>
                        <h2>«Avec tous les amis»</h2>
                        <div className="price">
                          <span>250</span>
                          <sup className="currency">€</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          Convient à un événement pour 10 personnes maximum.
                          <br />
                          Temps - 3 heures
                          <br />
                          (Grande salle).
                        </p>
                        <p />
                      </div>
                      <div className="plan-inside">
                        C'est aussi disponible:
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
                          style={{ float: 'center' }}
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
                        <h2>«Tout et tout de suite»</h2>
                        <div className="price">
                          <span>340</span>
                          <sup className="currency">€</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          Convient à un événement pour 15 personnes maximum.
                          <br />
                          Temps - 3 heures
                          <br />
                          (Grande salle).
                        </p>
                        <p />
                      </div>
                      <div className="plan-inside">
                        C'est aussi disponible:
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
                          style={{ float: 'center' }}
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
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          Nombre d'invités - jusqu'à 50 personnes.
                          <br />
                          Temps - 3 heures
                          <br />
                          (Rez-de-chaussée: 2 chambres et un salle).
                        </p>
                        <p />
                      </div>
                      <div className="plan-inside">
                        C'est aussi disponible:
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
                          style={{ float: 'center' }}
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
            className="section mcb-section  main_seven "
            id="contacts"
            style={{ paddingTop: '80px', paddingBottom: '0px', backgroundColor: '#2d183a' }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix">
                      <h2>Wie man uns findet?</h2>
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
    </div>
  );
};

export default HomePage;
