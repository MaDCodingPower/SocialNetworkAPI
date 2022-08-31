const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thoughts',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'friends',
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
