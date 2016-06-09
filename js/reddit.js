var reddit = require('../data.json');

// Write your solutions below

var sum = reddit.data.children.reduce(function(total, post, idx) {
  return total + post.data.score;
});

console.log(sum);
