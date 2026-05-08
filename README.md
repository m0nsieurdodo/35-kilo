# 📚 Quiz — 35 kilos d'espoir

Application web de QCM sur le roman **"35 kilos d'espoir"** d'Anna Gavalda, destinée aux élèves de CM2.

---

## 🚀 Déploiement sur Vercel (3 étapes)

### 1. Cloner et pousser sur GitHub

```bash
git init
git add .
git commit -m "init: quiz 35 kilos d'espoir"
gh repo create quiz-35-kilos --public --push --source=.
```

### 2. Importer sur Vercel

Aller sur [vercel.com/new](https://vercel.com/new) → sélectionner le dépôt GitHub → cliquer **Deploy**.  
Aucune configuration supplémentaire n'est nécessaire (Next.js est détecté automatiquement).

### 3. C'est en ligne ! 🎉

Vercel génère une URL publique en ~1 minute. Partager l'URL avec les élèves.

---

## 💻 Développement local

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## 🗂️ Structure du projet

```
/
├── app/
│   ├── layout.tsx        # Layout racine + Google Fonts
│   ├── globals.css       # Styles globaux + animations
│   ├── page.tsx          # Page d'accueil
│   └── quiz/
│       └── page.tsx      # Page du quiz interactif
├── components/
│   ├── ProgressBar.tsx   # Barre de progression
│   └── ResultScreen.tsx  # Écran de résultats
├── data/
│   └── questions.ts      # 20 questions QCM (TypeScript)
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## ✏️ Ajouter ou modifier des questions

Éditer le fichier `data/questions.ts`. Chaque question suit ce format :

```typescript
{
  id: 21,
  section: "Ma section",
  question: "Ma question ?",
  choices: ["Choix A", "Choix B", "Choix C", "Choix D"],
  correctIndex: 0,  // 0 = A, 1 = B, 2 = C, 3 = D
  explanation: "Explication courte affichée après la réponse.",
}
```

---

## 🛠️ Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- Zéro base de données · Zéro authentification
