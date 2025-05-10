document.addEventListener("DOMContentLoaded", () => {
  loadCategory("snacks"); // Load default category
});

function loadCategory(category) {
  fetch("products.json")
    .then(res => res.json())
    .then(data => {
      const selected = data.find(c => c.category === category);
      displayProducts(selected ? selected.products : []);
    })
    .catch(err => console.error("Error loading JSON:", err));
}

function displayProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear previous content

  const table = document.createElement("table");
  table.classList.add("product-table");

  for (let i = 0; i < products.length; i += 3) {
    const row = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
      const product = products[i + j];
      const cell = document.createElement("td");

      if (product) {
        cell.innerHTML = `
          <div class="image-wrapper">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <h2>${product.name}</h2>
          <p>${product.details}</p>
        `;
      } else {
        cell.innerHTML = "&nbsp;"; // Empty cell if no product
      }

      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  productList.appendChild(table);
}
