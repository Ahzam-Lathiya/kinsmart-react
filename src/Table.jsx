import { useState } from 'react'

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly, outOfStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    //product names that do not match the searched text
    if (product.category.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
      return;
    }

    //products that are not in stock, while the stockonly flag is required
    if (inStockOnly && !outOfStockOnly && !product.stocked){
      return;
    }

    if (!inStockOnly && outOfStockOnly && product.stocked){
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({filterText, inStockOnly, outOfStockOnly}) {
  return (
    <form>
      <input type="text" placeholder="Search..." value={filterText}/>
      <label>
        <input type="checkbox" checked={inStockOnly}/>
        {' '}
        Only show products in stock
      </label>
      <label>
        <input type="checkbox" checked={outOfStockOnly}/>
        {' '}
        Only show products out of stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {

  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [outOfStockOnly, setOutOfStockOnly] = useState(false);

  return (
    <div>
      <SearchBar filterText={filterText}
      inStockOnly={inStockOnly} outOfStockOnly={outOfStockOnly}
      />
      <ProductTable products={products} filterText={filterText}
      inStockOnly={inStockOnly} outOfStockOnly={outOfStockOnly}
      />
    </div>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function Table() {
  return <FilterableProductTable products={PRODUCTS} />;
}
