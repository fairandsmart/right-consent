$(document).ready(function() {
$('code').append('<span class="command-copy" ><i class="fa fa-clipboard" aria-hidden="true"></i></span>');

$('code span.command-copy').click(function(e) {
    var text = $(this).parent().text().trim(); //.text();
    var copyHex = document.createElement('textarea');
    copyHex.value = text
    document.body.appendChild(copyHex);
    copyHex.select();
    copyHex.setSelectionRange(0, 99999);
    document.execCommand('copy');
    console.log(copyHex.value)
    document.body.removeChild(copyHex);
  });

})
