import React, { useState } from 'react';

import { PaymentPopup } from '../containers';

export const AdvantagesPage = () => {
  const [dateFirst, setDateFirst] = useState(false);

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
        price="45"
      />
      <div className="sections_group">
        <div className="entry-content" itemProp="mainContentOfPage">
          <div
            className="section mcb-section full-screen  "
            style={{
              paddingTop: '0px',
              paddingBottom: '0px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/bg-party.jpg)',
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
                      <h1 className="main_header" style={{ paddingTop: '180px', minHeight: '50px' }}>
                        En quoi notre Privates Cafe se distingue-t-il
                        <br />
                        des autres cafés?
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <div className="main_fourth-button-wrap">
                        <button
                          className="button main_button fourth_button"
                          onClick={() => setDateFirst(true)}
                        >
                          Book
                        </button>
                      </div>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section full-width  "
            id="about-us"
            style={{ paddingTop: '0px', paddingBottom: '0px', backgroundColor: '' }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{ backgroundColor: '#29033c' }}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <h2 style={{ marginTop: '50px' }}>Nos avantages</h2>
                      <hr
                        style={{
                          width: '100px',
                          marginBottom: '10px',
                          marginTop: 0,
                          border: 0,
                          borderTop: '2px solid #e5097f',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix advantages-big-block"
                style={{
                  padding: '100px',
                  backgroundImage: 'url(style/img/party-2.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Nos avantages</h2>
                      <p style={{ marginTop: '10px' }}></p>
                      <ul className="difference" style={{ listStyleType: 'none' }}>
                        <li>
                          Au cours de nos sept années de travail, nous avons appris ce qui est important pour nos hôtes
                        </li>
                        <li>
                          Depuis 2012, nous avons reçu la visite de plus de 50 000 personnes,
                          <br />
                          dont 3.000 dont visiteurs permanents
                        </li>
                        <li>
                          Nous interrogeons chaque invité et 87% d'entre
                          <br />
                          eux sont prêts à revenir, les 13% restants nous signalent nos erreurs et nous les corrigeons.
                        </li>
                        <p />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix advantages-big-block"
                style={{
                  padding: '100px',
                  backgroundImage: 'url(style/img/party-3.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Pureté</h2>
                      <p style={{ marginTop: '10px' }}></p>
                      <ul className="difference" style={{ listStyleType: 'none' }}>
                        <li>Un nettoyage général est effectué après chaque client.</li>
                        <li>Les couvertures sont toujours propres, fraîches et dans des emballages neufs.</li>
                        <li>Nous utilisons des lampes à ultraviolets pour détruire les bactéries.</li>
                        <li>Chaque chambre dispose de la climatisation pour le confort et la commodité.</li>
                      </ul>
                      <p />
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix advantages-big-block"
                style={{
                  padding: '150px',
                  backgroundImage: 'url(style/img/party-4.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Vie privée</h2>
                      <p style={{ marginTop: '10px' }}></p>
                      <ul className="difference" style={{ listStyleType: 'none' }}>
                        <li>
                          Nous savons à quel point l'intimité est importante lorsque vous vous reposez.
                          <br />
                          C'est pourquoi nous n'avons pas de caméras cachées
                        </li>
                        <li>Nos collaborateurs ne vous dérangeront pas non plus, vous les appelez vous-même</li>
                      </ul>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix advantages-big-block"
                style={{
                  padding: '100px',
                  // backgroundImage: 'url(style/img/party-5.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Avantage</h2>
                      <p style={{ marginTop: '10px' }}></p>
                      <ul className="difference" style={{ listStyleType: 'none' }}>
                        <li>
                          Il n'y a aucune restriction et vous pouvez apporter toutes sortes de nourriture et de boissons.
                        </li>
                        <li>
                          Les clients réguliers reçoivent des cartes de réduction avec des rabais allant de 10% à 25%.
                          <br />
                          Ces cartes incluent également le thé et la fondue gratuits.
                        </li>
                      </ul>
                      <p />
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section    bg-cover"
            style={{
              paddingTop: '50px',
              paddingBottom: '50px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/party-7.jpg)',
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
                      <h2 style={{ marginTop: '50px' }}>Notre équipe</h2>
                      <hr
                        style={{
                          width: '100px',
                          marginBottom: '10px',
                          marginTop: 0,
                          border: 0,
                          borderTop: '2px solid #e5097f',
                        }}
                      />
                      <p>Ces personnes créent votre confort</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/party8.jpg" alt="SAMSUNG CSC" width={300} height={450} />
                        </div>
                        <h2></h2>
                        <h2 style={{ margin: '0 0 5px', fontSize: '30px', lineHeight: '30px' }}>Margarete</h2>
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p className="pricing-box-team plan-header-team subtitle-team">
                          <big>Managerin</big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-third column_pricing_item price-vip pricing-box-team plan-header-team subtitle-team">
                    <div className="pricing-box  pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/p9.jpg" alt="SAMSUNG CSC" width={300} height={450} />
                        </div>
                        <h2></h2>
                        <h2 style={{ margin: '0 0 5px', fontSize: '30px', lineHeight: '30px' }}>Luisa</h2>
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p className="pricing-box-team plan-header-team subtitle-team">
                          <big>Managerin</big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/p10.jpg" alt="SAMSUNG CSC" width={300} height={450} />
                        </div>
                        <h2></h2>
                        <h2 style={{ margin: '0 0 5px', fontSize: '30px', lineHeight: '30px' }}>Helene</h2>
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p className="pricing-box-team plan-header-team subtitle-team">
                          <big>Administrator</big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section    bg-cover"
            id="contacts"
            style={{
              paddingTop: '80px',
              paddingBottom: '40px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/p11.jpg)',
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
                    <div className="column_attr clearfix" style={{}}>
                      <h2>Comment y arriver?</h2>
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

export default AdvantagesPage;
