document.addEventListener('DOMContentLoaded', () => {
    const categories = [
        {id: 1, name: "Кирпич", image: "category1.png", products: [
        {id: 101, name: 'Кирпич красный', price: '5000р', image:'product1.png'},
         {id: 102, name: 'Кирпич белый', price: '6000р', image:'product2.png'},
         {id: 103, name: 'Кирпич облицовочный', price: '7000р', image:'product3.png'},
          {id: 104, name: 'Кирпич огнеупорный', price: '8000р', image:'product4.png'},
        ] },
        {id: 2, name: "Цемент", image: "category2.png", products: [
         {id: 201, name: 'Цемент М400', price: '2000р', image:'product5.png'},
        {id: 202, name: 'Цемент М500', price: '2500р', image:'product6.png'},
         {id: 203, name: 'Цемент М600', price: '3000р', image:'product7.png'},
       ] },
        {id: 3, name: "Пиломатериалы", image: "category3.png", products: [
        {id: 301, name: 'Доска обрезная', price: '3000р', image:'product8.png'},
        {id: 302, name: 'Брус', price: '4000р', image:'product9.png'},
         {id: 303, name: 'Фанера', price: '2500р', image:'product10.png'},
        ] }
    ];


    const categoryGrid = document.querySelector('.category-grid');
    const productContainer = document.getElementById('products-container');

    function renderCategories() {
        categories.forEach(category => {
             const categoryItem = document.createElement('div');
             categoryItem.classList.add('category-item')
             categoryItem.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
                 <h3>${category.name}</h3>
                  <button class="btn" data-category-id="${category.id}">Смотреть</button>
             `
             categoryGrid.appendChild(categoryItem)
        });
      
    }
    function renderProducts(categoryProducts) {
        productContainer.innerHTML = '';
        if (categoryProducts.length === 0) {
          productContainer.innerHTML = '<p>Продукты не найдены</p>'
          return
        }
         categoryProducts.forEach(product => {
              const productCard = document.createElement('div');
              productCard.classList.add('product-card');
              productCard.innerHTML = `
               <img src="${product.image}" alt="${product.name}">
                 <h3>${product.name}</h3>
                <p>Цена: ${product.price}</p>
             `
             productContainer.appendChild(productCard);
         })

    }
  categoryGrid.addEventListener('click', (event) => {
       if (event.target.classList.contains('btn')) {
          const categoryId = parseInt(event.target.dataset.categoryId)
         const selectedCategory =  categories.find(category => category.id === categoryId);
          renderProducts(selectedCategory.products);
       }
  })
    renderCategories()
});