# Connect Student

Application mobile-first qui aide les étudiants à **trouver des stages**, **gérer leurs candidatures**,
**développer leurs compétences** et **échanger avec les recruteurs**.

> Projet réalisé dans le cadre du module DES101 (2025/2026).

## Fonctionnalités (prototype)

- Onboarding en 3 étapes (charte « Cultivez votre talent, connectez vos rêves, réalisez votre succès »)
- Connexion / inscription (validation côté client)
- Accueil avec statistiques et offres recommandées
- Recherche de stages avec filtre par domaine
- Détail d'une offre et candidature en un clic
- Suivi des candidatures (Envoyée → Réponse reçue → Entretien)
- Messagerie textuelle avec les recruteurs
- Générateur de CV (brouillon local, sans IA externe)
- Centre de formation avec modules courts et progression
- Profil utilisateur

## Charte graphique utilisée

| Rôle | Couleur |
|---|---|
| Rouge principal | `#ff0000` |
| Rouges secondaires | `#ff3333`, `#ff6666`, `#ff9999`, `#ffcccc` |
| Noir | `#18161b` |
| Gris | `#464549`, `#747376`, `#a3a2a4`, `#d1d0d1` |
| Bleu | `#004d9b`, `#ccdbeb` |

Police : **Gotham** (Bold pour les titres, Book pour les textes), avec repli sur Montserrat / Arial.

## Structure

```
connectstudent/
├── index.html        # Point d'entrée
├── css/styles.css    # Charte graphique et mise en page
├── js/app.js         # Routeur, vues, données et logique
├── .gitignore
└── README.md
```

## Lancer le projet

Aucune dépendance. Ouvrez simplement `index.html` dans un navigateur,
ou lancez un petit serveur local :

```bash
python3 -m http.server 8000
# puis ouvrez http://localhost:8000
```

## Remarques

- Les données sont stockées dans le `localStorage` du navigateur : c'est un prototype, pas une application connectée à un serveur.
- Le logo est une approximation à partir de la maquette ; remplacez le SVG dans `js/app.js` (fonction `logo`) par le fichier officiel de la charte.
- Pour une version de production, il faudra un backend (authentification, base de données, messagerie temps réel).

## Licence

Projet académique — tous droits réservés à l'auteur.

## Icône de l'application

Les fichiers se trouvent dans `icons/` :

- `app-icon-1024.png` : icône App Store (iOS, sans transparence, sans coins arrondis)
- `app-icon-512.png` : icône Google Play
- `app-icon-180.png` : iPhone (écran d'accueil)
- `app-icon-192.png` / `app-icon-512.png` : manifest PWA (Android)
- `app-icon-32.png` : favicon du navigateur
- `app-icon-white-*.png` : variante blanche (fond `#fcfcfd`, figure rouge)
- `app-icon.svg` : source vectorielle

Le système (iOS/Android) applique lui-même les coins arrondis.

## Fonctionnalités v2

- **Apparence** : mode clair / sombre / automatique, couleur principale (rouge, bleu, noir), police (Gotham, système, serif), taille du texte.
- **Langues** : Français, English, العربية (avec mise en page de droite à gauche).
- **Profil** : photo de profil (recadrée automatiquement), modification des informations personnelles.
- **Générateur de CV** : 4 types (classique, moderne, académique / PFE, créatif), aperçu modifiable, téléchargement en `.txt`.
- **Fonctionnalités secondaires** : favoris, activité récente, accès rapide, centre de formation avec progression.

## Limites actuelles

- Le générateur de CV fonctionne localement avec un modèle de texte (pas d'IA externe). Pour une vraie IA, il faut un serveur qui garde la clé API (ne jamais la mettre dans le code front-end).
- Les offres de stage et les messages restent en français ; seule l'interface est traduite.
- Données stockées dans le navigateur uniquement.
