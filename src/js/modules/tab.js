export function isTab() {
  const tabMenu = document.querySelector('.tab-menu');
  const tabItem = document.querySelectorAll('.tab-item');
  const tabValue = document.querySelectorAll('.tab-val');
  const tabView = document.querySelectorAll('.tab-view');

  tabMenu.addEventListener("click", function() {
    for(const item of tabItem) {
      item.classList.remove('active');
    }
    event.target.classList.add('active');
    const needVal = event.target;
    if (needVal.innerHTML == "All") {
      for (const itemVisible of tabView) {
        itemVisible.style.display = "flex";
      }
    } else {
      for(const item of tabValue){
        if (item.innerHTML == needVal.innerHTML) {
          const parentOne = item.parentElement;
          const parentTwo = parentOne.parentElement;
          parentTwo.style.display = "flex";
        } else {
          const parentOne = item.parentElement;
          const parentTwo = parentOne.parentElement;
          parentTwo.style.display = "none";
        }
      }
    }
    event.preventDefault();
  });
}