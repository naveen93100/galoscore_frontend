import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Autoplay } from "swiper/modules";
import { useEffect } from "react";


const Blog = () => {

    const posts = [
        {
            id: 1,
            title: 'How GALO Score Helps Freshers',
            excerpt: 'Learn how GALO Score helps students showcase their skills and stand out to recruiters.',
            date: '2025-08-25',
            author: 'GALO Team',
            cover: '/hiring.png',
        },
        {
            id: 2,
            title: 'Preparing for Domain Tests',
            excerpt: 'Tips and tricks to perform well in GALO Score domain-specific tests.',
            date: '2025-07-30',
            author: 'GALO Team',
            cover: '/interview.png',
        },
        {
            id: 3,
            title: 'What Recruiters Want',
            excerpt: 'Understand what recruiters look for when hiring based on GALO Scores.',
            date: '2025-06-12',
            author: 'GALO Team',
            cover: '/team.png',
        },
       
    ];

    useEffect(()=>{
       window.scrollTo(0,0);
    },[]);

    return (
        <div className=" bg-gradient-to-b min-h-screen from-yellow-50 via-white to-yellow-50 pt-18 ">
            <div className="space-y-10">
                <div className="border w-full overflow-hidden">
                    <Swiper
                        className="aspect-[16/9] sm:aspect-[25/9]"
                        modules={[Navigation, Autoplay]}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                    >
                        {[{ img: 'https://www.perfectiongeeks.com/image/blogslider-img2.webp' },
                        { img: 'https://www.perfectiongeeks.com/image/blogslider-img1.webp' },
                        { img: 'https://i.pinimg.com/736x/77/69/ae/7769aeb911e63e0825a2b6893f95cc4e.jpg' }]
                            .map((item, index) => (
                                <SwiperSlide>
                                    <img className="w-full h-full object-cover" src={item.img} alt={`Blog${index + 1}`} />
                                </SwiperSlide>
                            ))}

                    </Swiper>
                </div>

                <div className="max-w-5xl mx-auto px-3">

                    <header className="mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 uppercase">Blogs</h1>
                        <p className="mt-4 text-md text-gray-700 max-w-2xl mx-auto font-semibold uppercase">
                            Explore insights, tips, and updates designed to help students and recruiters get the most from GALO Score.
                        </p>
                    </header>

                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-2">
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className=" rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-1 border border-yellow-300"
                            >
                                <img
                                    src={post.cover}
                                    alt={post.title}
                                    className="w-full h-70 object-contain"
                                />
                                <div className="p-5 flex flex-col justify-between border-t-1">
                                    <div>
                                        <div className="flex items-center justify-between text-xs text-yellow-800 mb-2">
                                            <span>{post.author}</span>
                                            <time>{post.date}</time>
                                        </div>
                                        <h3 className="text-lg font-semibold text-yellow-900 leading-snug">{post.title}</h3>
                                        <p className="mt-2 text-sm text-yellow-800">{post.excerpt}</p>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <button className="text-gray-700 font-medium bg-yellow-200 px-2 py-1 rounded-xl">
                                            Read
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;


