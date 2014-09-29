(function() {
  angular.module("bindr").controller("NavigationCtrl", function(i18nSvc) {

    // controller-scoped variables //
    this.i18n = i18nSvc.navigation;
    this.signUpError = false;
    this.signInError = false;
    this.signedIn = false;

    // public methods //

    /**
     * Show the sign up dialog.
     */
    this.showSignUp = function() {
      this._clearSignUp();

      $("#bindr-sign-in-dlg").modal("hide");
      $("#bindr-sign-up-dlg").modal("show");
    };

    /**
     * Hide the sign up dialog and re-show the sign in dialog.
     */
    this.hideSignUp = function() {
      $("#bindr-sign-up-dlg").modal("hide");
      this.showSignIn();
    };

    /**
     * Show the sign in dialog.
     */
    this.showSignIn = function() {
      this._clearSignIn();

      $("#bindr-sign-in-dlg").modal("show");
    };

    /**
     * Show the sign out dialog.
     */
    this.showSignOut = function() {
      $("#bindr-sign-out-dlg").modal("show");
    };

    /**
     * Check a keystroke event to determine whether it was the ENTER key.
     * @param evt The keyboard event.
     * @param workflow The id of the workflow to execute: 'signin', 'signup'
     */
    this.checkForEnter = function(evt, workflow) {
      // when enter pressed, attempt to sign in
      if(evt.keyCode === 13) {
        if(workflow && workflow === "signup") {
          this.signUp();
        } else {
          this.signIn();
        }
      }
    };

    /**
     * Register a new user with the application.
     */
    this.signUp = function() {
      var self = this,
          newUser = {
            firstName: $("#signup-firstname").val(),
            lastName: $("#signup-lastname").val(),
            email: $("#signup-email").val(),
            confirmEmail: $("#signup-confirmemail").val(),
            username: $("#signup-username").val(),
            passwordd: $("#signin-password").val(),
            confirmPassword: $("#signin-confirmpassword").val()
          },
          credentials = {
            username: newUser.username,
            password: newUser.password
          };
      self._clearSignUpError();
      if(self._validNewUser(newUser)) {
        self._registerUser(newUser)
          .done(function(registerResult) {
            if(registerResult && !registerResult.code && !registerResult.errorCode) {
              self.signIn(credentials);
            } else {
              // show proper registration error based on messageCode
              self._setSignUpError(self.i18n.errors.signUp.invalid);
            }
          })
          .fail(function(error) {
            // show proper registration failure error
            self._setSignUpError(self.i18n.errors.signUp.unexpected);
          });
      }
    };

    /**
     * Sign the user into the application.
     */
    this.signIn = function(userCredentials) {
      var self = this,
          credentials = userCredentials || {
            usr: $("#signin-username").val(),
            pwd: $("#signin-password").val()
          };
      self._clearSignInError();
      if(self._validSignIn(credentials)) {
        self._authenticate(credentials)
          .done(function(result) {
            if(result && !result.code && !result.errorCode) {
              self._clearSignIn();
              $.cookie("bindr", {username: credentials.usr});

              // if authenticated transition UI to signed in
              self._transitionToSignedIn();
            } else {
              // show proper authentication error based on messageCode
              if(!userCredentials) {
                self._setSignInError(self.i18n.errors.signIn.invalid);
              }
            }
          })
          .fail(function(error) {
            // show proper authentication failure error
            if(!userCredentials) {
              self._setSignInError(self.i18n.errors.signIn.unexpected);
            }
          });
      }
    };

    /**
     * Sign the user out of the application.
     */
    this.signOut = function() {
      bindrCfg.cookie = null;
      $.removeCookie("bindr");

      this._transitionToSignedOut();
    };

    // private methods //

    /**
     * Clear the sign up form.
     * @private
     */
    this._clearSignUp = function() {
      $("#signup-firstname").val("");
      $("#signup-lastname").val("");
      $("#signup-email").val("");
      $("#signup-confirmemail").val("");
      $("#signup-username").val("");
      $("#signup-password").val("");
      $("#signup-confirmpassword").val("");
    };

    /**
     * Clear the sign in form.
     * @private
     */
    this._clearSignIn = function() {
      $("#signin-username").val("");
      $("#signin-password").val("");
    };

    /**
     * Check for the presence of an already authenticated user. If one is present ensure the UI represents this.
     * @private
     */
    this._checkForAuthenticatedUser = function() {
      bindrCfg.cookie = $.cookie("bindr");
      this.signedIn = !!(bindrCfg.cookie);
      if(this.signedIn) {
        this._transitionToSignedIn();
      }
    };

    /**
     * The newUser parameter is an object with the following properties:
     *   - firstName
     *   - lastName
     *   - email
     *   - username
     *   - password
     * @param newUser Object
     * @returns promise
     * @private
     */
    this._registerUser = function(newUser) {
      // TODO - make real registration call

      // simulate registration call promise
      return $("<body>").promise();
    };

    /**
     * The credentials parameter is an object with the following properties:
     *   - username
     *   - password
     * @param credentials
     * @returns promise
     * @private
     */
    this._authenticate = function(credentials) {
      // TODO - make real authentication call

      // simulate authentication call promise
      return $("<body>").promise();
    };

    /**
     * Set the sign up dialog error alert message.
     * @param message String
     * @private
     */
    this._setSignUpError = function(message) {
      $("#bindr-sign-up-error").text(message);
      this.signUpError = true;
    };

    /**
     * Set the sign in dialog error alert message.
     * @param message String
     * @private
     */
    this._setSignInError = function(message) {
      $("#bindr-sign-in-error").text(message);
      this.signInError = true;
    };

    /**
     * Clear sign up error alert.
     * @private
     */
    this._clearSignUpError = function() {
      $("#bindr-sign-up-error").text("");
      this.signUpError = false;
    };

    /**
     * Clear sign in error alert.
     * @private
     */
    this._clearSignInError = function() {
      $("#bindr-sign-in-error").text("");
      this.signInError = false;
    };

    /**
     * Determine if the supplied new user properties are contain enough information to proceed with account registration.
     * @param newUser Object containing properties for registering the user: first name, last name, email, username, and password.
     * @returns {boolean}
     * @private
     */
    this._validNewUser = function(newUser) {
      var isValid = false;
      // TODO - validate here
      if(!isValid) {
        this._setSignUpError(this.i18n.errors.signUp.incomplete);
      }
      return isValid;
    };

    /**
     * Determine if the supplied credentials are set and enough to proceed with sign in.
     * @param credentials Object containing username and password properties.
     * @returns boolean
     * @private
     */
    this._validSignIn = function(credentials) {
      var isValid = (credentials.username && credentials.username.length > 0 &&
                     credentials.password && credentials.password.length > 0);
      // handle error state
      if(!isValid) {
        this._setSignInError(this.i18n.errors.signInIncomplete);
      }
      return isValid;
    };

    /**
     * Transition navigation to signed in state.
     * @param newUser boolean which is true if the user signing in is a brand new user.
     * @private
     */
    this._transitionToSignedIn = function(newUser) {
      if(newUser) {
        $("#bindr-sign-up-dlg").modal("hide");
      } else {
        $("#bindr-sign-in-dlg").modal("hide");
      }

      // simulate sign in success
      $("#bindr-sign-in").addClass("display_none");
      $("#bindr-user-menu").removeClass("display_none");
      $("#bindr-sign-out").removeClass("display_none");

      // TODO - transition page to landing page
    };

    /**
     * Transition navigation to signed out state.
     * @private
     */
    this._transitionToSignedOut = function() {
      $("#bindr-sign-out-dlg").modal("hide");

      // simulate sign out success
      $("#bindr-sign-in").removeClass("display_none");
      $("#bindr-user-menu").addClass("display_none");
      $("#bindr-sign-out").addClass("display_none");

      // TODO - transition page?
    };

    /**
     * Navigation initialization method.
     */
    this._init = function() {
      this._checkForAuthenticatedUser();

      // setup event listeners
      $("#bindr-sign-up-dlg").on("shown.bs.modal", function() {
        $("#signup-firstname").focus();
      });
      $("#bindr-sign-in-dlg").on("shown.bs.modal", function() {
        $("#signin-username").focus();
      });
    };

    // initialize the navigation
    this._init();
  });
})();