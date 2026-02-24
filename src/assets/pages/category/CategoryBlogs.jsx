import React from "react";
import "./CategoryBlogs.css";
import Banner from "../../components/banner/Banner";
import TrendingBlog from "../../components/Trending-Blog/TrendingBlog";
import blogs from "../../utils/MockData";
import { useParams } from "react-router-dom";

function CategoryBlogs({blog}) {
  const blogParams = useParams();
  const [category, setCategory] = React.useState(blogParams.blog);
  return (
    <>
      <Banner />
      <div className="my-2">

        <div className="trending-blogs-section">
          <h2 className="text-center p-3">Category Blogs</h2>
          <div className="all-trending-blogs d-flex justify-content-around flex-wrap row-gap-2">
            {
              blogs.map((blog) => ( (blog.category === category) &&
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

export default CategoryBlogs;
