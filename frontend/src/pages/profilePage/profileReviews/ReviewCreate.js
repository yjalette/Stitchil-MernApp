import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import useForm from '../../../custom_hooks/useForm';
import UserAvatar from '../../../components/user/UserAvatar';
import ReviewRate from './ReviewRate';
import MessageForm from '../../../components/message/MessageForm';
import { initState_reviews } from '../../../constants/initStates';
import AuthContext from '../../../context/Auth-context';
import useMutationHook from '../../../custom_hooks/useMutationHook';
import { CREATE_REVIEW_MUTATION } from '../graphql/mutations';

const ReviewCreate = ({ addComment }) => {
    const { username } = useParams();
    const { user } = useContext(AuthContext);
    const { inputs, setInputs, handleChange, handleSubmit } = useForm(initState_reviews, onSubmit);
    const { post } = useMutationHook(CREATE_REVIEW_MUTATION, onPostCompleted);

    const handleRating = nextValue => {
        console.log(nextValue)
        setInputs({
            ...inputs,
            rating: nextValue
        })
    }

    function onPostCompleted() {
        addComment({ message: inputs.message, sender: { profileImage: user.profileImage, username: user.username } });
        setInputs(initState_reviews);
    }

    function onSubmit() {
        post({ variables: { reviewInput: inputs, recipient: username } })
    }

    console.log(inputs)

    return (
        <MessageForm onSubmit={handleSubmit} onChange={handleChange} message={inputs.message} msg_class="reviewCreate">
            <Container className="reviewItem__header">
                <UserAvatar profileImage={user.profileImage} username={user.username} />
                <ReviewRate onRate={handleRating} />
            </Container>
        </MessageForm>

    )
}

export default ReviewCreate;
