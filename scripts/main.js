(function(){
	var elGallery = document.getElementsByClassName('gallery')[0];

	var classNameCommentsImg = "commentsImg",
		classNameLikesImg = "likesImg",
		classNameDislikesImg = "dislikesImg";	

	init(data);

	function init(data){
		data.forEach(function(item, index){
			createObj(item, index);
		});
	};

	function createObj(obj, index){
		var	div = document.createElement('div'),
			img = document.createElement('img'),
			info = document.createElement('div'),
			commentsInfo = document.createElement('div'),
			likesInfo = document.createElement('div'),
			dislikesInfo = document.createElement('div');

		img.src = obj.src;
		img.width = obj.width;
		img.height = obj.height; 

		info.classList.add('info');

		var amountComments = obj.comments.length;

		createInfoInner(commentsInfo, classNameCommentsImg, amountComments);
		createInfoInner(likesInfo, classNameLikesImg, obj.likes);
		createInfoInner(dislikesInfo, classNameDislikesImg, obj.dislikes);

		info.appendChild(commentsInfo);
		info.appendChild(likesInfo);
		info.appendChild(dislikesInfo);

		div.appendChild(info);
		div.appendChild(img);
		div.setAttribute('data-index', index);

		elGallery.appendChild(div);
	};

	function createInfoInner(element, className, value){
		element.innerHTML = "<div class='" + className + "'></div>" +
							"<div class='circle'>" + value + "</div>";
		return element;
	};

})();