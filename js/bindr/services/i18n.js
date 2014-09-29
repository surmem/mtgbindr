(function() {
  angular.module("bindr").service("i18nSvc", function() {
    return {
      navigation: {
        userMenu: "User Menu",
        myPages: "My Pages",
        myProfile: "My profile",
        myBindrs: "My binders",
        quickActions: "Quick Actions",
        createBindr: "New binder",
        importToBindr: "Import cards",
        signUpTitle: "Sign up for " + bindrCfg.i18n.bindrName,
        signInTitle: "Sign in to " + bindrCfg.i18n.bindrName,
        signOutTitle: "Sign out of " + bindrCfg.i18n.bindrName,
        firstname: "First name",
        lastname: "Last name",
        email: "Email address",
        confirmEmail: "Confirm your email address",
        username: "Username",
        chooseUsername: "Choose a username",
        password: "Password",
        choosePassword: "Choose a password",
        confirmPassword: "Confirm your password",
        signUp: "Sign Up",
        signIn: "Sign In",
        cancel: "Cancel",
        close: "Close",
        yes: "Yes",
        aboutToSignOut: "You are about to sign out of " + bindrCfg.i18n.bindrName + ".",
        areYouSure: "Are you sure?",
        errors: {
          signUp: {
            incomplete: "Please ensure you have filled out all the fields properly and try again.",
            invalid: "Encountered an error when registering your new account. Please check your information and try again.",
            unexpected: "Encountered an unexpected error when registering your account."
          },
          signIn: {
            incomplete: "Please enter your username and password and try again.",
            invalid: "Your username and/or password appears to be invalid. Please correct the error and try again.",
            unexpected: "Encountered an unexpected error when signing in."
          }
        }
      },
      pages: {
        faq: {
          title: "Wecome to " + bindrCfg.i18n.bindrName + ".",
          whatIs: "What is " + bindrCfg.i18n.bindrName + "?",
          whatIsDesc: "Simply put, " + bindrCfg.i18n.bindrName + " is a digital organization and sharing system for your Magic: the Gathering card collection.",
          howImport: "How do I get my cards into " + bindrCfg.i18n.bindrName + "?",
          howImportDesc: "You can either import your cards into " + bindrCfg.i18n.bindrName + " with our easy to use import tools, or you can build our your collection manually using our creation and search tools.",
          howManage: "How do I manage my collection?",
          howManageDesc: "As you add cards, " + bindrCfg.i18n.bindrName + " keeps track of your overall collection. You create individual binders as a means of organizing your collection. A binder can represent a view of a small set of your collection, a deck, or even your cube list. You can create, rename, or destroy binders at your discretion and " + bindrCfg.i18n.bindrName + " will keep track of your overall collection for you.",
          howShare: "How do I share my binders?",
          howShareDesc: "Using our sharing tools, you can share your binders with other " + bindrCfg.i18n.bindrName + " members, or with everybody via URL or through social services you already use every day.",
          howRemove: "Can I remove cards from " + bindrCfg.i18n.bindrName + "?",
          howRemoveDesc: "Yes, of course. Keep only the cards you want to in " + bindrCfg.i18n.bindrName + ". Should you want to remove cards you have added, removing them is quick and easy."
        },
        profile: {

        },
        bindrs: {

        }
      }
    };
  });
})();