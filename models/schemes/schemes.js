const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: { type: String, required: true },
    sign: { type: String, required: true },
    color: { type: String, required: true },
    count: { type: Number, required: true },
    subCategories: {
        type: Object,
        of : {
            name: { type: String, required: true },
            sign: { type: String, required: true },
            color: { type: String, required: true },
            count: { type: Number, required: true }
        }
    }
})

const accountSchema = new Schema({
    accountName: { type: String, required: true },
    accountType: { type: String, required: true },
    count: { type: Number, required: true }
})

const budgetSchema = new Schema({
	budgetName: { type: String, required: true },
	count: { type: Number, required: true },
	budgetInterval: { type: [Date, Date], required: true },
	budgetSelectedCategories: { type: [categorySchema], required: true },
	budgetSign: {
		budgetSignColor: String,
		budgetSignIcon: String
	}
})

const transactionSchema = new Schema ({
    transactionType: { type: String, required: true },
    date: { type: Date, required: true },
    account: {
        type: Object,
        of: {
            _id: Schema.Types.ObjectId,
            accountName: String,
        },
        required: true
    },
    transferAccount: { _id: String, accountName: String },
    count: { type: Number, required: true },
    message: String,
    category: {
        type: Object,
        of : {
            name: { type: String, required: true },
            sign: { type: String, required: true },
            color: { type: String, required: true },
            subCategories: {
                name: { type: String, required: true },
                sign: { type: String, required: true },
                color: { type: String, required: true },
            }
        }
    },
    subCategory: {
        type: Object,
        of: {
            name: { type: String, required: true },
            sign: { type: String, required: true },
            color: { type: String, required: true },
        }
    }
})

const storiesSchema = new Schema({
    img: Buffer,
    header: String,
    description: String,
    background: Buffer
})

const Account = new mongoose.model('Card', accountSchema)
const Transaction = new mongoose.model('Transaction', transactionSchema)
const Category = new mongoose.model('Category', categorySchema)
const Story = new mongoose.model('Story', storiesSchema)
const Budget = new mongoose.model('Budget', budgetSchema)

module.exports = {
    schemes: {
    categorySchema,
    accountSchema,
    transactionSchema,
    storiesSchema,
	budgetSchema
    },
    models: {
        Account,
        Transaction,
        Category,
        Story,
	    Budget
    }
}