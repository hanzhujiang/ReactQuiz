import React, { useState, useEffect } from 'react';

const NewsFeed = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1); // Keep track of the current page for API call
    const [loading, setLoading] = useState(false); // To avoid multiple concurrent API calls

    useEffect(() => {
        // Function to load data initially and whenever 'page' changes
        const loadData = async () => {
            setLoading(true);
            const newPosts = await fetchMorePosts(page);
            setPosts([...posts, ...newPosts]);
            setLoading(false);
        };
        
        loadData();
    }, [page]);

    const handleScroll = (event) => {
        // If we're near the bottom of the list, load more posts
        if (window.innerHeight + document.documentElement.scrollTop
            !== document.documentElement.offsetHeight || loading) {
            return;
        }
        
        setPage(prev => prev + 1);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    {post.content}
                    {/* Render your post content */}
                </div>
            ))}
            {loading && <p>Loading more...</p>}
        </div>
    );
};

// Mock API call function
const fetchMorePosts = async (page) => {
    // Here, replace this mock call with an actual fetch to your backend API.
    // Use the 'page' parameter to get the appropriate page of results.
    return fetch(`/api/posts?page=${page}`).then(res => res.json());
};

export default NewsFeed;
