# Project/Assignment README

## 1. Project Overview

The SQL Query Runner is a web-based application designed to facilitate the execution of SQL queries and display the results seamlessly within the application. The primary goal is to provide users with a user-friendly interface that accepts SQL queries, executes them, and presents the query results in a clear and accessible manner.

## 2. Technology Stack

### JavaScript Framework:
- **Next.js:** Chosen for its ease of use, server-side rendering capabilities, and efficient routing.

### UI Library:
- **shadcn/ui:** A lightweight and customizable UI library that enhances the overall visual appeal and user experience.

### State Management:
- **Recoil:** Implemented for efficient state management, utilizing atoms and selectors to optimize re-renders across the application.

## 3. Page Load Time

The page load time of the application is measured using the Web Vitals API and the `useReportWebVitals` hook provided by Next.js. This enables the tracking of key performance metrics, including:

- **First Contentful Paint (FCP)**
- **Largest Contentful Paint (LCP)**
- **Next.js Render Time**

## 4. Performance Optimizations

To enhance the application's performance and decrease load times, the following optimizations have been implemented:

- **Recoil State Management:** Utilized Recoil's atoms and selectors to manage state efficiently, minimizing unnecessary re-renders and improving overall responsiveness.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/vamshi5421/frontend_assignment`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

For a production build, use `npm run build` followed by `npm start`.

## Additional Notes


**Note:** Ensure that you have the necessary prerequisites installed before running the project.

Happy coding!
