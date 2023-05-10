import { useContext, useState } from 'react';

import { IUser } from '../../interfaces/interfaces';
import { StyledForm, StyledInput, StyledButton } from './styles';
import { CurrentUserContext } from '../../utils/CurrentUserContext';
import mainApi from '../../utils/MainApi';

interface IAddPostForm {
    onAddPost: Function;
}
const AddPostForm: React.FC<IAddPostForm> = ({ onAddPost }) => {
    // const currentUserCtx = useContext(CurrentUserContext);
    const [postData, setPostData] = useState({
        title: '',
        text: '',
        image: '',
    });
    const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPostData((prevPostData) => ({ ...prevPostData, [name]: value }));
    };
    const handleAddPost = (e: React.FormEvent) => {
        e.preventDefault();
        let data;
        if (postData.image === '') {
            data = { title: postData.title, text: postData.text };
        } else {
            data = postData;
        }
        mainApi.addPost(data).then((newPost) => {
            onAddPost(e, newPost);
            // console.log(res);
        });
    };
    return (
        <StyledForm onSubmit={handleAddPost}>
            <StyledInput
                type='text'
                onChange={handleFormDataChange}
                name='title'
                value={postData.title}
                placeholder='Заголовок поста'
            ></StyledInput>
            <StyledInput
                type='text'
                onChange={handleFormDataChange}
                name='text'
                value={postData.text}
                placeholder='Текст поста'
            ></StyledInput>

            <StyledInput
                type='url'
                onChange={handleFormDataChange}
                name='image'
                value={postData.image}
                placeholder='Ссылка на изображение для поста'
            ></StyledInput>
            <StyledButton type='submit'>Создать пост</StyledButton>
        </StyledForm>
    );
};

export default AddPostForm;
