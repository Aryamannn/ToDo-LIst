import { Schema } from 'mpongoose';

const TodoSchema = new Schema({
    title: {
        type: String,
        requoired: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model ('Todo', TodoSchema);

model.exports = Todo;