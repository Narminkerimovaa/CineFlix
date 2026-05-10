# 🎬 Cineflix

React ilə hazırlanmış film baxış tətbiqi. OMDB API-dən real film məlumatları çəkilir və filtrlənmiş səhifələrdə göstərilir.

---

## Texnologiyalar

- **React** — UI
- **React Router v6** — routing və nested routes
- **CSS Modules** — scoped stillər
- **OMDB API** — film məlumatları

---

## Funksionallıq

- Bütün filmləri gəz
- Dövrə görə filtrləmə — 1950–2000 və 2000–2023
- İzləmə siyahısı — film əlavə et / sil
- Film detal səhifəsi
- 404 səhifəsi

---

## Layihə Strukturu

```
src/
├── assets/
├── feature/
│   ├── ClassicsPage/
│   │   ├── EarlyEraPage/      # 1950–2000
│   │   └── LateEraPage/       # 2000–2023
│   ├── DetailPage/
│   ├── Home/
│   ├── ModernPage/
│   ├── NotFound/
│   └── WatchList/
├── routes/
│   └── index.jsx
├── shared/
│   ├── components/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Dropdown/
│   │   ├── Header/
│   │   ├── Layout/
│   │   └── Spinner/
│   ├── constants/
│   │   └── path.js            # route path-ləri
│   ├── helpers/
│   │   └── client.js
│   ├── hooks/
│   │   ├── useFetch.js
│   │   └── useTitle.js
│   ├── provider/
│   │   └── Global/
│   │       ├── GlobalProvider.jsx
│   │       └── useGlobal.js   # qlobal state hook
│   └── services/
│       ├── api.js
│       └── handler.js
└── styles/
    └── global.css
```

---

## Başlamaq

```bash
npm install
npm run dev
```

---

## Öyrənmə Məqsədləri

- `<Outlet />` ilə nested routing
- Context API ilə qlobal state
- Komponent kompozisiyası
- CSS custom properties və design tokens