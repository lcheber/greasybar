import "./App.css";
import AppBar from "./component/AppBar";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recettes from './component/Recettes';
import Ingredients from './component/Ingredients';
import Category from './component/Category';
import Recette from './component/Recette'
import MentionsLegales from './component/MentionsLegales'
import CGU from './component/CGU'
import Forgetpassword from './component/Forgetpassword'
import RandomRecette from './component/RandomRecette'
import CardRecette from './component/CardRecette'
import Ingredient from './component/Ingredient'
import Homepage from './component/Homepage'
import Categories from './component/Categories'
import SignUp from './component/Signup'
import Login from './component/Login'
import Logout from './component/Logout'
import useToken from './component/useToken'
import Profile from './component/Profile'
import Contact from './component/Contact'





function App() {
  const Api = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const { token, removeToken, setToken } = useToken();
  return (
    <BrowserRouter>
      <AppBar token={token} removeToken={removeToken}/>
      <div className="App">
        <Routes>
          <Route path="/api/logout" element={<Logout removeToken={removeToken} token={token}/>} />
          <Route path="/" element={<Homepage />} />
          <Route path="/recette/:slug" element={<Recette />} />
          <Route path="/recettes" element={<Recettes />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/categories" element={<Homepage />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/ingredient/:slug" element={<Ingredient />} />
          <Route path="/randomrecette/" element={<RandomRecette />} />
          <Route path="/cardrecette" element={<CardRecette />} />
          <Route path="/mentionslegales" element={<MentionsLegales />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/api/login" element={<Login setToken={setToken} token={token}/>} />
          <Route path="/api/signup" element={<SignUp />} />
          <Route path="/api/profile" element={<Profile token={token}/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
