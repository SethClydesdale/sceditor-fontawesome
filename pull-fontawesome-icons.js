// The purpose of this script is to quickly pull all icons from the font awesome cheatsheet ( http://fortawesome.github.io/Font-Awesome/cheatsheet/ )
// It's a helper for forming an array or object of all font awesome icons to be used in the SCEditor command
// The script should be executed in the console or the Firefox scratchpad, after execution a textarea will appear with an icon list

(function() {
  // type 0 = array icon list
  // type 1 = object icon list
  var config = {
    type : 1,
    ignoreAlias : 1 // decide if you want to ignore the alias'
  },
  a = document.querySelectorAll('.cheatsheet-set article span[class*="fa"]'), i = 0, j = a.length, t = document.createElement('TEXTAREA'), v = '';
  
  config.type ? v += 'var fa = {\n' : v += 'var fa = [';
  
  for (; i<j; i++) {
    if (config.ignoreAlias && /\(alias\)/.test(a[i].parentNode.nextElementSibling.querySelector('.word-wrap').innerHTML)) console.log('Skipping alias..');
    else if (config.type) v += '  \'' + a[i].innerHTML + '\' : \'' + a[i].parentNode.nextElementSibling.querySelector('.word-wrap').innerHTML + '\'' + ( i == j - 1 ? '' : ',' ) + '\n';
    else if (!config.type) v += '\'' + a[i].innerHTML + '\'' + ( i == j - 1 ? '' : ',' );
  }
  
  config.type ? v += '};' : v += '];';
  
  t.value = v;
  t.className = 'fa fab fal far fas';
  t.setAttribute('style','position:fixed;left:0;bottom:0;z-index:9999;width:100%;height:200px;font-family:"Font Awesome\ 5 Free", "Font Awesome\ 5 Brands", FontAwesome');
  t.onclick = function() { this.select() };
  document.body.appendChild(t);
})();
