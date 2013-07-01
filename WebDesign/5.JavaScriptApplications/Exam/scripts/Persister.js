// Generated by CoffeeScript 1.4.0
(function() {

  this.Persister = (function() {

    function Persister(rootURL, http, encode) {
      this.rootURL = rootURL;
      this.http = http;
      this.encode = encode;
      if (sessionStorage.sessionKey != null) {
        this.sessionKey = sessionStorage.sessionKey;
      }
    }

    Persister.prototype.login = function(data) {
      var url,
        _this = this;
      url = this.rootURL + 'user/login/';
      data = _.clone(data);
      data.authCode = this.encode(data.username + data.password);
      return this.http.postJSON(url, data).done(function(data) {
        _this.sessionKey = data.sessionKey;
        return sessionStorage.sessionKey = data.sessionKey;
      });
    };

    Persister.prototype.register = function(data) {
      var url;
      url = this.rootURL + 'user/register/';
      data = _.clone(data);
      data.authCode = this.encode(data.username + data.password);
      return this.http.postJSON(url, data);
    };

    Persister.prototype.logout = function() {
      var url,
        _this = this;
      url = this.rootURL + 'user/logout/' + this.sessionKey;
      return this.http.getJSON(url).done(function() {
        delete _this.sessionKey;
        return delete sessionStorage.sessionKey;
      });
    };

    Persister.prototype.isLoggedIn = function() {
      return !!this.sessionKey;
    };

    Persister.prototype.createGame = function(data) {
      var url;
      url = this.rootURL + 'game/create/' + this.sessionKey;
      data = _.clone(data);
      if (data.password != null) {
        data.password = this.encode(data.password);
      }
      return this.http.postJSON(url, data);
    };

    Persister.prototype.joinGame = function(data) {
      var url;
      url = this.rootURL + 'game/join/' + this.sessionKey;
      data = _.clone(data);
      if (data.password != null) {
        data.password = this.encode(data.password);
      }
      return this.http.postJSON(url, data);
    };

    Persister.prototype.getOpenGames = function() {
      var url;
      url = this.rootURL + 'game/open/' + this.sessionKey;
      return this.http.getJSON(url);
    };

    Persister.prototype.getMyActiveGames = function() {
      var url;
      url = this.rootURL + 'game/my-active/' + this.sessionKey;
      return this.http.getJSON(url);
    };

    return Persister;

  })();

}).call(this);
