//<![CDATA[
var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
function related_results_labels(json) {
for (var i = 0; i < json.feed.entry.length; i++) {
var entry = json.feed.entry[i];
relatedTitles[relatedTitlesNum] = entry.title.$t;
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
relatedUrls[relatedTitlesNum] = entry.link[k].href;
relatedTitlesNum++;
break;
}
}
}
}
function removeRelatedDuplicates() {
var tmp = new Array(0);
var tmp2 = new Array(0);
for(var i = 0; i < relatedUrls.length; i++) {
if(!contains(tmp, relatedUrls[i])) {
tmp.length += 1;
tmp[tmp.length - 1] = relatedUrls[i];
tmp2.length += 1;
tmp2[tmp2.length - 1] = relatedTitles[i];
}
}
relatedTitles = tmp2;
relatedUrls = tmp;
}
function contains(a, e) {
for(var j = 0; j < a.length; j++) if (a[j]==e) return true;
return false;
}
function printRelatedLabels() {
var r = Math.floor((relatedTitles.length - 1) * Math.random());
var i = 0;
document.write('<ul>');
while (i < relatedTitles.length && i < 05) {
document.write('<li><a href="' + relatedUrls[r] + '">' + relatedTitles[r] + '</a></li>');
if (r < relatedTitles.length - 1) {
r++;
} else {
r = 0;
}
i++;
}
document.write('</ul>');
}
document.addEventListener('DOMContentLoaded', () => {     const buttons = document.querySelectorAll('.color-button');     const op = document.getElementById('open');     const blogspot = document.getElementById('blogspot');     const closeM = document.querySelector('.close');     const iframe = document.getElementById('comentarios');      let sequence = [];     const widgetPadding = [1, 4, 3, 2];      const urlPrefix = 'https://todosbr.blogspot.com/p/';     const urlSuffix = '.html';      buttons.forEach(button => {         button.addEventListener('mousedown', () => {             const id = parseInt(button.getAttribute('data-id'));              button.classList.add('active');              if (sequence.length >= widgetPadding.length) {                 sequence = [];                 buttons.forEach(b => b.classList.remove('active', 'inactive'));             }              sequence.push(id);              if (sequence.length === widgetPadding.length) {                 if (sequence.every((val, index) => val === widgetPadding[index])) {                     iframe.src = getPostIframeSrc();                     blogspot.style.display = 'block';                 } else {                     sequence = [];                     buttons.forEach(b => b.classList.remove('active', 'inactive'));                 }             }         });          button.addEventListener('mouseup', () => {             button.classList.remove('active');              if (sequence.length > 0 && sequence[sequence.length - 1] !== parseInt(button.getAttribute('data-id'))) {                 button.classList.add('inactive');             }         });          button.addEventListener('mouseleave', () => {             button.classList.remove('active');         });     });      op.addEventListener('click', () => {         blogspot.style.display = 'block';     });      closeM.addEventListener('click', () => {         blogspot.style.display = 'none';         iframe.src = '';      });      window.addEventListener('click', (event) => {         if (event.target === blogspot) {             blogspot.style.display = 'none';             iframe.src = '';          }     });      function getPostIframeSrc() {         const contentElement = document.querySelector('.post-content');         if (contentElement) {             const suffix = contentElement.getAttribute('todosbr');             return suffix ? `${urlPrefix}${suffix}${urlSuffix}` : '';         }         return '';     } });
//]]>
