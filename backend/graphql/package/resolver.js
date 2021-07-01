const Package = require("../../models/package");
const Gig = require("../../models/gig");

module.exports = {
    Query: {
        packages: async (_, { itemId }, req) => {
            const packages = await Package.find({ itemId })
            return packages
        }
    },
    Mutation: {
        create_package: async (_, { packageInput, itemId }, { userId }) => {
            if (!userId) throw new Error("unauthenticated");
            const package = await new Package({
                ...packageInput,
                itemId
            }).save();
            await Gig.findOneAndUpdate({ itemId }, { $push: { packages: package._id } })
            return package
        },
        update_package: async (_, { packageInput }, { userId }) => {
            if (!userId) throw new Error("unauthenticated");
            await Package.updateOne({ _id: packageInput._id }, packageInput)
            return true
        }
    }
}





