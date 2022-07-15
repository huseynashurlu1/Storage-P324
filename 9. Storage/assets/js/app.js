// local
// session

// setItem
// getItem
// removeItem
// clear
// key


// function Add() {
//     let value = document.getElementById('input').value;
//     localStorage.setItem('username',value);
// }

// let span = document.getElementById('name');
// let username = localStorage.getItem('username');
// span.innerHTML = username


// localStorage.setItem('users','P324');
// localStorage.setItem('users','P325');

// localStorage.removeItem('username')


// JSON => Javascript Object Notation

// parse
// stringify


if(localStorage.getItem('users') === null) {
    localStorage.setItem('users',JSON.stringify([]));
}


let btn_add = document.querySelector('#btn_add');
let btn_delete = document.querySelector('#btn_delete');

btn_add.addEventListener('click',function() {
    let username = document.getElementById('name').value
    let email = document.getElementById('email').value

    let user_list = JSON.parse(localStorage.getItem('users'));
    // console.log(user_list);

    user_list.push({
        name: username,
        email: email,
        date: new Date()
    });

    localStorage.setItem('users',JSON.stringify(user_list));
    alert(`${username} adlı istifadəçi əlavə olundu...!`)
    GetUsers();

})


function GetUsers() {
    let user_list = JSON.parse(localStorage.getItem('users'));

    let item = '';

    user_list.forEach(user => {
        item += `
            <div class="col-lg-4">
                <div class="box">
                <h3>${user.name}</h3>
                <p>${user.email}</p>
                </div>
            </div>
        `
    })
    document.getElementById('list').innerHTML = item
    ShowAlert();
}


GetUsers();



btn_delete.addEventListener('click',function(){
    localStorage.setItem('users',JSON.stringify([]))
    alert('Bütün istifadəçilər silindi...!')
    GetUsers();
    ShowAlert();
})



function ShowAlert() {
    let user_list = JSON.parse(localStorage.getItem('users'));

    if(user_list.length === 0) {
        document.getElementById('Alert').classList.remove('d-none')
    }
    else{
        document.getElementById('Alert').classList.add('d-none')
    }
}

ShowAlert()