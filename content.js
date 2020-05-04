var url = 'https://cdnjs.cloudflare.com/ajax/libs/marked/1.0.0/marked.min.js';
var script = document.createElement('script');
script.setAttribute('src', url);

document.head.appendChild(script);

script.addEventListener('load', () => {
  var targetDom = Array.from(document.querySelectorAll('.commit-message p'))[1];
  var dim = document.createElement('div');
  dim.innerHTML = marked(targetDom.innerText);
  targetDom.before(dim);
  targetDom.remove();
});
