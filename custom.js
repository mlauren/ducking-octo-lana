
var loadButton = document.getElementById('load-more');

var feed = new Instafeed({
        get: 'user',
        userId: 24516360,
        accessToken: '24516360.467ede5.740c179cb3174990be0a365b18f37bf9',
        clientId: '8f7c904f3eb8494e91e5cdb727c11a66',
        target: 'target'
    });


document.addEventListener('load', function() {
  loadButton.addEventListener('click', function() {
    feed.next();
  });
});
feed.run();