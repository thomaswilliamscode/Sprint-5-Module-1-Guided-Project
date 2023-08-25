// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.getElementsByTagName('header');
const logoTitle = document.getElementById('logoTitle');
const firstCard = document.querySelector('.card:nth-of-type(1)');
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img');
const titleFirstCard = firstCard.querySelector('.card-title');
const subtitleFirstCard = firstCard.querySelector('.card-subtitle');
const textFirstCard = firstCard.querySelector('.card-text');
// C- traversing with dot notation
const link1FirstCard = firstCard.querySelector('.card-link');
const link2FirstCard = firstCard.querySelector('.card-link:nth-of-type(2)');

// 👉 2- Finding collections of elements in the DOM
const nav = document.querySelector('nav');
// A- Find all the anchor tags inside the nav element
const links = nav.querySelectorAll('a');
// B- Loop over the links and console.log their text content
for (let i = 0; i < links.length; i++) {
	console.log(links[i])
}
// C- Turn the collection of links into a real array
let linksArray = [];
for (let i = 0; i < links.length; i++) {
	linksArray.push(links[i]);
}
console.log(linksArray)
// D- Use .filter to find the anchor tag with the textContent of "Home"
const home = linksArray.filter( link => link.textContent === 'Home' );
console.log(home)

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = 'BloomTech Dog';
titleFirstCard.textContent = 'I is Dog!'
subtitleFirstCard.textContent = 'A story in three parts'
textFirstCard.textContent = 'Dogs are nice, dogs are kind, stay away from cats!';
link2FirstCard.textContent = 'Dog Ipsum'
//  B- Have the students research online the difference between textContent and innerText

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
link1FirstCard.setAttribute('href', 'https://pexels.com/search/dog');
link2FirstCard.href = 'https://doggoipsum.com';
imageFirstCard.setAttribute('src', 'https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg')
logoTitle.setAttribute('class', 'logo heading banana')
//  B- Using .setAttribute to change a few attributes

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times

const data = {
	'contact': {
		'contact-heading' : 'Contact',
		'address' : '123 Way 456 Street Somewhere, USA',
		'phone': '1 (888) 888-8888',
		'email' : 'sales@greatidea.io',
	}
}

/*
  <footer>
    <h4 class="contact-heading"></h4>
    <p class="address"></p>
    <p class="phone"></p>
    <p class="email"></p>
  </footer>
*/ 

const footer = document.querySelector('footer')
const footerHeading = footer.querySelector('h4')
const address = footer.querySelector('p:nth-of-type(1)')
const phone = footer.querySelector('p:nth-of-type(2)');
const email = footer.querySelector('p:nth-of-type(3)');

footerHeading.textContent = data['contact']['contact-heading']
address.textContent = data['contact']['address'];
phone.textContent = data['contact']['phone'];
email.textContent = data['contact']['email'];

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]

// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
