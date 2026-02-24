import React from "react";

export default function TrendingBlog({ blog }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="../../media/card-programming.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-category">{blog.category}</p>
          <p className="card-text">{blog.previewDescription}</p>
          <a href={`/blog/${blog.id}`} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
