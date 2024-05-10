import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog_card = ({ params }) => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setblogContent] = useState("");
  const [blogAuthor, setblogAuthor] = useState("");
  const [blogImage, setBlogImage] = useState("");
  useEffect(() => {
    axios
      .get(`http:/localhost:3200/api/blog/v1/get-all-blogs`)
      .then((response) => {
        () => {
          setBlogTitle(response.data?.blogTitle);
          setblogContent(response.data?.blogContent);
          setblogAuthor(response.data?.blogAuthor);
          setBlogImage(response.data?.blogImage);
        };
      });
  }, []);
    console.log(blogTitle, blogContent, blogAuthor, blogImage);
  return (
    <>
      {/**<div className="max-w-sm  rounded-lg shadow bg-gray-800 border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blogTitle}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are {blogAuthor}
        </p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>**/}
<h1>Loading...</h1>
    </>
  );
};

export default Blog_card;
