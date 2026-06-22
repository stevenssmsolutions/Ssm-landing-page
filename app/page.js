'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Zap } from 'lucide-react';

export default function SSMLandingPage() {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    disponibilite: 'apres-midi'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/mbdvjzzj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom: formData.nom,
          telephone: formData.telephone,
          email: formData.email,
          disponibilite: formData.disponibilite,
          timestamp: new Date().toLocaleString('fr-CA')
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ nom: '', telephone: '', email: '', disponibilite: 'apres-midi' });
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        setError('Erreur lors de l\'envoi. Réessaye plus tard.');
      }
    } catch (err) {
      console.error('Erreur:', err);
      setError('Erreur de connexion. Vérifie ta connexion internet.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="bg-slate-950 border-b border-blue-500/20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-900 via-blue-600 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">SSM Solutions</h1>
              <p className="text-blue-300 text-sm">Résoudre. Connecter. Économiser.</p>
            </div>
          </div>
          <div className="text-right text-sm text-slate-400">
            <p>NEQ: 2282122912</p>
            <p className="font-semibold text-blue-300">819-460-4998</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                Optimisez votre internet & téléphonie
              </h2>
              <p className="text-xl text-slate-300 mb-6">
                Nous trouvons la meilleure solution pour vos besoins. Internet, cellulaire, téléphonie d'affaires — nous couvrons tout.
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-orange-500"></div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Nos Services & Fournisseurs</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-blue-300 mb-4">Fournisseurs Principaux</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Rogers', 'Telus', 'Bell', 'Koodo', 'Fido', 'Cogeco', 'Ebox', 'Comwave', 'Shaw'].map(service => (
                    <div key={service} className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-blue-500/20 hover:border-blue-400/50 transition">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-slate-200 font-medium text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-orange-300 mb-4">Services Complémentaires</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['Téléphonie Résidentielle', 'Internet Portable 5G', 'Alarme & Prévention Dégâts d\'eau', 'Système de Paiement'].map(service => (
                    <div key={service} className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-orange-500/20 hover:border-orange-400/50 transition">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-slate-200 font-medium text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-4">Partenaires Paiement</h4>
                <div className="flex gap-3 flex-wrap">
                  {['Moneris', 'Elavon', 'Nuvei'].map(partner => (
                    <div key={partner} className="px-4 py-2 bg-slate-700/50 rounded-full border border-slate-600 hover:border-blue-400/50 transition">
                      <span className="text-slate-300 text-sm font-medium">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Pourquoi nous ?</h3>
              
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Économies réelles:</strong> On négocie les meilleurs prix pour toi</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Service direct:</strong> Pas de centre d'appels, tu parles avec moi</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-orange-400" />
                  <p className="text-orange-400 font-bold">J'ai des rabais exclusifs pour toi!</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6">Nos Solutions Pour</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-10 bg-gradient-to-br from-blue-900/40 to-slate-800/40 rounded-lg border border-blue-400/20 hover:border-blue-400/50 transition flex flex-col items-center justify-center min-h-[180px]">
                  <p className="font-bold text-blue-300 text-xl text-center">Résidentiel</p>
                  <p className="text-sm text-slate-400 text-center mt-3">Internet & Cellulaire</p>
                </div>
                <div className="p-10 bg-gradient-to-br from-orange-900/40 to-slate-800/40 rounded-lg border border-orange-400/20 hover:border-orange-400/50 transition flex flex-col items-center justify-center min-h-[180px]">
                  <p className="font-bold text-orange-300 text-xl text-center">Affaires</p>
                  <p className="text-sm text-slate-400 text-center mt-3">PME & Professionnels</p>
                </div>
                <div className="p-10 bg-gradient-to-br from-blue-800/40 to-slate-800/40 rounded-lg border border-blue-300/20 hover:border-blue-300/50 transition flex flex-col items-center justify-center min-h-[180px]">
                  <p className="font-bold text-blue-200 text-xl text-center">Corporate</p>
                  <p className="text-sm text-slate-400 text-center mt-3">Grandes Entreprises</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sticky top-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-blue-500/30 p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Prêt à économiser ?</h3>
              <p className="text-slate-300 mb-8">Remplissez le formulaire et nous vous appellerons au moment qui vous convient.</p>

              {submitted ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-2">Merci !</h4>
                  <p className="text-green-300">Nous vous contacterons sous peu.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-300 text-sm">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Votre nom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-blue-400/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition disabled:opacity-50"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-blue-400/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition disabled:opacity-50"
                      placeholder="(514) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-blue-400/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition disabled:opacity-50"
                      placeholder="jean@exemple.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Meilleur moment pour vous appeler *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { value: 'matin', label: 'Matin' },
                        { value: 'apres-midi', label: 'Après-midi' },
                        { value: 'soir', label: 'Soirée' }
                      ].map(option => (
                        <label key={option.value} className="relative cursor-pointer">
                          <input
                            type="radio"
                            name="disponibilite"
                            value={option.value}
                            checked={formData.disponibilite === option.value}
                            onChange={handleChange}
                            disabled={loading}
                            className="sr-only"
                          />
                          <div className={`p-3 rounded-lg border-2 text-center transition font-medium ${
                            formData.disponibilite === option.value
                              ? 'border-orange-500 bg-orange-500/20 text-white'
                              : 'border-slate-600 bg-slate-700/30 text-slate-300 hover:border-blue-400/50'
                          }`}>
                            {option.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition transform hover:scale-105 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Envoi en cours...' : 'Demander un appel'}
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    Nous respectons votre confidentialité. Réponse garantie
