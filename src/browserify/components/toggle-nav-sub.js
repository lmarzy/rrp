export default function toggleItem() {
  var itemClass = this.parentNode.classList.contains('c-siteNav__item--sub-active');
  console.log(itemClass);
  for (i = 0; i < subNavId.length; i++) {
    subNavId[i].parentNode.classList.remove('c-siteNav__item--sub-active');
  }
  if (!itemClass) {
    this.parentNode.classList.add('c-siteNav__item--sub-active');
  }
}
