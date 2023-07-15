function createcomic() {
    var title = document.getElementById("title").value;
    var othertitle = document.getElementById("othertitle").value;
    var author = document.getElementById("author").value;
    var artist = document.getElementById("artist").value;
    var group = document.getElementById("group").value;
    var image = document.getElementById("image").value;
    var des = document.getElementById("des").value;
    document.getElementById("uploaded").innerText = '<span><!--more--></span><div class="separator" style="clear: both;"><a style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" height="200" data-original-height="1706" data-original-width="1200" src="' + image + '"/></a></div><div id="custom-hero" style="clear: both;filter: blur(10px); -webkit-filter: blur(10px);"><img alt="" border="0" data-original-height="630" data-original-width="1200" src="' + image + '"/></div><p id="synopsis">' + des + '</p><div id="extra-info"><div class="y6x11p"><span class="bold">Tên Khác</span> <span class="dt">' + othertitle + '</span></div><div class="y6x11p"><span class="bold">Tác Giả</span> <span class="dt">' + author + '</span></div><div class="y6x11p"><span class="bold">Họa Sĩ</span> <span class="dt">' + artist + '</span></div><div class="y6x11p"><span class="bold">Nhóm Dịch</span> <span class="dt">' + group +'</span></div></div><input type="text" id="scInput" onkeyup="searchList()" placeholder="Tìm kiếm chương..." title="Type in a name"><div id="clwd" class="bixbox bxcl epcheck"><script>clwd.run("' + title + '");</script></div>'
    //document.getElementById("uploaded").textContent = '<img class="chapter-img" src=' + title + '  ';
}
