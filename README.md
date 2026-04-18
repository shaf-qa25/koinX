KoinX Frontend Internship Assignment: Tax Loss Harvesting Tool


A high-performance, responsive React application designed to help users minimize their tax liabilities by offsetting capital gains with realized losses.

Live Demo:-
🔗 (https://koin-x-smoky.vercel.app/)


Tech Stack:-
React.js (Vite) – Core framework for the application.

Tailwind CSS v4 – Modern styling using the latest CSS-first configuration.

Context API – Centralized state management for seamless data flow across the dashboard.

Lucide React – For clean, professional icons.

✨ Key Features


Real-time Recalculation: The "After Harvesting" card dynamically updates as assets are selected, using a custom business logic engine.

Advanced Sorting: Fully interactive table headers allowing users to sort by Asset, Amount, or Gains (STCG/LTCG).

Custom Tooltips: Added informative tooltips to help users understand complex tax harvesting logic.

Smart Savings Alert: A dynamic visual alert that triggers only when the selected strategy reduces taxable gains.

Premium UI/UX: - Inter Typography: Configured for 16px, Medium weight for a high-end corporate aesthetic.

Skeleton Loaders: Prevents layout shift and provides visual feedback during data fetching.

NotFound Page: A custom-designed 404 page to handle broken links or incorrect routes gracefully.

Technical Highlights
Performance Optimization (useMemo): I heavily utilized the useMemo hook to memoize complex tax calculations and sorting logic. This ensures that the app remains snappy and doesn't trigger heavy re-calculations on every small UI update.

Micro-interactions: Used Framer Motion for smooth transitions, specifically for the "Savings Alert" and "Skeleton Loaders," giving the UI a polished feel.

Scalable State Management: Migrated the entire app's logic to a TaxProvider (Context API) to eliminate prop-drilling and prepare the app for future scale.

Routing: Implemented React Router to manage the main dashboard and a dedicated 404 Error page.


Getting Started:-


Clone the repo:

git clone https://github.com/your-username/koinx-tax-harvesting.git


Install dependencies:

npm install


Run the development server:

npm run dev
