// Generated by CoffeeScript 1.4.0
(function() {
  var form, scope;

  form = $('.js-register');

  scope = form.closest('.js-view').data('scope');

  form.submit(function(e) {
    var data;
    e.preventDefault();
    data = form.serializeObject();
    form.find('input, button').attr('disabled', 'disabled');
    return setTimeout(function() {
      return scope.persister.register(data).done(function() {
        location.hash = '#!/sign-in.html';
        return console.log('Register success.');
      }).fail(function(err) {
        var message, text;
        message = JSON.parse(err.responseText).Message;
        text = $('<p class="text-error" />').text(message);
        form.find('input, button').removeAttr('disabled');
        form.append(text);
        console.log('Register error.');
        return setTimeout(function() {
          return text.fadeOut();
        }, 2000);
      });
    }, 500);
  });

}).call(this);
