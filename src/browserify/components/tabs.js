/*
 * Tabs component
 * @paran {object} the tab options(container(id or class), link(class), content(class))
*/

export const tabs = (options) => {

  let $el = document.querySelector(options.el);

  if(!$el) return;

  let $tabLinks   = $el.querySelectorAll(options.link);
  let $tabContent = $el.querySelectorAll(options.content);
  let activeIndex = 0;

  let handleClick = (link, index) => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      openTab(index);
    });
  }

  let openTab = (index) => {
    if(index !== activeIndex && index >= 0 && index <= $tabLinks.length) {
      $tabLinks[activeIndex].classList.remove('is-active');
      $tabLinks[index].classList.add('is-active');
      $tabContent[activeIndex].classList.remove('is-active');
      $tabContent[index].classList.add('is-active');
      activeIndex = index;
    }
  }

  for(var i = 0; i < $tabLinks.length; i++) {
    var link = $tabLinks[i];
    handleClick(link, i);
  }

}
