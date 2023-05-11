import React, {useState}  from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";


const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {...post, id:Date.now()}
        setPost({title:'', body: ''});
        create(newPost)
    }

    return (
        <form>
            {/*управляемый компонент*/}
            <MyInput type='text' onChange={e=>setPost({...post, title: e.target.value})} value={post.title} placeholder='Название поста'/>
            {/*не управляемый компонент*/}
            {/*<MyInput ref={bodyInputRef} type='text' placeholder='Описание поста'/>*/}
            <MyInput value={post.body} onChange={e=>setPost({...post, body: e.target.value})} type='text' placeholder='Описание поста'/>
            <MyButton onClick={addNewPost} >Создать пост</MyButton>
        </form>
    );
};

export default PostForm;
