(function() {
  angular.module("bindr").controller("NavigationController", function(i18nService) {

    // controller-scoped variables //
    this.i18n = i18nService.navigation;
    this.signInError = false;
    this.signedIn = false;

    // event listeners //
    $("#bindr-sign-in-dlg").on("shown.bs.modal", function() {
      $("#username_input").focus();
    });

    // public methods //
    this.showSignIn = function() {
      $("#bindr-sign-in-dlg").modal("show");
    };

    this.showSignOut = function() {
      $("#bindr-sign-out-dlg").modal("show");
    };

    this.checkForEnter = function(evt) {
      // when enter pressed, attempt to sign in
      if(evt.keyCode === 13) {
        this.signIn();
      }
    };

    this.signIn = function() {
      var self = this,
          usr = $("#username_input").val(),
          pwd = $("#password_input").val();
      self._clearSignInError();
      if(self._validSignIn(usr, pwd)) {
        self._authenticate(usr, pwd)
          .done(function(result) {
            if(result && !result.code && !result.errorCode) {
              $.cookie("bindr", {username: usr});

              // if authenticated transition UI to signed in
              self._transitionToSignedIn();
            } else{
              // show proper authentication error based on messageCode
              self._setSignInError(self.i18n.errors.signInInvalid);
            }
          })
          .fail(function(error) {
            // show proper authentication failure error
            self._setSignInError(self.i18n.errors.signInUnexpected);
          });
      } else {
        self._setSignInError(self.i18n.errors.signInIncomplete);
      }
    };

    this.signOut = function() {
      $.removeCookie("bindr");

      this._transitionToSignedOut();
    };

    this._checkForSignedIn = function() {
      this.signedIn = $.cookie("bindr");
      if(this.signedIn) {
        this._transitionToSignedIn();
      }
    };

    // private methods //
    this._authenticate = function(usr, pwd) {
      // TODO - make real authentication call

      // simulate authentication call promise
      return $("<body>").promise();
    };

    this._setSignInError = function(message) {
      $("#bindr-sign-in-error").text(message);
      this.signInError = true;
    };

    this._clearSignInError = function() {
      $("#bindr-sign-in-error").text("");
      this.signInError = false;
    };

    this._validSignIn = function(usr, pwd) {
      return (usr && usr.length > 0 && pwd && pwd.length > 0);
    };

    this._transitionToSignedIn = function() {
      $("#bindr-sign-in-dlg").modal("hide");

      // simulate sign in success
      $("#bindr-sign-in").addClass("display_none");
      $("#bindr-user-menu").removeClass("display_none");
      $("#bindr-sign-out").removeClass("display_none");
    };

    this._transitionToSignedOut = function() {
      $("#bindr-sign-out-dlg").modal("hide");

      // simulate sign out success
      $("#bindr-sign-in").removeClass("display_none");
      $("#bindr-user-menu").addClass("display_none");
      $("#bindr-sign-out").addClass("display_none");
    };

    // navbar initialization code //
    this._checkForSignedIn();
  });
})();