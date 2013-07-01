// Generated by CoffeeScript 1.4.0
(function() {
  var game, gameItemTemplate, scope;

  game = $('.js-game');

  scope = game.closest('.js-view').data('scope');

  if (!scope.persister.isLoggedIn()) {
    location.hash = '#!/';
    return;
  }

  $('.js-logout').click(function() {
    return scope.persister.logout().then(function() {
      return location.hash = '#!/';
    });
  });

  $('.js-create-game').submit(function(e) {
    var data,
      _this = this;
    e.preventDefault();
    data = $(this).serializeObject();
    $(this).find('input, button').attr('disabled', 'disabled');
    return scope.persister.createGame(data).then(function() {
      var text;
      text = $('<p class="text-success" />').text('Game created.');
      $(_this).append(text);
      return setTimeout(function() {
        $(_this).find('input, button').removeAttr('disabled');
        return text.fadeOut();
      }, 500);
    });
  });

  gameItemTemplate = $('#js-game-item').text();

  scope.persister.getOpenGames().done(function(games) {
    var html;
    html = games.map(function(game) {
      return Mustache.render(gameItemTemplate, game);
    }).join('');
    return $('.js-open-games').html(html).find('li').click(function(e) {
      e.preventDefault();
      return $('.js-join-game').modal('show');
    });
  });

  scope.persister.getMyActiveGames().done(function(games) {
    var html;
    html = games.map(function(game) {
      return Mustache.render(gameItemTemplate, game);
    }).join('');
    return $('.js-my-active-games').html(html).find('li').click(function(e) {
      return e.preventDefault();
    });
  });

}).call(this);
