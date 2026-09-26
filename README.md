# FitLog — Workout Library

FitLog is a responsive workout library and workout planning application built with Next.js, TypeScript, Tailwind CSS, and DaisyUI.

It allows users to browse workouts, view detailed workout information, add exercises to today's plan, save workouts for later, search and sort workouts, and track their daily workout plan.

## Live Project

Add your deployed project URL here:

https://your-deployment-url.com

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- REST API
- LocalStorage

## Features

### 1. Workout Library

Browse workouts fetched from the FitLog API.

Each workout displays:

- Workout image
- Muscle groups
- Workout name
- Equipment
- Duration
- Calories
- Rating

The library is responsive and displays the workouts in a grid layout.

### 2. Workout Details

Users can open any workout to view detailed information including:

- Workout description
- Muscle groups
- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Step-by-step instructions

### 3. Today's Workout Plan

Users can add workouts to today's plan.

The plan has a maximum capacity of five exercises.

The My Plan page displays:

- Total exercises
- Total minutes
- Total calories
- Workout information
- View Details button
- Mark as Done button
- Remove button

### 4. Saved Workouts

Users can save workouts for later.

Saved workouts are available through the **Saved** tab inside the My Plan page.

### 5. Search Workouts

Users can search workouts by:

- Workout name
- Muscle group

Search works across both:

- Today's Plan
- Saved Workouts

### 6. Workout Sorting

Users can sort workouts by:

- Duration
- Calories
- Rating

### 7. LocalStorage Persistence

Today's plan and saved workouts are stored in the browser's LocalStorage.

This allows the user's plan and saved workouts to remain available after refreshing the page.

### 8. Toast Notifications

The application provides toast notifications for important actions, including:

- Adding a workout to today's plan
- Saving a workout
- Marking a workout as done
- Removing a workout

### 9. Responsive Design

FitLog is designed to work across different screen sizes:

- Mobile devices
- Tablets
- Desktop screens

### 10. Loading State

A loading state is displayed while workout data is being loaded.

### 11. Custom 404 Page

A custom 404 page is included for unavailable routes or pages.

### 12. Dynamic Workout Details

Workout detail pages use dynamic routes based on the workout ID.

Example:

```text
/workout/1
/workout/2
/workout/3