# SCEditor FontAwesome

This is a command for using all FontAwesome icons in the SCEditor, similar to the emoticons. You can find an example [here](http://opensource.olympe.in/ex/scefa/).

The command for the button can be copied from the repository above, I'll leave an explanation of the two command files. 

**[Simple](https://github.com/SethClydesdale/sceditor-fontawesome/blob/master/button-simple.js) :** The simple button contains the icons in an array without any tooltips when hovering the icons.

**[Advanced](https://github.com/SethClydesdale/sceditor-fontawesome/blob/master/button-advanced.js) :** The advanced button contains the icons in an object in **class:icon** pairs. The class is used as a tooltip when hovering the icon.

Also, make sure to include the [style](https://github.com/SethClydesdale/sceditor-fontawesome/blob/master/styles.css) for the drop down and icons. The first rule can be ignored, but make sure to include the FontAwesome font in your font-family declaration so the icons appear in source mode.


### Why can't I see the icons ?

If you don't see the icons, it means that you must not have FontAwesome installed on your website. [Click here](http://fortawesome.github.io/Font-Awesome/get-started/) to find out how to install FontAwesome. 


### How do I update the icon list ?

Depending on your preferences, you might want to change or update the icon list. Luckily I've written a script which will allow you to pull all icons from the [FontAwesome cheatsheet](http://fortawesome.github.io/Font-Awesome/cheatsheet/) and place them in an Object or Array. Simply go to the cheatsheet and execute [this script](https://raw.githubusercontent.com/SethClydesdale/sceditor-fontawesome/master/pull-fontawesome-icons.js) either in the console or scratchpad if you're using Firefox. After executing the code, a textarea will popup with the icons in an array or object depending on what you've chosen.

**Array ( type : 0 ) :** Simple and shortest list by placing all icons into an array. You can loop the array to add the icons to the drop down as I've done in the example.

**Object ( type : 1 ) :** Originally I started with an object which listed both the classes and icon. ( e.g. 'flag' : '' ; can be accessed as **fa.flag** ) I was using the class for both the pseudo element and title, but eventually decided to go with an array as it costed less space.

**ignoreAlias:** Setting this to 1 will ignore all alias icons. Set it to 0 if you want all icons, aliases included.
