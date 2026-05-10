# How the Web Works

_Author: Angela Jasso_  
_Date: 2026-03-31_

---

## 1. What is a Request?

A request is a message sent from a client (browser) to a server asking for a specific resource.

This is typically done using the HTTP protocol.

Example:

- The browser requests an HTML file
- The server responds with that file

---

## 2. What Happens After the Browser Receives HTML?

Once the browser receives the HTML:

1. It parses the HTML and builds the DOM (Document Object Model)
2. It applies CSS to create the render tree
3. It calculates layout and paints the elements on the screen
4. It executes JavaScript

This process transforms raw code into a visible webpage.

---

## 3. Where Does JavaScript Fit in the Process?

JavaScript runs after the browser parses the HTML.

It can:

- Modify the DOM
- Handle user interactions
- Fetch additional data (API requests)
- Update the UI dynamically

JavaScript adds behavior and interactivity to the page.

---

## 4. What Happens if the Server Does Not Respond?

If the server does not respond:

- The request fails
- The browser cannot retrieve the resource
- An error is shown (e.g., timeout or server unreachable)

Without a response, no content can be rendered.

---

## 5. Local Files vs Web Requests

When opening a local HTML file:
file://path/to/file.html

The browser does not make an HTTP request.

Instead:

- It reads the file directly from the local file system
- No server is involved
- No network communication occurs

This is why local files can be opened without an internet connection.

---

## Key Insight

The web is not just "opening pages".

It is a system where:

- Clients request resources
- Servers respond with data
- Browsers interpret and render that data