import React from "react";
import "./CategoryPage.css";
import SteakImage from "../../images/steak.png";
import Category from "../../components/Category/Category";
const CategoryPage = () => {
  return (
    <div className="container">
      <div className="introBackground">
        <div className="introContainer">
          <div className="textContainer">
            <h1>
              Create <span> delectable dishes</span> and savor the experience
              akin to that of a skilled <span> culinary expert</span>
            </h1>
            <p>
              It's time to make delicious food with the best recipes and
              experience like a professional chef.
            </p>
            <div className="triviasContainer">
              <div className="trivia">
                <h1>
                  400 <span>+</span>
                </h1>
                <h3>Food Recipes</h3>
              </div>
              <div className="trivia">
                <h1>
                  320 <span>+</span>
                </h1>
                <h3>Tutorial Videos</h3>
              </div>
              <div className="trivia">
                <h1>
                  100k <span>+</span>
                </h1>
                <h3>People in Communitiy</h3>
              </div>
            </div>
          </div>

          <div className="imageContainer">
            <img src={SteakImage} />
          </div>
        </div>
      </div>

      <div className="categoriesContainer">
        <div className="header">Categories</div>
        <Category />
      </div>
    </div>
  );
};

export default CategoryPage;
