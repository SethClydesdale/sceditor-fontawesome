﻿// fa holds the icon list ( see the pull script if you need to update the icons )
var fa = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    i, j = fa.length;
  
// create sceditor button and drop down
$.sceditor.command.set('fontawesome', {
  createDropdown : function(editor, callback) {
    var c = $('<div />');

    for (i=0; i<j; i++) {
      $('<i class="fa">' + fa[i] + '</i>').click(function(e) {
        callback($(this).text());

        editor.closeDropDown(true);
        e.preventDefault();
      }).appendTo(c);
    }

    return c;
  },

  // if you want to add a default size for the icons, simply add the size tags into insert()
  // wysiwyg
  exec : function(c) {
    var e = this;
    e.createDropDown(c, 'fontawesome', $.sceditor.command.get('fontawesome').createDropdown(e, function(icon) {
      e.insert('[font=FontAwesome]' + icon + '[/font]','');
    }));
  },
  
  // source  
  txtExec : function(c) {
    var e = this;
    e.createDropDown(c, 'fontawesome', $.sceditor.command.get('fontawesome').createDropdown(e, function(icon) {
      e.insert('[font=FontAwesome]' + icon + '[/font]','');
    }));
  },
    
  tooltip : 'Font Awesome Icons'
});
