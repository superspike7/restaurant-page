function nav() {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  const link = (title) => {
   const list = document.createElement('li');
   let link = document.createElement('p');
   link.textContent = title; 
   link.classList.add('tab-btn');
   list.append(link);
   return list
  };

  ul.append(link('Home'));
  ul.append(link('Menu'));
  ul.append(link('Contact'));
  nav.append(ul);


  return nav
}

const tabController = ( () => {
  const content = document.querySelector('.content');
  const tabSwitch = (e) => {
    content.innerHTML = e.target.textContent;
  };

  return {tabSwitch}
})();

document.body.appendChild(nav());

document.querySelectorAll('.tab-btn').forEach(tab => {
  tab.addEventListener('click', tabController.tabSwitch);
})