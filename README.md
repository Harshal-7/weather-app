# Weather App

A simple weather app built with Next.js and Tailwind CSS, allowing users to search for weather information based on city names.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- Search by City Name: Enter the name of a city to retrieve its current weather information.

- Responsive Design: The app is designed to be responsive and work well on various screen sizes.

- Data Visualization: Weather information is displayed visually using icons and descriptions.

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/Harshal-7/weather-app
```

### 2. Navigate to the project directory:

```bash
cd weather-app
```

### 3. Install dependencies:

```bash
npm install
```

### 4. Create a .env.local file in the root directory and add your OpenWeatherMap API key:

```makefile
API_KEY=your_api_key
```

### 5. Start the development server:

```bash
npm  run  dev

# or

yarn  dev

# or

bun  dev
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### 6. Open your browser and navigate to http://localhost:3000 to view the app.

## Usage

1. Enter the name of a city in the input field.

2. Click the "Search" button to retrieve weather information for the entered city.

3. The weather information will be displayed on the card.
