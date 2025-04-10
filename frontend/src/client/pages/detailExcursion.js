import React, { useState } from "react";
import "../../styles/detailExcursion.css";
import { Link } from "react-router-dom";

const DetailExcursion = () => {
  const [numPersons, setNumPersons] = useState(1);
  const [options, setOptions] = useState({
    meal: false,
    diving: false,
    privateGuide: false,
  });
  const [paymentMethod, setPaymentMethod] = useState("Carte Bancaire");

  const basePrice = 65;
  const total =
    basePrice * numPersons +
    (options.meal ? 15 * numPersons : 0) +
    (options.diving ? 10 * numPersons : 0) +
    (options.privateGuide ? 25 * numPersons : 0);

  return (
    <div className="reservation-container">
      <nav className="navbar">
        <h2 className="logo">Fly Agency</h2>
        <ul className="nav-links">
          <li>
            <Link to="/vols" className="nav-link">
              Vols
            </Link>
          </li>
          <li>
            <Link to="/voyage_organise" className="nav-link">
              Voyage organisé
            </Link>
          </li>
          <li>
            <Link to="/search" className="nav-link">
              Hotel
            </Link>
          </li>
          <li>
            <Link to="/compte" className="nav-link">
              compte
            </Link>
          </li>
          <li>
            <Link to="/signupform" className="nav-link">
              S'inscrire
            </Link>
          </li>
          <li>
            <Link to="/loginform" className="nav-link">
              Se connecter
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header">
        <h1>Découverte des calanques de Marseille</h1>
        <p>Marseille, France </p>
        <p>
          Tarif de base: <strong>65€</strong> / personne
        </p>
      </div>

      <div className="section">
        <h2>🛥️ Détails de l'Excursion</h2>
        <div className="form-grid">
          <div>
            <p>
              <strong>Type d'Excursion</strong>
            </p>
            <p>Visite guidée en bateau</p>
          </div>

          <div>
            <label>
              <strong>Nombre de Personnes</strong>
            </label>
            <input
              type="number"
              min="1"
              max="10"
              value={numPersons}
              onChange={(e) => setNumPersons(parseInt(e.target.value) || 1)}
            />
          </div>
        </div>
      </div>

      <div className="section">
        <h2>📅 Dates de l'Excursion</h2>
        <div className="form-grid">
          <div>
            <p>
              <strong>Date de départ</strong>
            </p>
            <p>15 juin 2025</p>
          </div>

          <div>
            <p>
              <strong>Durée de l'excursion</strong>
            </p>
            <p>4 heures</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>🧾 Options Supplémentaires</h2>
        <div className="checkboxes">
          <label>
            <input
              type="checkbox"
              checked={options.meal}
              onChange={(e) =>
                setOptions({ ...options, meal: e.target.checked })
              }
            />
            Repas à bord (+15€/personne/jour)
          </label>
          <label>
            <input
              type="checkbox"
              checked={options.diving}
              onChange={(e) =>
                setOptions({ ...options, diving: e.target.checked })
              }
            />
            Équipement de plongée (+10€/jour)
          </label>
          <label>
            <input
              type="checkbox"
              checked={options.privateGuide}
              onChange={(e) =>
                setOptions({ ...options, privateGuide: e.target.checked })
              }
            />
            Guide privé (+25€/personne/jour)
          </label>
        </div>
      </div>

      <div className="section">
        <h2>💳 Méthode de Paiement</h2>
        <div className="radios">
          <label>
            <input
              type="radio"
              value="Carte Bancaire"
              checked={paymentMethod === "Carte Bancaire"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Carte Bancaire
          </label>
          <label>
            <input
              type="radio"
              value="PayPal"
              checked={paymentMethod === "PayPal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            PayPal
          </label>
          <label>
            <input
              type="radio"
              value="Paiement sur place"
              checked={paymentMethod === "Paiement sur place"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Paiement sur place
          </label>
        </div>
      </div>

      <div className="recap">
        <h2>Récapitulatif</h2>
        <p>Découverte des calanques de Marseille</p>
        <p>
          {numPersons} personne{numPersons > 1 ? "s" : ""} - 15 juin 2025
        </p>
        <h3>{total}€</h3>
        <button className="confirm-button">Confirmer la Réservation</button>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Fly Agency</h3>
            <p>
              Explorez le monde avec nos offres exclusives et nos services de
              qualité.
            </p>
          </div>
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li>
                <a href="/">Accueil</a>
              </li>
              <li>
                <Link to="/vols" className="nav-link">
                  Vols
                </Link>
              </li>
              <li>
                <a href="#hotels">Hôtels</a>
              </li>
              <li>
                <Link to="/compte" className="nav-link">
                  compte
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  À propos de nous
                </Link>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Suivez-nous</h4>
            <div className="social-icons">
              <Link
                to="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook <i className="fab fa-facebook"></i>
              </Link>
              <Link
                to="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                to="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter <i className="fab fa-twitter"></i>
              </Link>
              <Link
                to="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <i className="fab fa-linkedin"></i>
              </Link>
            </div>
            <p className="contact-info">
              📍 Adresse : 123 Rue Bejaia, Bejaia, Algérie
            </p>
            <p className="contact-info">✉️ Email : contact@flyagency.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Fly Agency. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default DetailExcursion;
