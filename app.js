let title = document.querySelector('#title');
let author = document.querySelector('#author');
let year = document.querySelector('#year');

let btn = document.querySelector('#submit')

const tableList = document.querySelector('#book-list')
console.log(tableList);

btn.addEventListener('click' , function(e){
    e.preventDefault()

   if(title.value == "" || author.value == "" || year.value == ""){
    alert('malumot kiriting ')
   } else{
    let trItem = document.createElement('tr')

    let tdTitle = document.createElement('td')
    tdTitle.innerHTML = title.value
    trItem.appendChild(tdTitle)

    let tdAuthor = document.createElement('td')
    tdAuthor.innerHTML = author.value
    trItem.appendChild(tdAuthor)


    let tdYear = document.createElement('td')
    tdYear.innerHTML = year.value
    trItem.appendChild(tdYear)
     
    tableList.appendChild(trItem)
   }

   title.value = ""
   author.value = ""
   year.value = ""
    
})
