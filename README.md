# Backlink Tracker Application

## Project Overview

This React application was created as an assignment to demonstrate a backlink management system for SEO campaigns. It specifically focuses on tracking backlinks for Bansal Movers with the target keyword "Packers and Movers Bangalore Hebbal".

## Features

- **Dashboard**: Overview of the backlink campaign with status metrics and progress tracking
- **Backlink Management**: List, filter, and search all backlinks in the campaign
- **Add Backlinks**: Form to add new backlinks with validation
- **Analytics**: Visual representation of campaign performance with charts and tables

## Technology Stack

- React 18
- React Router for navigation
- Material UI for component library
- Chart.js for data visualization

## Project Structure

```
backlink-tracker/
├── public/
├── src/
│   ├── components/
│   │   ├── Analytics.js
│   │   ├── BacklinkForm.js
│   │   ├── BacklinkList.js
│   │   ├── Dashboard.js
│   │   └── Layout.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Running the Application

```
npm start
```
or
```
yarn start
```

The application will be available at http://localhost:3000

## Assignment Context

This application was developed as a demonstration of how a backlink tracking system could be implemented for an SEO campaign. It includes:

1. **Profile Backlinks**: Tracking business directory listings
2. **Forum Backlinks**: Monitoring forum engagement and backlinks
3. **Quora Answers**: Managing Quora responses with backlinks

The application provides a comprehensive interface for managing and analyzing the impact of these backlinks on search engine rankings.

## Note

This is a front-end only implementation with mock data. In a real-world scenario, this would be connected to a backend API for data persistence and real-time analytics
