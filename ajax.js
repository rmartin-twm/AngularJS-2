// This function loads the data from Vimeo When 
		function init() {
                
            document.getElementById('thumbs').innerHTML = "Loading videos...";
                
			// Change this to your username to load in your clips
			var vimeoUserName = document.getElementById('userInput').value;
	
			// Tell Vimeo what function to call
			var callback = 'showThumbs';
	
			// Set up the URLs
			var url = 'http://vimeo.com/api/v2/' + vimeoUserName + '/videos.json?callback=' + callback;

		
			var js = document.createElement('script');
			js.setAttribute('type', 'text/javascript');
			js.setAttribute('src', url);
			document.getElementsByTagName('head').item(0).appendChild(js);
		}

		// This function goes through the clips and puts them on the page
		function showThumbs(videos) {
			var thumbs = document.getElementById('thumbs');
			thumbs.innerHTML = '';

			for (var i = 0; i < videos.length; i++) {
				var thumb = document.createElement('img');
				thumb.setAttribute('src', videos[i].thumbnail_medium);
				thumb.setAttribute('alt', videos[i].title);
				thumb.setAttribute('title', videos[i].title);
                                
				var a = document.createElement('a');
				a.setAttribute('href', videos[i].url);
				a.appendChild(document.createTextNode(videos[i].title));
                                
                var p = document.createElement('p');
                p.setAttribute('class', 'description');
                p.appendChild(document.createTextNode('Description: ' + videos[i].description));
                                
                var p2 = document.createElement('p');
                p2.setAttribute('class', 'video-id');
                p2.appendChild(document.createTextNode('Video ID: ' + videos[i].id));
                                
				var d = document.createElement('div');
				d.setAttribute('class', 'wrapper');
				d.appendChild(thumb);
				d.appendChild(document.createElement('br'));
				d.appendChild(a);
                d.appendChild(p);
                d.appendChild(p2);
				thumbs.appendChild(d);
			}
		}

		// Call our init function when the page loads
        window.onload = function () {
        	document.getElementById('submit').onclick = init;
        }