**Guidelines**
    Three Separate, Complete Apps: You are building this ticket app three times. Once in React, once in Vue.js, and once in Twig. They must be independent projects/folders. You cannot share components between them, only static assets like images/SVGs.

    Identical Visual Design Across All Three: This is critical. The layout, colors, spacing, and specific design elements must look exactly the same in all three implementations. If your React app has a wavy hero, your Vue and Twig apps need the same wavy hero.

    Mandatory Design Elements (Your Visual Checklist):

        Max Width: All content must be inside a max-width: 1440px centered container.

        Hero Section: Must have a wavy background at the bottom (using SVG or CSS clip-path).

        Decorative Circles: At least one circle in the hero section, and at least two circles somewhere on the site in total.

        Boxes: Stats, tickets, and feature sections must be in card-like boxes with shadows and rounded corners.

    Authentication is SIMULATED, but SECURE: You are not building a real backend.

        Use localStorage to simulate login. The key must be named ticketapp_session.

        Protected Routes: The Dashboard and Ticket Management pages must check for this token. If it's not there, redirect the user to /auth/login immediately.

        Logout must clear this token from localStorage.

    Ticket CRUD with Strict Validation:

        Fields: title (required), status (required).

        Status Values: The status field can only be one of these three: "open", "in_progress", "closed". No other values are allowed.

        Colors: You must use the assigned colors for status tags: Green for "open", Amber for "in_progress", Gray for "closed".

        Feedback: Every Create, Edit, Delete action must give clear success/error feedback (e.g., toast notifications). Deletes must have a confirmation step.

    Error Handling is a Core Feature: You must explicitly handle and show user-friendly messages for:

        Invalid form inputs (e.g., "Title is required").

        Unauthorized access (e.g., "Your session has expired").

        Failed "API" calls (e.g., "Failed to load tickets").

    Fully Responsive & Accessible: It must work and look good on mobile, tablet, and desktop. Use semantic HTML, alt text, etc.

