"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [news, setnews] = useState([])
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [title , settitle] = useState("")
  

  // useEffect(() => {
  //   console.log("news in useEffect =", news);
  // }, [news]);

  const getNews = async () => {
    console.log("came to getNews fucntioji ");
    try {
      
      const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-11-23&sortBy=publishedAt&apiKey=2acca4f01aee451dbda4396cbcc25f88');
      let data = await response.json()
      settitle(data.articles[0].title)
      setnews([...data.articles])
      console.log("data.articles= ",data.articles);
      console.log("title = " , title);
      console.log("news = " , news);
    } catch (error) {
      
    }

    // try {
    //   console.log("came to try block");
    //   const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-11-23&sortBy=publishedAt&apiKey=2acca4f01aee451dbda4396cbcc25f88');
  
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
  
    //   const data = await response.json();
    //   setnews(data.articles);
    //   // console.log( " news.articles = " ,data.articles);
    //   console.log("news =", news);
    // } catch (error) {
    //   console.error('Error fetching news:', error);
    // }
  };
  

  return (
    <div>
      <button onClick={getNews}>get News</button>

      <section>
        <h1>{title}</h1>
    
      </section>
    </div>
  )
}

export default page