angular.module('app').component('chatroom', {

  controller: function($window,PermissionsService) {

    this.givepermission = function() {
        PermissionsService.setPermission('contact', true)
          $window.location.href = '#!/contact';

    }

    //NOTE : variable

  },

  bindings: {},


  template: `
  <header></header>
	
	<ul id="messages"></ul>
	<form action="">
		<input id="m" autocomplete="off" /><button>Send</button>
	</form>
	<script>
			$(function () {
				var socket = io();
				$('form').submit(function(){
					socket.emit('chat message', $('#m').val());
					$('#m').val('');
					return false;
				});
				socket.on('chat message', function(msg){
					$('#messages').append($('<li>').text(msg));
				});
			});
		</script>



	<!-- /Services section -->
`
})
