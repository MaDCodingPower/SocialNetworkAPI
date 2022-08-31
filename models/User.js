const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unqiue: true
    },
    email: {
      type: String,
      required: true,
      unqiue: true,
      match: /.+\@.+\..+/
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thoughts',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
  .virtual('friendsList')
  .get(function () {
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;
