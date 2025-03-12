import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// const animals = ["Cat", "Parrot", "Dog"];
// console.log(animals[0]);

createRoot(document.getElementById('root')!).render(
	<App />
)
