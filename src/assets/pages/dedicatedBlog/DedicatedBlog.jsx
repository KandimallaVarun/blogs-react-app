import React from "react";
import Banner from "../../components/banner/Banner";
import TrendingBlog from "../../components/Trending-Blog/TrendingBlog";
import blogs from "../../utils/MockData";
import "./DedicatedBlog.css";
import { useParams } from "react-router-dom";

function DedicatedBlog() {
  const { id: idParam } = useParams();
  const id = Number(idParam);

  const selected = blogs.find((b) => b.id === id);

  return (
    <>
      <div className="my-2">
        <div className="trending-blogs-section">
          <h2 className="text-center p-3">Dedicated Blog</h2>
          <div className="all-trending-blogs d-flex justify-content-around flex-wrap row-gap-2">
            {selected ? <TrendingBlog key={selected.id} blog={selected} /> : <p>No blog found.</p>}
          </div>
          <div className="blog-content">
            {selected && (
              <>
                <h3>{selected.title}</h3>
                <p>{selected.content}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DedicatedBlog;
