import './style.css'


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

function homeComponent() {
  const content = document.querySelector('.content')

  const home = document.createElement('div') 
  const headline = document.createElement('h1');
  const tagline = document.createElement('h3');

  headline.innerHTML = "This is a home page Title";
  tagline.innerHTML = "This is a tagline";

  content.innerHTML = "";
  home.classList.add('home')
  home.appendChild(headline);
  home.appendChild(tagline);
  content.appendChild(home);
}

const tabController = ( () => {
  const content = document.querySelector('.content');
  const tabSwitch = (e) => {
    const component = e.target.textContent;
    switch (component) {
      case 'Home':
        homeComponent();
        break;
      case 'Menu':
        console.log("menu component");
        break;
      case 'Contact':
        console.log("contact component");
        break;
      default:
    };
  };

  // home page as default

  homeComponent();

  return {tabSwitch}
})();

document.body.prepend(nav());

document.querySelectorAll('.tab-btn').forEach(tab => {
  tab.addEventListener('click', tabController.tabSwitch);
})