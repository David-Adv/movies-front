import React, { useEffect, useState } from "react";
import { Carrousel } from "../../components/carrousel/Carrousel";
import "./home.css";
import { Card } from "../../components/card/Card";
import { InputSearch } from "../../components/inputSearch/InputSearch";
import { Category } from "../../components/category/Category";
import axios from "axios";

export const Home = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategories, setSelectedCategories] = useState({});

  useEffect(() => {
    const url = "../../../data.json";

    const fetchData = async () => {
      try {
        const response = await axios.get("../../../data.json");
        setData(response.data);
        const allCategories = response.data.map((item) => item.category);
        console.log(allCategories);
        setCategory(Array.from(new Set(allCategories)));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    console.log("Search Value:", e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  console.log(category);
  return (
    <>
      {/* <Carrousel/> */}

      {/* <h1 style={{fontSize:"24px",textAlign:"center"}}>All Movies</h1> */}

      <InputSearch value={searchValue} onChange={handleInputChange} />

      {/* <div> */}
      <div className="container-check">
        {category.map((category, index) => (
          <Category
            key={index}
            category={category}
            checked={selectedCategories[category]}
            onChange={() => handleCategoryChange(category)}
          />
        ))}
      </div>

      <div className="Card-Container">
        {data.map((movie, ind) => (
          <Card key={ind} movie={movie} ind={ind}></Card>
        ))}
      </div>

      {/* </div> */}
    </>
  );
};
