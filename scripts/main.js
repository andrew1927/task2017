(function(){
	var elGallery = document.getElementsByClassName('gallery')[0];

	var ClassNameCommentsImg = "commentsImg",
		ClassNameLikesImg = "likesImg",
		ClassNameDislikesImg = "dislikesImg";	

		
	init(data);

	function init(data){
		data.forEach(function(item, index){
			createObj(item, index);
		});

	function createObj(obj, index){
		var img = document.createElement('img'),
			div = document.createElement('div'),
			info = document.createElement('div'),
			commentsInfo = document.createElement('div'),
			likesInfo = document.createElement('div'),
			dislikesInfo = document.createElement('div');


		img.src = obj.src;
		img.width = obj.width;
		img.height = obj.height; 

		info.classList.add('info');

		var amountComments = obj.comments.length;

		// createInfoInner(commentsInfo, ClassNameCommentsImg, amountComments);
		// createInfoInner(likesInfo, ClassNameLikesImg, obj.likes);
		// createInfoInner(dislikesInfo, ClassNameDislikesImg, obj.dislikes);

		info.appendChild(commentsInfo);
		info.appendChild(likesInfo);
		info.appendChild(dislikesInfo);


		div.appendChild(info);
		div.appendChild(img);
		div.setAttribute('data-index', index);


		elGallery.appendChild(div);
	}	

	function createInfoInner(element, className, value){
		element.innerHTML = "<div class='" + className + "'></div>" +
							"<div class='circle'>" + value + "</div>";
		return element;
	}
	}
	var galleryImg = document.getElementsByTagName("img")[0],
		popup = document.getElementsByClassName("popup")[0],
		close = document.getElementsByClassName("close")[0];

	function show(element){
		element.style.display = "block";
	}
	function hide(element){
		element.style.display = "none";
	}

	galleryImg.addEventListener("click", function(){
		show(popup);
	});
	close.addEventListener("click", function(){
		hide(popup);
	})

})();