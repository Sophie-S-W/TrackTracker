import './style.css'

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
