const { Schema, Types } = require('mongoose');
const { Reaction } = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: [Reaction]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('thoughts', thoughtSchema);

module.exports = Thought;
