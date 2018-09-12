document.addEventListener("DOMContentLoaded", function() {
  var summonButton = document.querySelector('.summon-cats');
  summonButton.addEventListener('click', retrieveKitten);

  function retrieveKitten() {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json/',
      method: 'GET',
      data: {},
      dataType: 'json'
    }).done(function (responseData) {
      var kittens = responseData.cats;
      var catDivs = document.querySelectorAll('.cat-box');
      for (var i = 0; i < kittens.length; i++) {
        var newImg = document.createElement('img');
        newImg.src = kittens[i].photo;
        newImg.alt = "Photo of " + kittens[i].name;
        catDivs[i].append(newImg);
      }
    })
  }
});
