# Dynamic Post Page with OG Image Generation

## Objective

This project creates a static post page using React that dynamically generates an Open Graph (og:image) based on the post content. The generated image can be used for social media previews.

## Features

- **Post Page**: A simple page to create and view a post with a title, content, and optional image.
- **OG Image Generation**: Dynamically creates an Open Graph image (1200x630 pixels) including the post's title, a snippet of the content, and any associated image.
- **Automatic Meta Tag Integration**: Automatically adds the og:image meta tag to the post page's HTML.
- **Styling**: Applies styles to ensure the OG image is visually appealing and readable, with branding elements.

## Installation

1. **Clone the repository:**

2. **Navigate to the project directory:**

   ```bash
   cd your-repository
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   The application will start on [http://localhost:3000](http://localhost:3000).

## Usage

1. **Creating a Post:**

   - Enter a title in the "Title" field.
   - Enter the post content in the "Content" field.
   - Upload an image from your device.
   - Click "Generate OG Image" to generate the post page and OG image.

2. **Viewing the Generated OG Image:**
   - The post page will display the content and an image preview.
   - The OG image is automatically generated and can be accessed from the console logs (for testing purposes).
## Screenshots
![Screenshot (860)](https://github.com/user-attachments/assets/45244335-60df-40cb-8c19-96c9832d0459)
![Screenshot (861)](https://github.com/user-attachments/assets/05ca5867-fd4d-45e0-a4d8-e6a14cd855ef)


## Code Overview

### `App.js`

- Manages the state for the title, content, and image of the post.
- Validates input lengths and ensures all fields are filled before navigating to the post page.
- Handles image upload and updates state accordingly.

### `PostPage.js`

- Receives post data via `useLocation` from React Router.
- Generates the OG image using `html-to-image` library.
- Displays the post content including title, content, and uploaded image.


### `App.css` & `PostPage.css`

- Styles the post creation form and the post page to ensure a clean and professional appearance.

## Key Features

- **Character Limits**: Title and content inputs are limited to specified maximum lengths with validation in place.
- **Image Generation**: Uses `html-to-image` to capture and convert the post content into an image format.
- **Meta Tags**: Automatically includes the OG image meta tag in the HTML.

## Performance

- The image generation process is optimized for speed and should perform efficiently for typical post content sizes.
