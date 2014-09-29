(function() {
  angular.module("bindr").controller("PageController", function(i18nSvc) {
    this.i18n = i18nSvc.pages;
  });
})();