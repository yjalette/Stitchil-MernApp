const Message = require("../../models/message");
const Chat = require("../../models/chat");

module.exports = {
    Query: {
        chats: async (_, { }, req) => {
            try {
                return await Chat.find({ members: { $in: req.userId } }, { 'messages': { $slice: 1 } })
                    .populate({ path: 'members', select: 'username profileImage' })
                    .populate({ path: 'messages', populate: 'sender', options: { $sort: { "createdAt": -1 } } })
            } catch (error) {
                throw new Error(error)
            }
        },
    },
    Mutation: {
        updateChat: async (_, { message, docId }, { userId }) => {
            if (!userId) throw new Error("unauthenticated");
            const newMessage = await Message({
                message,
                sender: userId,
                createdAt: new Date()
            }).save();
            await Chat.findByIdAndUpdate(docId, { $push: { messages: newMessage._id } });
            return true
        },
        deleteChat: async ({ chatId, msgId }, req) => {
            if (!req.userId) throw new Error("unauthenticated");
            try {
                if (msgId) {
                    const chat = await Chat.findById(chatId);
                    const fileToUpdate = await chat.messages.id(msgId);
                    await fileToUpdate.remove();
                    chat.save();
                }
                else await Chat.findById(chatId).deleteOne();
                return true;
            } catch (error) {
                throw new Error(error)
            }

        }
    }


}




