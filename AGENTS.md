# AGENTS.md - Gif API Project

## Project Overview

This is a React application that searches GIFs from the Giphy API. Built with Vite and React 18.

## Build/Lint/Test Commands

```bash
# Install dependencies
npm install

# Start development server (port 3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run all tests
npm test

# Run a single test file
npm test -- src/components/GifItem.test.jsx

# Run tests in watch mode
npm run test:watch

# Run ESLint
npm run lint
```

## Code Style Guidelines

### General Conventions
- **Language**: JavaScript (ES6+) with React functional components
- **File Extension**: Use `.jsx` for files containing JSX
- **Styling**: CSS Modules for component-specific styles, Materialize CSS for UI framework
- **Prop Validation**: Use `prop-types` package for all components

### File Structure
```
src/
├── components/       # Reusable UI components (.jsx)
├── context/          # React Context providers (.jsx)
├── App.jsx           # Main app component
├── index.jsx         # Entry point
├── setupTests.js     # Test setup for Vitest
```

### Import Conventions
```javascript
// React core imports first
import React, {useState, useEffect} from 'react'

// Third-party libraries
import PropTypes from 'prop-types'
import M from "materialize-css"

// CSS imports (separate line)
import 'materialize-css/dist/css/materialize.min.css'

// CSS Modules
import styles from './SearchBar.module.css'

// Local components (relative paths)
import GifItem from './components/GifItem'
import {ModalContext} from '../context/ModalContext'
```

### Naming Conventions
| Element | Convention | Example |
|---------|------------|---------|
| Files | PascalCase with .jsx | `GifItem.jsx`, `SearchBar.module.css` |
| Components | PascalCase | `const GifItem = () => {}` |
| Functions | camelCase | `handleChange`, `getGifs` |
| Context | PascalCase with Context suffix | `ModalContext`, `ModalProvider` |
| CSS Classes | kebab-case (Materialize) | `className="card-action center-align"` |
| CSS Module Classes | camelCase | `styles.search__input` |
| Props | camelCase | `gifItem`, `showBackButton` |

### Component Structure
```javascript
import React from 'react'
import PropTypes from 'prop-types'
import {SomeContext} from '../context/SomeContext'

const ComponentName = ({prop1, prop2}) => {
    
    const {state, setState} = useContext(SomeContext)

    const handlerFunction = () => {
        // implementation
    }

    return (
        <div className="css-class">
            {/* JSX content */}
        </div>
    )
}

ComponentName.propTypes = {
    prop1: PropTypes.string.isRequired,
    prop2: PropTypes.object
}

export default ComponentName
```

### State Management
- Use `useState` for local component state
- Use React Context API (`createContext`, `useContext`) for shared state across components
- Avoid prop drilling; use Context when data is needed by multiple nested components

### Error Handling
- Use try/catch blocks for async operations (API calls, fetch)
- Set error state with descriptive messages
- Display errors via dedicated Error component
```javascript
try {
    const response = await fetch(url)
    const {data} = await response.json()
    setData(data)
} catch (error) {
    setError(true)
    setMessage('Something went wrong, please try again...')
}
```

### JSX Formatting
- Use double quotes for JSX attributes: `className="card"`
- Use self-closing tags for elements with no children: `<Input />`
- Prefer implicit returns for simple components when appropriate
- Use conditional rendering patterns:
```javascript
{showPreloader ? <Preloader/> : error ? <Error message={message}/> : <GifList gifList={gifList}/>}
```

### Materialize CSS Usage
- Use Materialize grid system: `col s12 m7 l4`
- Use Materialize classes: `card`, `modal`, `btn`, `input-field`, etc.
- Initialize Materialize components in useEffect:
```javascript
useEffect(() => {
    M.Modal.init(document.getElementById('modal'))
}, [])
```

### PropTypes
Always define PropTypes for component props:
```javascript
ComponentName.propTypes = {
    prop1: PropTypes.string.isRequired,
    prop2: PropTypes.object,
    prop3: PropTypes.func,
    prop4: PropTypes.arrayOf(PropTypes.string)
}
```

### Testing
- Test files follow pattern: `ComponentName.test.jsx`
- Use `@testing-library/react` and `@testing-library/jest-dom`
- Use `@testing-library/user-event` for simulating user interactions
- Tests are located in `src/` alongside source files
- Run tests with `npm test` or `npm run test:watch` for watch mode

## API Integration

The app uses the Giphy API:
- Endpoint: `https://api.giphy.com/v1/gifs/search`
- Parameters: `api_key`, `q` (query), `limit`, `offset`
- Response: `{data: [], pagination: {total_count: number}}`

## Browser Support
Configured via `browserslist` in package.json:
- Production: `>0.2%, not dead, not op_mini all`
- Development: `last 1 chrome version, last 1 firefox version, last 1 safari version`
