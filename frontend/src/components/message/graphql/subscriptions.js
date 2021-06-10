import gql from 'graphql-tag';

export const CHAT_NEW_MESSAGE_SUBSCRIPTION = gql`
  subscription chat_new_message($chatId: ID) {
    chat_new_message(chatId: $chatId) {
      _id   
      chatId
      message
      sender {
          username
      }
      
    }
  }
`;