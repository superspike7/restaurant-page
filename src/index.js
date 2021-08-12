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
  // headline
  // background
  // sayings
  const content = document.querySelector('.content')
  const headline = document.createElement('h1');
  const tagline = document.createElement('h3');

  headline.innerHTML = "This is a home page Title";
  tagline.innerHTML = "This is a tagline";

  content.innerHTML = "";
  content.appendChild(headline);
  content.appendChild(tagline);
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
  const home = () => {
    content.innerHTML = "home component"
  };

  home();

  return {tabSwitch}
})();

document.body.appendChild(nav());

document.querySelectorAll('.tab-btn').forEach(tab => {
  tab.addEventListener('click', tabController.tabSwitch);
})