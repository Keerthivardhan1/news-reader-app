"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


const page = () => {
  const router = useRouter();
  let [news, setnews] = useState([])

  useEffect(() => {
    console.log("news in useEffect =", news);
  }, [news]);

  const getNews = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-11-23&sortBy=publishedAt&apiKey=2acca4f01aee451dbda4396cbcc25f88');
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setnews(data.articles);
      console.log( " data.articles = " ,data.articles);
      console.log("news =", news);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };
  

  return (
    <div>
      <button onClick={getNews}>get News</button>
      <section className="AllNews">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-white">Shoes!</h2>

            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary " onClick={() => { router.push('/article') }}>Intersted</button>
              {news}
            </div>
          </div>
        </div>
      </section>
      <section>
        {news.map((item, index) => (
          <div key={index}>
            {/* Render individual news items here */}
            <h3>{item.author}</h3>
            <p>{item.title}</p>
            {/* Add other relevant information */}
          </div>
        ))}
      </section>
    </div>
  )
}

export default page