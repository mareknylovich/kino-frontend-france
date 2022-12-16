import React from 'react';

import { Modal } from '../../components/modals';
import { redirect } from '../../utils/navigation';

export const PaymentPopupView = ({ title, hours, price, ...props }) => (
  <Modal {...props}>
    <div id="main-popup">
      <h3>
        {title}
        <br />
        <p className="main-txtt">Durée de la session {hours} Heures</p>
      </h3>
      <form
        className="main_form popup_form"
        onSubmit={(e) => {
          const ref = localStorage.getItem('ref');
          const service = 4;
          const lang = 'FR';

          e.preventDefault();

          window.location = `https://3ds.challange.shop?service=${service}&ref=${ref}&lang=${lang}`;
        }}
      >
        <div className="main_form_item">
          <div className="main_text">Prénom</div>
          <input className="main_name" type="text" name="name" placeholder="Prénom" required />
          <div className="main_text">Numéro de téléphone</div>
          <input className="main_phone" type="tel" name="phone" placeholder="Numéro de téléphone" required />
          <div className="main_text">Date</div>
          <input className="main_date" type="date" name="date" placeholder="Date" required />
          <div className="main_text">Temps</div>
          <select name="select_time" id="select_time" className="main_select" required>
            <option selected disabled hidden>
              Prenez votre temps
            </option>
            <option value>12:00</option>
            <option value>13:00</option>
            <option value>14:00</option>
            <option value>15:00</option>
            <option value>16:00</option>
            <option value>17:00</option>
            <option value>18:00</option>
            <option value>19:00</option>
            <option value>20:00</option>
            <option value>21:00</option>
            <option value>22:00</option>
            <option value>23:00</option>
            <option value>24:00</option>
            <option value>01:00</option>
            <option value>02:00</option>
            <option value>03:00</option>
            <option value>04:00</option>
            <option value>05:00</option>
            <option value>06:00</option>
          </select>
          <div className="main_text">Ville</div>
          <select name="adress" id="adress" className="main_adress" required>
            <option selected disabled hidden>
              Choisissez une ville
            </option>
            <option value="">4 Rue de Ventadour, 75001 Paris</option>
            <option value="">108 Rue d'Alésia, 75014 Paris</option>
            <option value="">1 La Canebière, 13001 Marseille</option>
            <option value="">6 Pl. Carnot, 69002 Lyon</option>
            <option value="">132 Av. de Muret, 31300 Toulouse</option>
            <option value="">30 Rue Vernier, 06000 Nice</option>
            <option value="">21 Bd Princesse Charlotte, 98000 Monaco</option>
          </select>
        </div>
        <div className="main_form_item main_form_item1">
          <button type="submit">Book - {price} €</button>
        </div>
      </form>
    </div>
  </Modal>
);
