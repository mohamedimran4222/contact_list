let filterInput=document.getElementById('filter-input')
//Event
filterInput.addEventListener('keyup',filternames);
function filternames() {
    //set value
    let filterValue=document.getElementById('filter-input').value.toUpperCase();
    //Get names ul
    let ul=document.getElementById('names');
    //list from ul
    let li=document.querySelectorAll('li.collection-item');
    //looping
    for (let i = 0; i < li.length; i++) {
        let a=li[i].getElementsByTagName('a')[0];
        //if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
            li[i].style.display='';
        }else{
            li[i].style.display='none';
        }
        
    }
    
}