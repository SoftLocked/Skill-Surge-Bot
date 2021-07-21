const mongo = require('../mongo.js');
const messageCountSchema = require('../Schemas/messageCountSchema')

module.exports = client => {

    client.on('message', async message => {
        const { author } = message
        console.log('AUTHOR: ', author);
        const { username, id } = author;

        await mongo().then(async mongoose => {
            try {
                await messageCountSchema.findOneAndUpdate({
                    _name: username,
                    _id: id,
                }, {
                    $inc: {
                        'messageCount': 1
                    }
                }, {
                    upsert: true
                }).exec()
            } finally {
                mongoose.connection.close();
            }
        })
    })

}