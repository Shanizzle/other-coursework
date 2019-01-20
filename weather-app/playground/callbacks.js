var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Shannen'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, blah => {
  console.log(blah);
});
