// The purpose of this script is to quickly pull all icons from the font awesome cheatsheet ( http://fortawesome.github.io/Font-Awesome/cheatsheet/ )
// It's a helper for forming an array or object of all font awesome icons
// It should be executed in the console or the Firefox scratchpad, after execution a textarea will appear with an icon list

(function() {
  // type 0 = array icon list
  // type 1 = object icon list
  var config = {
    type : 0,
    ignoreAlias : 1 // decide if you want to ignore the alias'
  },
  a = $('.row')[0].getElementsByTagName('DIV'), i = 0, j = a.length, t = document.createElement('TEXTAREA'), v = '';
  
  config.type ? v += 'var fa = {\n' : v += 'var fa = [';
  
  for (; i<j; i++) {
    if (config.ignoreAlias && /\(alias\)/.test(a[i].innerHTML)) console.log('Skipping alias..');
    else if (config.type) v += '  \'' + a[i].innerHTML.replace(/<.*?>/g,'').trim().slice(1).replace(/\[.*?\]|\(.*?\)/g,'').trim().slice(3) + '\' : \'' + a[i].getElementsByTagName('I')[0].innerHTML + '\'' + ( i == j - 1 ? '' : ',' ) + '\n';
    else if (!config.type) v += '\'' + a[i].getElementsByTagName('I')[0].innerHTML + '\'' + ( i == j - 1 ? '' : ',' );
  }
  
  config.type ? v += '};' : v += '];';
  
  t.value = v;
  t.style.position = 'fixed';
  t.style.fontFamily = 'FontAwesome';
  t.style.left = 0;
  t.style.bottom = 0;
  t.style.zIndex = 9999;
  t.style.width = '100%';
  t.style.height = '200px';
  t.onclick = function() { this.select() };
  document.body.appendChild(t);
})();