import React from 'react';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: 'How GALO Score Helps Freshers',
            excerpt: 'Learn how GALO Score helps students showcase their skills and stand out to recruiters.',
            date: '2025-08-25',
            author: 'GALO Team',
            cover: '/hiring.png',
            tags: ['Career', 'Students']
        },
        {
            id: 2,
            title: 'Preparing for Domain Tests',
            excerpt: 'Tips and tricks to perform well in GALO Score domain-specific tests.',
            date: '2025-07-30',
            author: 'GALO Team',
            cover: '/interview.png',
            tags: ['Preparation', 'Guides']
        },
        {
            id: 3,
            title: 'What Recruiters Want',
            excerpt: 'Understand what recruiters look for when hiring based on GALO Scores.',
            date: '2025-06-12',
            author: 'GALO Team',
            cover: '/team.png',
            tags: ['Recruiters', 'CV']
        },
    ];

    return (
        <div className=" bg-gradient-to-b from-yellow-50 via-white to-yellow-50 py-12 px-4 md:px-8 lg:px-16 pt-30">
            <div className="max-w-6xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Blogs</h1>
                    <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                        Explore insights, tips, and updates designed to help students and recruiters get the most from GALO Score.
                    </p>
                </header>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className=" rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-1 border border-yellow-300"
                        >
                            <img
                                src={post.cover}
                                alt={post.title}
                                className="w-full h-48 object-contain"
                            />
                            <div className="p-5 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between text-xs text-yellow-800 mb-2">
                                        <span>{post.author}</span>
                                        <time>{post.date}</time>
                                    </div>
                                    <h3 className="text-lg font-semibold text-yellow-900 leading-snug">{post.title}</h3>
                                    <p className="mt-2 text-sm text-yellow-800">{post.excerpt}</p>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <button className="text-gray-700 bg-yellow-200 px-2 py-1 rounded-xl">
                                        Read
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;


