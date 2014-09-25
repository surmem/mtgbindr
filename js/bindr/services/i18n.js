(function() {
  angular.module("bindr").service("i18nService", function() {
    return {
      navigation: {
        userMenu: "User Menu",
        myPages: "My Pages",
        myProfile: "My profile",
        myBindrs: "My binders",
        quickActions: "Quick Actions",
        createBindr: "New binder",
        importToBindr: "Import cards",
        signInTitle: "Sign in to " + bindrCfg.i18n.bindrName,
        signOutTitle: "Sign out of " + bindrCfg.i18n.bindrName,
        username: "Username",
        password: "Password",
        signIn: "Sign In",
        cancel: "Cancel",
        close: "Close",
        yes: "Yes",
        aboutToSignOut: "You are about to sign out of " + bindrCfg.i18n.bindrName + ".",
        areYouSure: "Are you sure?",
        errors: {
          signInIncomplete: "Please enter your username and password and try again.",
          signInInvalid: "Your username and/or password appears to be invalid. Please correct the error and try again.",
          signInUnexpected: "Encountered an unexpected error when signing in."
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
          howRemoveDesc: "Yes, of course. Keep only the cards you wish to in " + bindrCfg.i18n.bindrName + ". Should you want to remove cards you have added, removing them is quick and easy."
        },
        profile: {

        },
        bindrs: {

        }
      }
    };
  });
})();