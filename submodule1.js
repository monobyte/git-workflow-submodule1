"use strict";

angular.module('submodule1', [])

.controller('Submodule1Controller', [ '$scope', '$log',
	function($scope, $log){
		$log.debug('Submodule loaded');
	}
]);