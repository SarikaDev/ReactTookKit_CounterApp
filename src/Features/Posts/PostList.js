import React from 'react';
import { useSelector } from "react-redux";
import { allPostSelector } from './PostSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import {  Card, CardTitle, CardHeader, CardBody } from 'reactstrap';
const PostList = () => {
    const postData = useSelector(allPostSelector);
    const renderPost = postData.map((post) => {
        return (
            <>
                <Card key={post.id} className='m-5 '>
                    <CardHeader 
                     style={{
                        backgroundColor: '',
                        borderColor: 'black'
                      }}
                    tag='h3' className='text-center'>{post.title}</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5">  {post.content}</CardTitle>
                         <PostAuthor userId={post.userId} />
                         <TimeAgo timestamp={post.date} />
                    </CardBody>
                </Card>
            </>
        )
    })
    return (
        <div>
            <h3 className='text-danger text-center'>NOTES</h3>
            {renderPost}
        </div>
    )
}

export default PostList;
