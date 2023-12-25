'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'


const news2 = () => {

    let [newsData , setNewsData] = useState([])

    useEffect(()=>{
        const getData = async ()=>{
            let response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2023-12-23&to=2023-12-23&sortBy=popularity&apiKey=2acca4f01aee451dbda4396cbcc25f88')
            let data = await response.json()
            console.log("data = " , data);
            console.log("data.artices = " , data.articles);
            setNewsData(data.articles)
            console.log("newsData = " , newsData);

        }

        getData()

    } , [])

  return (
    <div className='border-2 border-white '>
        <section className="AllNews mt-20 mx-20 flex flex-wrap justify-center ">
            {newsData && newsData.length && newsData.map((news , index)=>{
                return(
                    <div key={index} className="card w-80 bg-base-100 shadow-xl image-full m-3">
                        <figure><img src={news.urlToImage}  /></figure>
                        {/* <Image src={news.url} alt="Shoes"/>` */}
                        <div className="card-body">
                            <h2 className="card-title text-white">{news.title}</h2>

                            <p>{news.description}</p>
                            <div className="card-actions justify-end ">
                            <button className="btn btn-primary " onClick={() => { router.push('/article') }}>Intersted</button>
                            </div>
                        </div>
                    </div>
                )
            })}

      </section>
    </div>
  )
}

export default news2