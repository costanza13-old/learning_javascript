'use strict';
// es6 feature: block-scoped "let" declaration
const sentences = [
  { subject: 'Email', verb: 'is', object: 'nice' },
  { subject: 'Email', verb: 'is', object: 'twice' },
];

// es6 feature: object destructuring
function say({ subject, verb, object }) {
  // es6 feature: template strings
  // note that quotes below are backticks (`), not single quotes (')
  console.log(`${subject} ${verb} ${object}`);
}
// es6 feature: for.. of
for(let s of sentences) {
  say(s);
}

