(function(angular, undefined) {
  angular.module("ticketHunterApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);