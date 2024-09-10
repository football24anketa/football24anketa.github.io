$.ajax({
	url: 'https://api.vk.com/method/groups.getById?group_id=220796160&access_token=d60fc61bd60fc61bd60fc61bd9d512b949dd60fd60fc61bb0d5d410e915e30b9934c8cf&fields=members_count&v=5.199',
	method: 'GET',
	dataType: 'JSONP',
	success: function(data){
		$('#vkontakte_count').text(`${data.response.groups[0].members_count}`);
	}
});