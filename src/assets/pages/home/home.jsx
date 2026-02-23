import React from "react";
import "./home.css";
import Banner from "../../components/banner/Banner";
import TrendingBlog from "../../components/Trending-Blog/TrendingBlog";
import blogs from "../../utils/MockData";

function Home() {
  return (
    <>
      <Banner />
      <div className="my-2">
        <div>
          <h1>Home Page</h1>
        </div>
        <div className="d-flex">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="../../public/media/card-programming.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="../../public/media/card-programming.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Design Card</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="../../public/media/card-programming.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Photography Card</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="../../public/media/card-programming.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Photography Card</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="trending-blogs-section">
          <h2>Trending Blogs</h2>
          <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-2">
            {
              blogs.map((blog) => (
                <TrendingBlog key={blog.id} blog={blog} />
              ))
            }
            {/* <TrendingBlog />
            <TrendingBlog />
            <TrendingBlog />
            <TrendingBlog />
            <TrendingBlog /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
