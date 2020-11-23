var height = 0;
var loopid

function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#img')
                    .attr('src', e.target.result)
                    .height(0)
										.width(0);
            };

            reader.readAsDataURL(input.files[0]);
        }
				animation()
    }

	function animation(){
					  document.getElementById('audio').play();
            // document.getElementById('img').className ='animation';
						loopid = setInterval(loop,100);
        }

function loop() {
	height++;
	document.getElementById('img').style.height = height.toString() + "px";
	document.getElementById('img').style.width = "auto";
	console.log(document.getElementById("img").style.height);
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    if( height >= 150) {
    clearInterval(loopid);
      }
	} else {
  if( height >= 300) {
    clearInterval(loopid);
      }
	}
}
