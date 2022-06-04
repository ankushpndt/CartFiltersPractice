import { useState } from "react";
import { ProductList } from "./ProductList";
import "./styles.css";
import data from "./products.json";
export default function App() {
  const [select, setSelect] = useState("");
  const [women, setWomen] = useState("women");
  const [toggleS, setToggleS] = useState(false);
  const [toggleM, setToggleM] = useState(false);
  const [toggleL, setToggleL] = useState(false);
  const [toggleXL, setToggleXL] = useState(false);
  const [toggleN, setToggleN] = useState(false);
  const [toggleA, setToggleA] = useState(false);
  const [toggleC, setToggleC] = useState(false);
  const [toggleP, setToggleP] = useState(false);
  const [men, setMen] = useState("men");
  const [filterBy, setFilterBy] = useState("");
  const [test, setTest] = useState([]);
  const sortItems = (productList, select) => {
    if (select === "HTL") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    } else if (select === "LTH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }
    return productList;
  };
  const sortedItems = sortItems(data.listOfProducts, select);
  const filterItems = () => {
    if (filterBy === "size") {
      return sortedItems.filter((item) => {
        let res = test?.find((el) => el === item.size);
        return res;
      });
    } else if (filterBy === "brand") {
      return sortedItems.filter((item) => {
        let res = test?.find((el) => el === item.brand);
        return res;
      });
      // return sortedItems.filter((item) => item.brand === brand);
    }
    return sortedItems;
  };
  const filteredItems = filterItems();

  return (
    <div className="App">
      <button
        onClick={() => {
          setSelect("HTL");
          setMen("");
          setWomen("");
          setTest([]);
          setToggleS(false);
          setToggleA(false);
          setToggleC(false);
          setToggleL(false);
          setToggleN(false);
          setToggleM(false);
          setToggleP(false);
          setToggleXL(false);
        }}
      >
        Clear all
      </button>
      <div className="sort">
        <label htmlFor="HTL">
          {" "}
          <input
            type="radio"
            id="HTL"
            onChange={() => setSelect("HTL")}
            checked={select === "HTL" ? true : false}
          />
          High to low{" "}
        </label>

        <label htmlFor="LTH">
          {" "}
          <input
            type="radio"
            id="LTH"
            onChange={() => setSelect("LTH")}
            checked={select === "LTH" ? true : false}
          />
          Low to High
        </label>
      </div>
      <div className="filters">
        <label>
          <input
            type="checkbox"
            onChange={() => {
              setTest((prev) => [...prev, "S"]);

              setToggleS(!toggleS);
              setFilterBy("size");

              toggleS && setTest([]);
            }}
            checked={toggleS}
          />{" "}
          Small
        </label>
        <label>
          {" "}
          <input
            type="checkbox"
            onChange={() => {
              setTest((prev) => [...prev, "M"]);

              setToggleM(!toggleM);
              setFilterBy("size");
              toggleM && setTest([]);
            }}
            checked={toggleM}
          />{" "}
          Medium
        </label>
        <label>
          {" "}
          <input
            type="checkbox"
            onChange={() => {
              setTest((prev) => [...prev, "L"]);

              setToggleL(!toggleL);
              setFilterBy("size");
              toggleL && setTest([]);
            }}
            checked={toggleL}
          />
          Large
        </label>
        <label>
          {" "}
          <input
            type="checkbox"
            onChange={() => {
              setTest((prev) => [...prev, "XL"]);

              setToggleXL(!toggleXL);
              setFilterBy("size");
              toggleXL && setTest([]);
            }}
            checked={toggleXL}
          />
          Xtra Large
        </label>
        <label>
          {" "}
          <input
            type="checkbox"
            onChange={() => {
              setTest((prev) => [...prev, "nike"]);

              setFilterBy("brand");
              setToggleN(!toggleN);
              toggleN && setTest([]);
            }}
            checked={toggleN}
          />
          Nike
        </label>
        <label>
          {" "}
          <input
            type="checkbox"
            onChange={() => {
              setTest((prev) => [...prev, "comicsense"]);

              setFilterBy("brand");
              setToggleC(!toggleC);
              toggleC && setTest([]);
            }}
            checked={toggleC}
          />
          Comic sense
        </label>
        <label>
          {" "}
          <input
            type="checkbox"
            onChange={() => {
              setTest((prev) => [...prev, "polo"]);

              setFilterBy("brand");
              setToggleP(!toggleP);
              toggleP && setTest([]);
            }}
            checked={toggleP}
          />
          Polo
        </label>
        <label>
          {" "}
          <input
            type="checkbox"
            onChange={() => {
              setTest((prev) => [...prev, "adidas"]);

              setFilterBy("brand");
              setToggleA(!toggleA);
              toggleA && setTest([]);
            }}
            checked={toggleA}
          />
          Adidas
        </label>
        {/* <label>
          {" "}
          <input
            type="checkbox"
            onChange={() => {
              setTest((prev) => [...prev, "men"]);
              
              setFilterBy("gender");
              setToggleA(!toggleA);
              toggleA && setTest([]);
            }}
            checked={toggleA}
          />
          Men
        </label>
        <label>
          {" "}
          <input
            type="checkbox"
            onChange={() => {
              setTest((prev) => [...prev, "adidas"]);
              
              setFilterBy("brand");
              setToggleA(!toggleA);
              toggleA && setTest([]);
            }}
            checked={toggleA}
          />
          Adidas
        </label> */}
      </div>
      <ProductList
        productList={
          filteredItems.length > 0 ? filteredItems : data.listOfProducts
        }
      />
    </div>
  );
}
