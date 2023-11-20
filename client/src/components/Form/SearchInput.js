import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>

      <form role="search"
        onSubmit={handleSubmit} className="searchbox">
        <input type="search" value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })} className="text search-input" placeholder="Tìm kiếm sản phẩm..." />
         <span className="search-link" href="#"><i className="ri-search-line" /></span>
      </form>
    </>
  );
};

export default SearchInput;