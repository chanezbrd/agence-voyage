import React, { useState } from "react";
import "../../styles/vols.css"; // On garde le même style
import { Link } from "react-router-dom";

export default function VoyageOrganise() {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    duration: "",
    participants: 1,
    circuitType: "Culturel",
    message: "",
  });

  const destinations = [
    "Tamanrasset",
    "Sahara",
    "Ghardaïa",
    "Hoggar",
    "Djanet",
    "Tlemcen",
  ];
  const circuitsPopulaires = [
    {
      nom: "Maroc",
      image:
        "https://images.unsplash.com/photo-1529412442024-3d8a1e01b3d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1hcm9jfGVufDB8fHx8MTY4MDI3Njg3NQ&ixlib=rb-1.2.1&q=80&w=400",
      dateDepart: "2025-05-01",
      prix: 1200,
      duree: "7 jours",
    },
    {
      nom: "Égypte",
      image:
        "https://images.unsplash.com/photo-1555783098-1f205ef76c05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE2fHxle2d5cHR8ZW58MHx8fHwxNjgwMjc2OTY1&ixlib=rb-1.2.1&q=80&w=400",
      dateDepart: "2025-06-15",
      prix: 1100,
      duree: "10 jours",
    },
    {
      nom: "Islande",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxpc2xhbmQlMjBsaXJhbGF8ZW58MHx8fHwxNjgwMjc2OTE0&ixlib=rb-1.2.1&q=80&w=400",
      dateDepart: "2025-07-20",
      prix: 1500,
      duree: "8 jours",
    },
    {
      nom: "Japon",
      image:
        "https://images.unsplash.com/photo-1555685812-c52e1a72c4d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxqYXBvbnxlbnwwfHx8fDE2ODA0Mjc1MDM&ixlib=rb-1.2.1&q=80&w=400",
      dateDepart: "2025-08-05",
      prix: 2000,
      duree: "14 jours",
    },
    {
      nom: "Pérou",
      image:
        "https://images.unsplash.com/photo-1600569471873-648394b8f712?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxwZXJ1fGVufDB8fHx8MTY4MDQyNjU3Ng&ixlib=rb-1.2.1&q=80&w=400",
      dateDepart: "2025-09-10",
      prix: 1300,
      duree: "12 jours",
    },
    {
      nom: "Inde",
      image:
        "https://images.unsplash.com/photo-1528802021200-f4c1f8c0e8b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxpbmRlJTIwY29sb25pbmF8ZW58MHx8fHwxNjgwNDI2NTA4&ixlib=rb-1.2.1&q=80&w=400",
      dateDepart: "2025-10-12",
      prix: 900,
      duree: "10 jours",
    },
    {
      nom: "Grèce",
      image:
        "https://images.unsplash.com/photo-1505577082714-b728f4b6a488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGdyZWVjZXxlbnwwfHx8fDE2ODA0MjY0MTc&ixlib=rb-1.2.1&q=80&w=400",
      dateDepart: "2025-11-01",
      prix: 1000,
      duree: "7 jours",
    },
    {
      nom: "Thaïlande",
      image:
        "https://images.unsplash.com/photo-1560123479201-b20c8d2b6413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHRoYWlsYW5kfGVufDB8fHx8MTY4MDQyNjU5Nw&ixlib=rb-1.2.1&q=80&w=400",
      dateDepart: "2025-12-05",
      prix: 1100,
      duree: "14 jours",
    },
  ];
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Voyage organisé soumis :", formData);
  };

  return (
    <div className="container">
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
              Hôtel
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

      <header className="headers">
        <h1 className="title">Organisez votre aventure</h1>
        <p className="subtitle">Réservez un voyage organisé unique</p>

        <div className="form-container">
          <h2 className="form-title">Voyage organisé</h2>
          <form onSubmit={handleSubmit} className="form-layout">
            <div className="form-group">
              <label className="form-label">Destination</label>
              <input
                list="destinations"
                name="destination"
                className="form-input"
                placeholder="Ex : Sahara"
                value={formData.destination}
                onChange={handleChange}
                required
              />
              <datalist id="destinations">
                {destinations.map((city, i) => (
                  <option key={i} value={city} />
                ))}
              </datalist>
            </div>

            <div className="form-group">
              <label className="form-label">Date de départ</label>
              <input
                type="date"
                name="startDate"
                className="form-input"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Durée (jours)</label>
              <input
                type="number"
                name="duration"
                className="form-input"
                min="1"
                value={formData.duration}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Participants</label>
              <input
                type="number"
                name="participants"
                className="form-input"
                min="1"
                value={formData.participants}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Type de circuit</label>
              <select
                name="circuitType"
                className="form-input"
                value={formData.circuitType}
                onChange={handleChange}
              >
                <option value="Culturel">Culturel</option>
                <option value="Nature">Nature</option>
                <option value="Aventure">Aventure</option>
                <option value="Détente">Détente</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Message (optionnel)</label>
              <textarea
                name="message"
                className="form-input"
                rows="3"
                placeholder="Informations complémentaires..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="form-button">
              Réserver
            </button>
          </form>
        </div>
      </header>

      <section className="top-hotels">
        <h2 className="section-title">Circuits populaires</h2>
        <div className="destinations-grid">
          {circuitsPopulaires.map((circuit, index) => (
            <div className="hotel-card" key={index}>
              <img
                src={circuit.image}
                alt={circuit.nom}
                className="destination-image"
              />
              <div className="destination-info">
                <span className="destination-name">{circuit.nom}</span>
                <span className="destination-flag">🌍</span>
                <div className="circuit-details">
                  <p>Date de départ : {circuit.dateDepart}</p>
                  <p>Prix : {circuit.prix} €</p>
                  <p>Durée : {circuit.duree}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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
}
