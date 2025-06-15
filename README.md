# Atlys - Social Media Platform

A mini frontend application with an authentication flow. This project implements a social media platform with feed, sign-in, and sign-up pages.

## Features

- **Feed Page**: Landing page with post editor and feed of posts
- **Authentication**: Sign in and sign up functionality
- **Interactive Posts**: Like, comment, and share buttons (only like is fully implemented)
- **Responsive Design**: Works on mobile and desktop
- **Animations**: Smooth transitions and interactions

## Tech Stack

- **Framework**: React with TypeScript
- **Styling**: TailwindCSS
- **Routing**: React Router
- **Date Formatting**: moment.js

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
yarn build
# or
npm run build
```

## Usage

### Unauthenticated Users
- Can view the feed but cannot interact with posts
- Attempting to interact with the feed will trigger an authentication modal
- Can navigate to dedicated sign-in and sign-up pages

### Authenticated Users
- Can create new posts
- Can like posts
- Other interactions (comment, share) show an alert as they are not fully implemented

## Project Structure

```
/src
  /components        # Reusable UI components
    AuthModal.tsx    # Modal for authentication
    Post.tsx         # Individual post component
    PostEditor.tsx   # Component for creating new posts
  /pages             # Page components
    Feed.tsx         # Main feed page
  App.tsx            # Main app component with routing and auth context
  main.tsx           # Entry point
  index.css          # Global styles
```

## Notes

- This is a frontend-only implementation with mock data and simulated authentication
- No backend or API integration is included
- The application uses React context for state management
