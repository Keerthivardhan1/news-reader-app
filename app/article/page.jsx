'use client'
import Image from 'next/image'
import React from 'react'

const article = () => {
  const temp = {
    source: {
    id: null,
    name: "Biztoc.com"
    },
    author: "barrons.com",
    title: "Tesla Has a Plan to Stay in the China EV Race",
    description: "Tesla preparing to launch a revamped version of its popular Model Y SUV at its plant in Shanghai, according to a report. #modely #shanghai",
    url: "https://biztoc.com/x/addb711fbb3eae1f",
    urlToImage: "https://c.biztoc.com/p/addb711fbb3eae1f/s.webp",
    publishedAt: "2023-12-27T10:30:15Z",
    content: "Tesla preparing to launch a revamped version of its popular Model Y SUV at its plant in Shanghai, according to a report.\r\n#modely#shanghai\r\nThis story appeared on barrons.com, ."

  }
  return (
    <div>
      <main className='flex flex-col items-center p-4 gap-4 w-full'>
      <img src={temp.urlToImage} alt="image"
      className='skeleton w-11/12'
       />
        <h1 className='skeleton bg-black '>{temp.title}</h1>
        <a className='skeleton ' href={`${temp.url}?source=${temp.source.id}`}></a>
        <span className='skeleton'>By {temp.author}</span>
        <p className='skeleton'>{temp.description}</p>
        <p className='skeleton'>{temp.content}</p>
        <span className='skeleton'>{temp.publishedAt}</span>
        <span className='skeleton'>for more :{temp.url}</span>

      </main>
    </div>
  )
}

export default article