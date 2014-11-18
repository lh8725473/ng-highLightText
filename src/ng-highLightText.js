angular.module('ngHighLightText', []).directive('highLightText', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.highLightText(scope[attrs.highLightText].text, scope[attrs.highLightText])
      }
    }
  }
])