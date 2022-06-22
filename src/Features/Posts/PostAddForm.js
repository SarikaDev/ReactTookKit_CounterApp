import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allUserSelectors, userAdded } from '../Users/UserSlice';
import { postAdded } from './PostSlice';
import { Form, FormGroup, Input, Button, Label, Col } from 'reactstrap';

const PostAddForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [author, setAuthor] = useState('');
    const userData = useSelector(allUserSelectors);

    const usersOption = userData.map((user) =>
        <option key={user.id} value={user.id}>{user.name}</option>
    )

    const handleTitleChange = useCallback((e) => { setTitle(e.target.value) }, []);
    const handleContentChange = useCallback((e) => { setContent(e.target.value) }, []);
    const handleAuthorChange = useCallback((e) => { setUserId(e.target.value) }, []);
    const handleCreateChange = useCallback((e) => { setAuthor(e.target.value) }, []);


    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (title && content && userId) {
            dispatch(postAdded(title, content, userId));
            setTitle('');
            setContent('')
        };
    }, [content, dispatch, title, userId]);


    const handleEnter = useCallback((e) => {
        e.preventDefault();
        if (author) {
            dispatch(userAdded(author));
            setAuthor('');
        };

    }, [author, dispatch])
    const canSave = Boolean(title, content, userId);

    return (
        <>
            <div className='m-4 pb-5 pt-2 border'>
                <h3 className='text-center mb-4'>Create Auther </h3>
                <Form onSubmit={handleEnter} row>
                    <FormGroup className='m-5 '>
                        <Input type='text' placeholder='Create Here ...' onChange={handleCreateChange} value={author} />
                        <Button className='btn-success mt-3 ' type='submit'>Enter</Button>
                    </FormGroup>
                </Form>
            </div>
            <div className='m-3 p-5 border'>
                <h3 className='text-center'>Create Post </h3>
                <Form onSubmit={handleSubmit} >
                    <FormGroup row>
                        <Label className="me-sm-2" sm={2}>Title</Label>
                        <Col sm={10}>
                            <Input type='text' placeholder='Heading...' onChange={handleTitleChange} value={title} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label className='me-sm-2' sm={2}>Cotent</Label>
                        <Col sm={10}>
                            <Input type='text' placeholder='Description...' onChange={handleContentChange} value={content} />
                        </Col>
                    </FormGroup>
                    <Label className='me-sm-2'>Select Author</Label>
                    <FormGroup row>
                        <Col sm={10}>
                            <Input
                                type="select"
                                onChange={handleAuthorChange}
                                value={userId}
                            >
                                <option>Select</option>
                                {usersOption}

                            </Input>
                        <Button className='btn-success mt-3 ' type='submit' disabled={!canSave} >submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </>
    )
}

export default PostAddForm;