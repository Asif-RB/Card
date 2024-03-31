let add = document.querySelector('#add-btn');
let remove = document.querySelector('#remove-btn');

add.style.cssText = "background-Color:#07d507; color:white;cursor:pointer;"
remove.style.cssText = "background-Color:#fb1616;color:white;cursor:pointer;"

add.addEventListener('click',function(){
    add.innerHTML = "Friends";
})
remove.addEventListener('click',function(){
    add.innerHTML = "Add Friend";
})

$('span').click(function(){
    $('div.container').remove();
})
