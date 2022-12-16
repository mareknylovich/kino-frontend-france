import React, { useState } from 'react';

import { PaymentPopup } from '../containers';

export const PartyPage = () => {
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
        open={partyFirst}
        onClose={() => setPartyFirst(false)}
        title="«Tous les amis»"
        hours="3"
        price="140"
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
            className="section mcb-section full-screen  "
            style={{
              paddingTop: '0px',
              paddingBottom: '0px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/pbg.jpg)',
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
                        Location d'une salle de cinéma pour groupe humain
                      </h1>
                      <p style={{ fontWeight: 700 }}>Films, karaoké, jeux rien que pour vous et vos amis</p>
                      <p style={{ fontWeight: 700 }}>
                        Vous pensez à l'endroit où vous pourrez fêter votre anniversaire, organiser une fête d'entreprise ou vous amuser avec vos amis? Louez une salle de cinéma! 12 salles sont à disposition pour des groupes jusqu'à 10 personnes et des grands groupes jusqu'à 50 invités.
                        <br />
                        Dans la «Privates Cafe», il n'y a pas de restrictions: Regarder des films à plein volume, chanter sans gêne, danser ou jouer avec une musique légère. Une bonne insonorisation vous permet de crier du fond du cœur et la climatisation assurent une température confortable pour les activités de plein air.
                      </p>
                      <br />
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
              </div>
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h4 style={{ marginBottom: '15px' }}>
                        Qu'obtenez-vous lorsque
                        <br />
                        vous visitez notre Privates Cafe?
                      </h4>
                      <ul style={{ color: '#ffffff', fontSize: '18px', lineHeight: '18px', fontWeight: 700 }}>
                        <li>La salle est réservée à votre groupe</li>
                        <li>Cuisine de restaurant et boissons de créateurs</li>
                        <li>La capacité de chanter au karaoké sans être timide</li>
                        <li>Un grand choix de films pour tous les goûts</li>
                        <li>Et enfin, une atmosphère de plaisir et de fête</li>
                      </ul>
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h3 style={{ marginBottom: '15px' }}>
                        Célébrez la fête
                        <br />
                        <span style={{ color: '#e5097f' }}>la plus insolite</span>
                      </h3>
                      <div className="main_fourth-button-wrap">
                        <p>
                          Nous garantissons
                          <br />
                          Confidentialité garantie
                        </p>
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
              paddingBottom: '40px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/pabg.jpg)',
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
                      <h2>
                        Location d'une salle de cinéma:
                        <br />
                        Un jour de fête selon son propre scénario
                      </h2>
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
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/paicon.png"
                          className="scale-with-grid"
                          alt="icon6"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          Dans le Privates Cafe, il est pratique de planifier une réunion d'une grande entreprise.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/paicon2.png"
                          className="scale-with-grid"
                          alt="icon2"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          Chaque chambre est décorée selon un style unique. Vous pouvez le décorer vous-même avec des ballons, des panneaux ou faire appel à notre aide.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/icon3.png"
                          className="scale-with-grid"
                          alt="icon3"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          Toutes les grandes salles sont équipées de karaoké et de plusieurs microphones. La base de données des chansons contient des milliers de chansons Vous pouvez également apporter vos propres chansons.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/paicon4.png"
                          className="scale-with-grid"
                          alt="icon4"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          Il n'est pas illégal d'apporter sa propre nourriture ou ses propres boissons. Sur demande, nous pouvons organiser la livraison depuis des restaurants et des cafés situés à proximité.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/paicon5.png"
                          className="scale-with-grid"
                          alt="icon5"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          Si vous fêtez votre anniversaire dans un cinéma, vous bénéficiez d'une réduction sur votre loyer égale à votre âge. Par exemple, si vous fêtez votre 30e anniversaire, la réduction sera de 30 %.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section full-width  "
            style={{ paddingTop: '0px', paddingBottom: '0px', backgroundColor: '' }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{ backgroundColor: '#2c0144' }}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <h2 style={{ marginTop: '50px' }}>
                        Un ensemble complet de divertissements
                        <br />
                        est disponible lorsque vous louez une salle de cinéma
                      </h2>
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
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa1.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Voir le film</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Comment choisir le cinéma et la salle de cinéma ? Dans le Privates Cafe, personne ne fait de bruit, ne dérange ni ne mâche. Choisissez un film parmi plusieurs milliards de fichiers et profitez-en sur votre canapé!{' '}
                      </p>
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa2.jpg)',
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
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Chanter au karaoké</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Maintenant, vous pouvez avoir votre propre salle de karaoké! Pas de files dattente, des milliers de chansons sur du matériel professionnel. Le Privates Cafe est un karaoké bon marché. Payez pour le nombre de personnes, pas pour les chansons, et chantez aussi longtemps que vous le souhaitez! {' '}
                      </p>
                    </div>
                  </div>
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa3.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Repas</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Une particularité de la location d'une salle dans le Privates Cafe - Il est possible d'apporter de la nourriture et des boissons gratuitement. Il est également toujours possible de commander des boissons et des narguilés dans notre bar et de la nourriture auprès de nos partenaires. Le serveur vous apporte tout en 15-20 minutes directement dans le salle.
                      </p>
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa4.jpg)',
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
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Jouer à des jeux vidéo</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Jouer avec les meilleures ventes de Playstation de Sony. Devenez un champion de la FIFA. Désormais, vous n'avez plus à vous soucier que vos invités s'ennuient. Vous vous demandez «Comment organiser une super fête d'anniversaire pour que tes amis ne s'ennuient pas» ? Vous connaissez la réponse :)
                      </p>
                    </div>
                  </div>
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa5.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Jouer à des jeux de société</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Chanter, danser, jouer à des jeux vidéo pour maintenir lintérêt de tous ? Ensuite, c'est l'heure des jeux de société ! Nous avons la «Mafia», «Alias» et bien d'autres pour tous les goûts et pour les grands groupes d'amis. {' '}
                      </p>
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
            className="section mcb-section   "
            id="action"
            style={{ paddingTop: '80px', paddingBottom: '40px', backgroundColor: '#210131' }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <center>
                        <h2>L'anniversaire au cinéma</h2>
                      </center>
                      <hr
                        style={{
                          width: '100px',
                          marginBottom: '10px',
                          marginTop: 0,
                          border: 0,
                          borderTop: '2px solid #e5097f',
                        }}
                      />
                      <center>
                        <p>3 options pour des fêtes clés en main</p>
                      </center>
                      <br />
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
                          <img src="style/img/vsesloyi.jpeg" alt="vsesloyi" width={600} height={370} />
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
            className="section mcb-section    bg-cover"
            id="contacts"
            style={{
              paddingTop: '80px',
              paddingBottom: '40px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/bg7.jpg)',
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
    </div>
  );
};

export default PartyPage;
