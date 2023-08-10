import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Topbar from "./components/Topbar";
import Navigation from "./components/Navigation";
import Foot from "./components/Foot";
import Aboutus from "./components/Aboutus";
import Products from "./components/Products";
import Foottemp from "./components/Foottemp";
import Temp from "./components/Temp";
import Category_One from "./components/Table/Category_One";
import Category_Two from "./components/Table/Category_Two";
import Category_Three from "./components/Table/Category_Three";
import Category_Four from "./components/Table/Category_Four";
import Category_Five from "./components/Table/Category_Five";
import Category_Six from "./components/Table/Category_Six";
import Category_Seven from "./components/Table/Category_Seven";
import Category_Eight from "./components/Table/Category_Eight";
import Category_Eleven from "./components/Table/Category_Twelve";
import Category_Thirteen from "./components/Table/Category_Thirteen";
import Category_Fourteen from "./components/Table/Category_Fourteen";
import Category_Fifteen from "./components/Table/Category_Fifteen";
import Category_Sixteen from "./components/Table/Category_Sixteen";
import Category_Seventeen from "./components/Table/Category_Seventeen";
import Category_Eighteen from "./components/Table/Category_Eighteen";
import Category_Nineteen from "./components/Table/Category_Nineteen";
import Category_Twenty from "./components/Table/Category_Twenty";
import Category_Twelve from "./components/Table/Category_Twelve";
import Category_Eleve from "./components/Table/Category_Eleven";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />
          <Route path="/category_one" element={<Category_One />} />
          <Route path="/category_two" element={<Category_Two />} />
          <Route path="/category_three" element={<Category_Three />} />
          <Route path="/category_four" element={<Category_Four />} />
          <Route path="/category_five" element={<Category_Five />} />
          <Route path="/category_six" element={<Category_Six />} />
          <Route path="/category_seven" element={<Category_Seven />} />
          <Route path="/category_eight" element={<Category_Eight />} />

          <Route path="/category_eleven" element={<Category_Eleve />} />
          <Route path="/category_twelve" element={<Category_Twelve />} />
          <Route path="/category_thirteen" element={<Category_Thirteen />} />
          <Route path="/category_fourteen" element={<Category_Fourteen />} />
          <Route path="/category_fifteen" element={<Category_Fifteen />} />
          <Route path="/category_sixteen" element={<Category_Sixteen />} />
          <Route path="/category_seventeen" element={<Category_Seventeen />} />
          <Route path="/category_eighteen" element={<Category_Eighteen />} />
          <Route path="/category_nineteen" element={<Category_Nineteen />} />
          <Route path="/category_twenty" element={<Category_Twenty />} />

          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
        {/* <Foot /> */}
        <Foottemp />
      </BrowserRouter>
    </div>
  );
}

export default App;
