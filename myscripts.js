let myLibrary = [];

function Book(title,author,pages,readStatus){
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
  this.info = function (){
    console.log(title + " by " + author + ", " + pages +" pages" +", " + readStatus)
  }
}

Book.prototype.changeStatus = function(){
  if (this.readStatus === 'read') {
    this.readStatus = 'not read';
  } else {
    this.readStatus = 'read';
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const library = document.querySelector('.library');
displayBooks(myLibrary);


function displayBooks(lib){
  for (let i = 0; i < lib.length; i++) {
    let container = document.createElement('div');
    let title = document.createElement('div');
    let author = document.createElement('div');
    let pages = document.createElement('div');
    let statusButton = document.createElement('button');
    let removeButton = document.createElement('button');

    container.classList.add('container');
    title.textContent = lib[i].title;
    author.textContent = lib[i].author;
    pages.textContent = lib[i].pages + ' pages';
    statusButton.textContent = lib[i].readStatus;
    removeButton.textContent = 'remove';

    container.appendChild(title);
    container.appendChild(author);
    container.appendChild(pages);
    container.appendChild(statusButton);
    container.appendChild(removeButton);
    library.appendChild(container);
    container.classList.add('card');
    }
  }

const open = document.getElementById('open');
const modalContainer= document.getElementById('modalContainer');
const close = document.getElementById('close');

open.addEventListener('click',()=> {
  modalContainer.classList.add('show');
});

close.addEventListener('click', ()=>{
  modalContainer.classList.remove('show')
});

function cancel(){
  modalContainer.classList.remove('show')
  document.getElementById("titleInput").value = '';
  document.getElementById("authorInput").value = '';
  document.getElementById("pagesInput").value = '';
  document.getElementById("statusInput").value = '';
}



function update() {
let inputContainer = document.createElement('div');
 let titleInput = document.createElement('div');
 let authorInput = document.createElement('div');
 let pagesInput = document.createElement('div');
 let statusButton = document.createElement('button'); 
 let removeButton = document.createElement('button');

titleInput.textContent= document.getElementById("titleInput").value;
authorInput.textContent= document.getElementById("authorInput").value;
pagesInput.textContent= document.getElementById("pagesInput").value + " pages";
statusButton.textContent= document.getElementById
("statusInput").value;
removeButton.textContent = "remove";
inputContainer.classList.add('container');

let newBook = new Book(titleInput.textContent,authorInput.textContent,pagesInput.textContent,statusButton.textContent);

addBookToLibrary(newBook);

inputContainer.appendChild(titleInput);
inputContainer.appendChild(authorInput);
inputContainer.appendChild(pagesInput);
inputContainer.appendChild(statusButton);
inputContainer.appendChild(removeButton);
library.appendChild(inputContainer);
inputContainer.classList.add('card');

document.getElementById("titleInput").value = '';
document.getElementById("authorInput").value = '';
document.getElementById("pagesInput").value = '';
document.getElementById("statusInput").value = '';
}

library.addEventListener('click',(e)=> {
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    const containerDel = button.parentNode;
    if (button.textContent ==='remove'){
      library.removeChild(containerDel);
      let titleRemove = containerDel.firstChild.textContent;
      removeIndex(titleRemove);
    } else if (button.textContent.toLowerCase() === 'read' || button.textContent.toLowerCase() == 'not read'){
      let titleChange = containerDel.firstChild.textContent;
      changeRead(titleChange);
      if(containerDel.childNodes[3].textContent.toLowerCase() === 'read') {
      containerDel.childNodes[3].textContent = 'not read';
      } else containerDel.childNodes[3].textContent = 'read';
    }
  }
})

function removeIndex(titleDel){
  for (let i = 0; i <myLibrary.length; i++) {
    if (myLibrary[i].title === titleDel){
      myLibrary.splice(i);
    }
  }
}

function changeRead(titleChange){
  for (let i = 0; i <myLibrary.length; i++) {
    if (myLibrary[i].title === titleChange){
      myLibrary[i].changeStatus();
    }
  }
}

