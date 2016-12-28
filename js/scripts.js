window.onload = function() {
  console.log('Strona w pełni załadowana.');
  // reszta skryptu
  console.log(window);
    function zaalertuj() {
        alert('Wyświetlam się jednokrotnie po 2 sekundach.');
    }

    var opoznioneWywolanie = setTimeout(zaalertuj, 2000);
    /*window.location = 'http://www.kodilla.pl';*/

    var navigation = document.getElementById('nav');
    console.log(navigation);
    var withMenuItemsClass = document.getElementsByClassName('menuItem');

    console.log(withMenuItemsClass);

    var menu = document.getElementById('Menu');

    var withMenuItemsClassInNav = menu.getElementsByClassName('menuItem');

    console.log(withMenuItemsClassInNav);
    var itemsByTagName = document.getElementsByTagName('li');

    console.log(itemsByTagName);

    var newElem = document.createElement('p');

    console.log(newElem);


}
