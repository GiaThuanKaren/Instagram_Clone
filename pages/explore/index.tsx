import React, { useState } from "react";
import { MainLayout } from "../../src/Layouts";

function Explore() {
  const [ArrPost, setArrPost] = useState(() => {
    const arr = Array.from(Array(50).keys());
    return arr;
  });
  return (
    <>
      <MainLayout iscenterContainerLayout>
        <div className="flex flex-wrap justify-center ">
          {ArrPost.map((item, index) => {
            return (
              <>
                <div className="relative  h-max w-[calc(33.333%_-_28px)] m-1 bg-purple-600">
                  <img
                    className=" w-full overflow-hidden aspect-[2/3] object-cover"
                    alt="123"
                    src="https://images.unsplash.com/photo-1670993744250-94a791464249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  />
                  <div className="absolute right-0 top-0 pt-1 pr-1  ">
                    <svg
                      aria-label="Quay vòng"
                      className="x1lliihq x1n2onr6 x1hfr7tm"
                      color="#ffffff"
                      fill="#ffffff"
                      height="24"
                      role="img"
                      viewBox="0 0 48 48"
                      width="24"
                    >
                      <title>Quay vòng</title>
                      <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
                    </svg>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </MainLayout>
    </>
  );
}

export default Explore;
