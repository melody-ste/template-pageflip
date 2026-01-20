# Template Pageflip

A simple and responsive **React FlipBook** template using [react-pageflip](https://www.npmjs.com/package/react-pageflip).  
This template allows you to create a digital book with page flipping animations, mobile responsiveness, and custom page content.

## Features

- Mobile-friendly (1 page on small screens, 2 pages on desktop)
- Fully responsive page size
- Navigation controls (previous / next page)
- Page numbers displayed dynamically
- Easy to customize and reuse

## Installation

1. **Copy the components**

Copy the `Book.jsx` and `Page.jsx` files from the `components` folder into your project

2. **Copy the CSS**

Copy the styles from `index.css` (or your custom styles) to your project to style the book and pages

3. **Install dependencies**

Make sure you have react-pageflip installed:

```
npm install react-pageflip 
```


## Use the Book component

You can now import and use the `Book` component anywhere in your React app:


```jsx
import Book from './components/Book';

function App() {
  return (
    <div>
      <h1>My FlipBook</h1>
      <Book />
    </div>
  );
}

export default App;

```

## Customization

- **Pages:** Modify the `<Page>` components inside `Book.jsx` to add your own content. Each page must use `forwardRef` as shown.

- **Size & Responsiveness:** The page width and height are automatically calculated, but you can adjust the `clamp` function in `Book.jsx` to allow different min/max sizes.

- **Navigation:** Use the buttons or the `bookRef` API (`flipNext()`, `flipPrev()`) to programmatically control the book.

## Notes

- Each page **must use `forwardRef`** for `react-pageflip` to measure and render pages correctly.
- The template uses a **mobile breakpoint at 768px**, showing 1 page on mobile and 2 pages on desktop.

- To add more pages, just duplicate the `<Page>` elements in `Book.jsx` and provide unique content.
