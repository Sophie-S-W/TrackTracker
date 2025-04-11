import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/*createRoot(document.getElementById('root')).render(
  <StrictMode> {/* wrapper component around entire app, only works in development mode. 
    It helps you identify potential problems in your app by intentionally running extra checks and warnings in the console.
    It doesn’t affect the app’s production behavior and doesn’t render anything in the DOM — it’s just for debugging.}
    
    
    <App />
  </StrictMode>,
)*/

const app = document.querySelector('#app');
app.innerHTML = `
  <h1>Live Search</h1>
  <input type="text" id="searchInput" placeholder="Search items..." />
  <ul id="itemList"></ul>
`;

const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Pineapple'];
const itemList = document.getElementById('itemList');
const searchInput = document.getElementById('searchInput');

function renderItems(filter = '') {
  const filtered = items.filter(item =>
    item.toLowerCase().includes(filter.toLowerCase())
  );
  itemList.innerHTML = filtered.map(item => `<li>${item}</li>`).join('');
}

searchInput.addEventListener('input', (e) => {
  renderItems(e.target.value);
});

renderItems(); // initial render
