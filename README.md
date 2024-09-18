# Currency Converter Project

## React + TypeScript + Vite

See a preview: [DEMO LINK](https://andrii-shpontak.github.io/currency-converter/)

## Overview
This project is a React-based currency converter application with a customizable theme. It features a header with navigation, current exchange rates, and a currency selector.

## Features
- **Header**:
  - Navigation menu
  - Display of selected currency exchange rate (buy/sell)
  - Currency selector (default: USD)
- **Pages**:
  1. Main page with currency converter component
  2. Customization page with Radix UI theme settings
- **Currency Data**:
  - Fetched from Monobank's open API
  - Filtered to include only USD-UAH, EUR-UAH, and USD-EUR rates  (buy/sell)
- **Routing**: 
  - Implemented using Tan Stack Router
  - Redirect from non-existent routes
- **State Management**: 
  - Recoil for state management
  - Recoil-persist to prevent data loss on page refresh (due to API request limits)

## Technology Stack
- **Framework**: React with Vite
- **Routing**: Tan Stack Router
- **API Requests**: Axios (with mock interceptors)
- **State Management**: Recoil + recoil-persist
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS

## API Integration
The application uses the open API of Monobank to receive currency rates (we have a notification after the result of each request). Note that there are limits on the number of requests per minute I used recoil-persist to prevent data loss when refreshing the page.

## Customization
The Customization page includes a stock theme configuration component from Radix UI, allowing users to adjust the application's appearance.
