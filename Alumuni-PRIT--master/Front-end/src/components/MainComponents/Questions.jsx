import React from "react";

const Questions = () => {
  return (
    <>
      {/* tabs sections */}
      <div className="tabs text-2xl p-2 bg-accent">
        <a className="tab tab-bordered text-xl px-7 tab-active" onClick={""}>
          Recent Questions
        </a>
        <a className="tab tab-bordered  text-xl px-7">Most Answered</a>
        <a className="tab tab-bordered text-xl px-7">Answered </a>
        <a className="tab tab-bordered text-xl px-7">No Answers </a>
        <a className="tab tab-bordered text-xl px-7">Most Views</a>
      </div>

      {/* question card section */}
      <div
        className="my-10 border-t-orange-500 border
      "
      >
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Topic Heading</h2>
            <p>Question details</p>
            <div className="card-actions justify-between px-2">
              <div>
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
