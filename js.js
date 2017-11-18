	function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#img')
                    .attr('src', e.target.result)
                    .width(0)
                    .height(0);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
	function ani(){
            document.getElementById('img').className ='classname';
        }	