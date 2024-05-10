import React, { useState } from "react";
import axios from "axios";

const Blog_card = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setblogContent] = useState("");
  const [blogAuthor, setblogAuthor] = useState("");

  const fetchBlogInfo = async () => {
    const response = await axios.get("http://localhost:3200/api/blog/v1/get-all-blogs");
    console.log(response.data)
  };

  return <>
  <button className="h-24 w-24 bg-white" onClick={fetchBlogInfo}>
    gfhfghfghfghfgfghgfhf
  </button>
  {blogTitle}

  </>;
};

export default Blog_card;
