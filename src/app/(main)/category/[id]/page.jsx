import LeftSidebar from '@/components/homepage/news/LeftSidebar'
import NewsCard from '@/components/homepage/news/NewsCard'
import RightSidebar from '@/components/homepage/news/RightSidebar'
import { getCategories, getNewsByCategoryId } from '@/lib/data'
import React from 'react'



const NewsCategoryPage = async ({ params }) => {


    const { id } = await params
    console.log(id, "id")


    const news = await getNewsByCategoryId(id)
    console.log(news, "news")
    const categories = await getCategories()
    return (
        <div className="grid grid-cols-12 gap-4 my-[60px] container mx-auto">
            <div className=" col-span-3">
                <LeftSidebar categories={categories} activeId={id} />
            </div>

            <div className="font-bold col-span-6 bg-purple-100">
                <h2 className="font-bold text-lg"> Dragon News Home</h2>
                <div className="space-y-4 mt-6">
                    {
                        news.length > 0 ? news.map((n) => {
                            return <NewsCard key={n._id} news={n}> </NewsCard>
                        }) : (<h2 className='font-bold text-4xl text-center my-7'>No News Found</h2>)
                    }
                </div>

            </div>
            <div className="col-span-3">
                <RightSidebar />
            </div>
        </div>
    )
}

export default NewsCategoryPage