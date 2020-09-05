var feed = document.querySelector("section");

function loadFeed(path) {
	var xhr = new XMLHttpRequest();
	
	xhr.responseType = "document";;
	
	xhr.open("GET", path, true);
	xhr.onload = function() {
		var root = this.responseXML;
		var posts = root.querySelectorAll("post");
		
		for (var i = 0; i < posts.length; i++) {
			var post = document.createElement("article");
			feed.appendChild(post);
			
			post.innerHTML = "<h1>" + posts[i].querySelector("title").innerHTML + "</h1>" +
				"<p>" + posts[i].querySelector("description").innerHTML + "</p>" +
				"<i>" + posts[i].querySelector("date").innerHTML + "<i>";
		}
	};
	 
	xhr.send();
}

loadFeed("../assets/data/feed.xml");
