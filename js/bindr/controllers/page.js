(function() {
  angular.module("bindr").controller("PageController", function(i18nService) {
    this.i18n = i18nService.pages;
  });
})();