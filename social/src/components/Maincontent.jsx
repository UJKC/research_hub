import React from 'react';
import NewPost from './NewPost';
import PostCard from './Post';

function Content() {
    return (
        <div class="col-md-9 col-lg-10 p-3 text-center">
        <h2>Main Content</h2>
        <NewPost />
        <PostCard />
    </div>
  );
}
  
  export default Content;