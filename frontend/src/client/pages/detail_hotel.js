import React, { useState } from "react";
import "../../styles/detail_hotel.css";
import { Link } from "react-router-dom";

const HotelReservation = () => {
  const [roomType, setRoomType] = useState("Standard");
  const [numPersons, setNumPersons] = useState("1 personne");
  const [arrivalDate, setArrivalDate] = useState("");
  const [stayDuration, setStayDuration] = useState("1 nuit");
  const [options, setOptions] = useState({
    breakfast: false,
    parking: false,
    spa: false,
  });
  const [paymentMethod, setPaymentMethod] = useState("Carte Bancaire");

  const basePrice = 350;
  const persons = parseInt(numPersons);
  const nights = parseInt(stayDuration);

  let total = basePrice * nights;
  if (options.breakfast) total += 12 * persons * nights;
  if (options.parking) total += 15 * nights;
  if (options.spa) total += 30 * nights;

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
              S'inscrire{" "}
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
        <h1>Grand Hôtel Royal</h1>
        <p>Paris, Île-de-France ★★★★★</p>
        <p>
          Tarif de base: <strong>350€</strong> / nuit
        </p>
      </div>

      <div className="section">
        <h2>🛏️ Détails de la Chambre</h2>
        <div className="form-grid">
          <div>
            <p>
              <strong>Type de chambre</strong>
            </p>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option>Standard</option>
              <option>Deluxe</option>
              <option>Suite</option>
            </select>
          </div>
          <div>
            <p>
              <strong>Nombre de personnes</strong>
            </p>
            <select
              value={numPersons}
              onChange={(e) => setNumPersons(e.target.value)}
            >
              <option>1 personne</option>
              <option>2 personnes</option>
              <option>3 personnes</option>
            </select>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>📅 Dates du Séjour</h2>
        <div className="form-grid">
          <div>
            <p>
              <strong>Date d'arrivée</strong>
            </p>
            <input
              type="date"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
            />
          </div>{" "}
          <div>
            <p>
              <strong>Nombre des nuits</strong>
            </p>
            <select
              value={stayDuration}
              onChange={(e) => setStayDuration(e.target.value)}
            >
              <option>1 nuit</option>
              <option>2 nuits</option>
              <option>3 nuits</option>
              <option>4 nuits</option>
            </select>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>🧾 Options Supplémentaires</h2>
        <div className="checkboxes">
          <label>
            <input
              type="checkbox"
              checked={options.breakfast}
              onChange={(e) =>
                setOptions({ ...options, breakfast: e.target.checked })
              }
            />
            Petit déjeuner (+12€/personne/jour)
          </label>
          <label>
            <input
              type="checkbox"
              checked={options.parking}
              onChange={(e) =>
                setOptions({ ...options, parking: e.target.checked })
              }
            />
            Parking (+15€/jour)
          </label>
          <label>
            <input
              type="checkbox"
              checked={options.spa}
              onChange={(e) =>
                setOptions({ ...options, spa: e.target.checked })
              }
            />
            Accès Spa & Bien-être (+30€/jour)
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
        <p>Grand Hôtel Royal</p>
        <p>{`Chambre ${roomType} - ${stayDuration}`}</p>
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

export default HotelReservation;
