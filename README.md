This project is an Interactive Personal Blog Platform, a simple, client-side web application built to manage blog posts directly in the browser. It allows users to create, view, edit, and delete posts, with all data stored in the browser's localStorage for persistence. The focus is on JavaScript functionality to handle DOM manipulation, user events, form validation, and data storage.

How to Run:

Clone or download the project repository.
           
Open the index.html file in a modern web browser (e.g., Chrome, Firefox).

No additional setup or backend server is required, as the application runs entirely client-side.

Features :

Create Posts: Add new posts using a form with title and content fields. Both fields are required, and custom error messages display if validation fails.

Display Posts: All posts are dynamically rendered on the page with their title, content, and buttons for editing and deleting.

Edit Posts: Click the "Edit" button on a post to modify its title and content. The form is pre-filled with the post’s data, and validation applies.

Delete Posts: Click the "Delete" button to remove a post from the display and localStorage.

Data Persistence: Posts are saved in localStorage and persist across page refreshes or browser sessions.

Development Process:

HTML Structure: Created a clean layout with a form for adding/editing posts and a section for displaying posts dynamically.

CSS Styling: Applied basic styles to ensure a user-friendly interface.

JavaScript:

Used an array to manage posts in memory, with each post containing an ID, title, content, and timestamp.

Implemented event listeners for form submission, edit, and delete actions.

LocalStorage for data persistence, with helper functions to save and load posts.

Added event delegation for edit/delete buttons to handle dynamic content efficiently.

Included form validation to ensure title and content are not empty, displaying user-friendly error messages.

Challenges:

Editing Posts: Tracking the post being edited was challenging. Used a variable to store the current edit ID and modified the form submission logic to handle updates.

Event Delegation: Directly attaching event listeners to buttons caused issues with dynamically added posts. Switched to event delegation on the parent container.

Faced problems with showing the error messages when the validation fails.



