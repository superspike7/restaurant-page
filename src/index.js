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
  const content = document.querySelector('.content');

  const home = document.createElement('div') ;
  const headline = document.createElement('h1');
  const tagline = document.createElement('h3');

  headline.innerHTML = "This is a home page Title";
  tagline.innerHTML = "This is a tagline";

  content.innerHTML = "";
  home.classList.add('home');
  home.appendChild(headline);
  home.appendChild(tagline);
  content.appendChild(home);
};


function menuComponent() {
  const content = document.querySelector('.content')

  const menu = document.createElement('div');
  const card = document.createElement('div');
  const title = document.createElement('h1');
  title.innerHTML = "Best Selling"

  const dish = (name, price) => {
    const el = document.createElement('p');
    el.innerHTML = `${name} - $${price}`
    return el;
  };

  menu.classList.add('menu');
  card.classList.add('card');
  card.appendChild(title);
  card.appendChild(dish('Delicious food', 69.99));
  card.appendChild(dish('Delicious food', 69.99));
  card.appendChild(dish('Delicious food', 69.99));
  card.appendChild(dish('Delicious food', 69.99));
  card.appendChild(dish('Delicious food', 69.99));
  card.appendChild(dish('Delicious food', 69.99));
  card.appendChild(dish('Delicious food', 69.99));
  card.appendChild(dish('Delicious food', 69.99));
  menu.appendChild(card);
  content.innerHTML = "";

  content.appendChild(menu);
};


// TODO:
function contactComponent() {
  const content = document.querySelector('.content');

  const contact = document.createElement('div');
  const headline = document.createElement('h1');
  const info = document.createElement('h3');
  const card = document.createElement('div');

  headline.innerHTML = "Contact Us";
  info.innerHTML = "9969-1234-23 or restaurant@email.com";

  content.innerHTML = "";
  contact.classList.add('contact');
  card.classList.add('card');

  card.appendChild(headline);
  card.appendChild(info);
  contact.appendChild(card);
  content.appendChild(contact);
};


const tabController = ( () => {
  const tabSwitch = (e) => {
    const component = e.target.textContent;
    switch (component) {
      case 'Home':
        homeComponent();
        break;
      case 'Menu':
        menuComponent();
        break;
      case 'Contact':
        contactComponent();
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