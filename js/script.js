let menuButton = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let closeButton = document.querySelector('.menu-close-btn');

menuButton.addEventListener('click', () => {
  alert('script works')
  menu.classList.toggle('active');
})

closeButton.addEventListener('click', () => {
  alert('close works');
  menu.classList.remove('active');
})

// if(menu.classList.contains('active')) {
//   document.addEventListener('click', () => {
//     alert('clicked')
//     menu.classList.remove('active');
//   })
// }




/*
const dropdownItems = document.querySelectorAll('.drpdwn');
const dropdownContent = document.querySelectorAll('.dropdown-content');

dropdownItems.forEach((item) => {
  let timeoutId;

  item.addEventListener('mouseleave', function() {
    clearTimeout(timeoutId);
    dropdownContent.forEach(content => content.classList.add('active'));
    timeoutId = setTimeout(() => {
      dropdownContent.forEach(content => content.classList.remove('active'));
    }, 2000); // Adjust the time delay as needed (in milliseconds)
  });

  item.addEventListener('mouseenter', function() {
    clearTimeout(timeoutId);
    dropdownContent.forEach(content => content.classList.remove('active'));
  });
});

document.body.addEventListener('click', function(event) {
  const target = event.target;
  const isDropdownItem = target.closest('.drpdwn');
  const isDropdownContent = target.closest('.dropdown-content');

  if (!isDropdownItem && !isDropdownContent) {
    dropdownContent.forEach(content => content.classList.remove('active'));
  }
});
*/ 



