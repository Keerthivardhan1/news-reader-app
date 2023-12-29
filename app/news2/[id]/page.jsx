import React from 'react'
import getArticle from '@/app/libs/getArticle'

// href for this page = '/news2/${id}' or news2/1241234someId1324

const FullArticle = async ({param:{id}}) => {
    const articleData =  await getArticle(id)
  return (
    <div>FullArticle</div>
  )
}

export default FullArticle