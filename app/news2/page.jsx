"use client";
import React from "react";
import { useRouter } from "next/navigation";
import getNews from "../libs/getNews";

const news2 = async () => {
  const router = useRouter();

  // let temp = [
  //   {
  //     urlToImage:
  //       "https://static.toiimg.com/thumb/msid-106320247,width-1070,height-580,imgsize-1521842,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  //     title:
  //       "When Tesla robot attacked an engineer at the company's Texas factory",
  //     description:
  //       "A Tesla engineer was attacked by an assembly robot at the Giga Texas factory. The incident occurred when the robot malfunctioned while grabbing and moving car parts. The robot pinned the engineer, leaving a trail of blood. The engineer suffered an open wound …",
  //   },
  //   {
  //     urlToImage:
  //       "https://wp.technologyreview.com/wp-content/uploads/2023/12/better-handf.jpg?resize=1200,600",
  //     title:
  //       "When Tesla robot attacked an engineer at the company's Texas factory",
  //     description:
  //       "A Tesla cident occurred when the robot malfunctioned while grabbing and moving car parts. The robot pinned the engineer, leaving a trail of blood. The engineer suffered an open wound …",
  //   },
  //   {
  //     urlToImage:
  //       "https://www.fairobserver.com/wp-content/uploads/2023/12/Person-Ai-Work.jpg",
  //     title:
  //       "When Tesla robot attacked an engineer at the company's Texas factory",
  //     description:
  //       "A Tesla engineer was attacked by an assembly robot at the Giga Texas factory. The incident occurred when the robot malfunctioned while grabbing and moving car parts. The robot pinned the engineer, leaving a trail of blood. The engineer suffered an open wound …",
  //   },
  //   {
  //     urlToImage:
  //       "https://finbold.com/app/uploads/2023/12/1000-invested-in-Tesla-stock-at-start-of-2023-returned.jpg",
  //     title: "When Tesla he company's Texas factory",
  //     description:
  //       "A Tesla engineer was attacked by an assembly robot at the Giga Texas factory. The incident occurred when the robot malfunctioned while grabbing and moving car parts. The robot pinned the engineer, leaving a trail of blood. The engineer suffered an open wound …",
  //   },
  //   {
  //     urlToImage: "https://c.biztoc.com/p/6f59bedaee654497/s.webp",
  //     title:
  //       "When Tesla robot attacked an engineer at the company's Texas factory",
  //     description:
  //       " The robot pinned the engineer, leaving a trail of blood. The engineer suffered an open wound …",
  //   },
  // ];

     let newsData = await getNews();
  // let newsData = temp;
  return (
    <div className="border-2 border-black w-full flex flex-wrap flex-col items-center">
      <h1 className="text-mainText font-bold font-xl text-2xl my-5">
        Today`s Special
      </h1>
      <section className="AllNews w-full  flex flex-col flex-wrap items-center  md:mt-15  md:flex-row md:justify-center md:items-start md:gap-5 md:h-full relative ">
        <div className="main   md:relative md:p-2 md:w-1/2 md:flex md:flex-col md:gap-2 md:p-0">
        {newsData &&
          newsData.length &&
          newsData.map((news, index) => {
            return (
              <div
                key={index}
                className="card  skeleton w-10/12 max-w-50 bg-base-100 shadow-xl image-full m-2 md:w-full md:h-30  "
              >
                <figure>
                  <img className="" src={news.urlToImage} />
                </figure>
                {/* <Image src={news.url} alt="Shoes"/>` */}
                <div className="card-body">
                  <h2 className="card-title text-mainText">{news.title}</h2>

                  <p className="newsdescp">
                    {news.description}
                  </p>
                  <div className="card-actions justify-end ">
                    <button
                      className="btn btn-primary "
                      onClick={() => {
                        router.push("/article");
                      }}
                    >
                      Intersted
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <section className=" md:w-1/4">
        {newsData &&
          newsData.length &&
          newsData.map((news, index) => {
            return (
              <div
                key={index}
                className="card w-10/12 lcard bg-base-100 shadow-xl image-full m-2 md:w-full skeleton "
              >
                <figure>
                  <img src={news.urlToImage} />
                </figure>
                {/* <Image src={news.url} alt="Shoes"/>` */}
                <div className="card-body">
                  <h2 className="card-title text-mainText">{news.title}</h2>

                  <p className="newsdescp">
                    {() => {
                      words = news.description.split(" ");
                      return words.slice(0, 20).join(" ");
                    }}
                  </p>
                  <div className="card-actions justify-end ">
                    <button
                      className="btn btn-primary "
                      onClick={() => {
                        router.push("/article");
                      }}
                    >
                      Intersted
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

        </section>       
      </section>
    </div>
  );
};

export default news2;
