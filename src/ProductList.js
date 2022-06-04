export const ProductList = ({ productList }) => {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {productList?.map((item, i) => {
          return (
            <div
              key={i}
              style={{ border: "1px solid", margin: "1rem", padding: "1rem" }}
            >
              <li>{item.name}</li>
              <li>{item.price}</li>
              <li>{item.brand}</li>
              <li>{item.size}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
