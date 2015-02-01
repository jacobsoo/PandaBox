(function() {    
    var x, n, nD, z, i;

    function htmlEscape(s) {
        s = s.replace(/&/g, '&amp;');
        s = s.replace(/>/g, '&gt;');
        s = s.replace(/</g, '&lt;');
        return s;
    }

    function attrQuoteEscape(s) {
        s = s.replace(/&/g, '&amp;');
        s = s.replace(/"/g, '&quot;');
        return s;
    }

    x = "t.co";
    n = 0;
    if (x != null) {
        x = x.toLowerCase();
        nD = window.open().document;
        nD.writeln('<html><head><title>Links containing "' + htmlEscape(x) + '"</title><base target="_blank"></head><body>');
        nD.writeln('Link text or target url containing &quot;' + htmlEscape(x) + '&quot;<br><hr>');
        z = document.links;
        for (i = 0; i < z.length; ++i) {
            if ((z[i].innerHTML && z[i].innerHTML.toLowerCase().indexOf(x) != -1) || z[i].href.toLowerCase().indexOf(x) != -1) {
                if( z[i].getAttribute("data-expanded-url")!=null ){
                    nD.writeln(++n + '. Original link is : ' + z[i].getAttribute("data-expanded-url") + '<br />');
                    nD.writeln('Twitter\'s shortened link is : <a href="' + attrQuoteEscape(z[i].href) + '">' + attrQuoteEscape(z[i].href) + '</a><br>');
                    // version 2 will be able to expand other URLS that are shortened by other services.
                    // nD.writeln('<span class="longurl"><a href="#" onclick="toggleLink(this); return false;" class="expand">expand</a><img src="http://longurl.org/static/ajax_indicator_sm_round.gif" style="display:none;"></span>');
                }
            }
        }
        nD.writeln('<hr></body></html>');
        nD.close();
    }
})();