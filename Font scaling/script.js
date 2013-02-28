/*

In de css geef je aan hoe groot te line-height moet zijn.
Dat wordt dan gezien als de max-line-height. De min-line
height die hierboven wordt aangegeven wordt gebruikt om
naartoe te schalen wanneer de browserwindow kleiner wordt
gemaakt. Dit gebeurt fluid.
*/

$(document).ready(function(){
  $(".normal").minLineHeight(1.6);
  $(".larger").minLineHeight(1.3);
});



/* class="hyphenate" op element waarop hyphens op moeten worden toegepast. */

Hyphenator.run();