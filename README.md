# Fashion Store (React + TypeScript + Redux Toolkit)

A learning project: a fashion e-commerce UI where users can browse products,
add them to a bag, and see a price summary.

## Features
- Product listing fetched from a REST API (json-server)
- Add to bag / remove from bag
- Bag page with item details and price summary (total MRP, discount, fees, total)
- Bag is saved in localStorage, so it survives a page refresh
- Fully responsive layout (mobile to desktop)

## Tech Stack
- React 19, TypeScript, Vite
- Redux Toolkit (typed slices and hooks)
- React Router
- Tailwind CSS
- json-server (mock backend)

## Getting Started

1. Install dependencies
   npm install

2. Start the mock API (in one terminal)
   cd server
   npx json-server@0.17.4 --watch db.json --port 5000

3. Start the app (in another terminal)
   npm run dev

Open http://localhost:5173

## What I Learned
- Typing Redux Toolkit slices with `PayloadAction`, `RootState` and `AppDispatch`
- Typed hooks (`useAppSelector`, `useAppDispatch`)
- Fetching data with `useEffect` and `AbortController`
- Building responsive UI with Tailwind CSS

> This is a practice project and is not affiliated with any real brand.