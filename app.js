
let list =document.querySelector('#book-list ul')
let forms =document.forms


// delete books

list.addEventListener('click',(e)=>{
if(e.target.className =='delete'){
let li =e.target.parentElement
li.parentNode.removeChild(li)
}
})


// add book

let addForm = forms['add-book']
addForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    // create elements
    
    let value = addForm.querySelector('input[type="text"]').value   
     let li = document.createElement('li')
     let bookname = document.createElement('span')
     let deletebtn =document.createElement('sapn')
    
    
    //  add text content
    bookname.textContent =value;
    deletebtn.textContent ="delete"
    

    // add classes
    
    bookname.classList.add ('name')
    deletebtn.classList.add('delete')



    //  append to document
    
    li.appendChild(bookname)
    li.appendChild(deletebtn)
    list.appendChild(li)

})


// hide books


let hidebox = document.querySelector('#hide')
hidebox.addEventListener('change',(e)=>{
    // console.log("kar", hidebox.Checked)
if(hidebox.checked){
    list.style.display = "none"
} else {
    list.style.display = "initial"
}
})

// filter books

let searchbar = document.forms['search-books'].querySelector('input')
searchbar.addEventListener('keyup',function(e){
    let term = e.target.value.toLowerCase()
    let books = list.getElementsByTagName('li')
    Array.from(books).forEach(function(book){
        let title = book.firstElementChild.textContent
        if(title.toLocaleLowerCase().indexOf(term)!=-1){
            book.style.display = 'block'
        }else{

            book.style.display = 'none'
        }
    })
})

// tabbed content

let tabs = document.querySelector('.tabs');
let panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});


