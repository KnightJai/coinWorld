Crypto Marketplace Website

live link: https://coinsworld.netlify.app/

This project is a Crypto Marketplace Website that uses the CoinGecko API to provide real-time cryptocurrency data. The website features information on various cryptocurrencies, including their icons, prices, 24-hour changes, and market cap. Users can also view detailed charts showing price trends over the last 7 and 10 days for individual coins.



Features
📊 Cryptocurrency Overview

View a list of cryptocurrencies with their:

Name

Icon

Current Price

24-Hour Change

Market Cap


📈 Detailed Coin Information

Click on any coin to view:

A chart displaying price trends for the last 7 days and 10 days.

Market Rank and Market Cap.

24-Hour High and Low Prices.


🔥 Live Updates

Real-time data fetched directly from the CoinGecko API.

Tech Stack

Frontend: React, React Router DOM, React Google Charts

Build Tool: Vite

Linting: ESLint with React and React Hooks plugins

API Integration: CoinGecko API


Installation and Setup

Prerequisites

Node.js (v16 or later recommended)

npm or yarn

Steps to Run the Project

Clone the repository:

bash

Copy code

git clone https://github.com/KnightJai/coinWorld.git

cd crypto-website

Install dependencies:

bash


Copy code

npm install

Start the development server:

bash

Copy code

npm run dev

Open your browser and navigate to:

arduino

Copy code

http://localhost:5173

Scripts

npm run dev: Start the development server.

npm run build: Build the project for production.

npm run preview: Preview the production build.

npm run lint: Run ESLint to check for code quality issues.

Dependencies

Core Dependencies

react: UI library for building user interfaces.

react-dom: Rendering React components to the DOM.

react-router-dom: For routing between pages.

react-google-charts: For rendering interactive charts.

Development Dependencies

eslint: Linting tool to maintain code quality.

@vitejs/plugin-react: Vite plugin to support React.

vite: Build tool for fast development and production builds.

CoinGecko API Integration


The website uses the CoinGecko API to fetch real-time cryptocurrency data, including prices, market caps, and price trends. To learn more about the API, visit CoinGecko's API Documentation.


Folder Structure


Copy code

crypto-website/
├── public/           # Static assets

├── src/              # Source code

│   ├── assets

    ├── components/   # Reusable React components

    ├── context  

│   ├── pages/        # Page components

│   ├── App.jsx       # Main app entry point

│   └── main.jsx     # ReactDOM render

├── package.json      # Project configuration and dependencies

└── vite.config.js    # Vite configuration


Future Enhancements

Add filters to sort coins by rank, price, or market cap.
Include historical data for longer periods (e.g., 1 month, 1 year).
Implement user authentication to save favorite coins.
Contributing
Contributions are welcome! To contribute:





Contact
For any inquiries, feel free to reach out:


Email: your- jaicreation12@gmail.com


