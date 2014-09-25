(function() {
  // global app namespace variable
  window.bindrCfg = {
    i18n: {
      bindrName: "mtgbindr"
    }
  };

  // configure cookie defaults //
  $.cookie.json = true;                       // enable JSON read/write of our cookies
  $.cookie.defaults.path = "/";               // cookies should be accessible on domain
  $.cookie.defaults.domain = document.domain; // default to our document domain
})();