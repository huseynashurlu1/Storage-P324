function ShowAlert() {
    let basket = JSON.parse(localStorage.getItem('basket'));

    if(basket.length === 0) {
        document.getElementById('Alert').classList.remove('d-none')
        document.querySelector('table').classList.add('d-none')
    }
    else{
        document.getElementById('Alert').classList.add('d-none')
        document.querySelector('table').classList.remove('d-none')

        let list = '';

        basket.forEach(x => {
            list += `
            <tr>
                <td>${x.id}</td>
                <td>
                    <img src="${x.image}" alt="">
                </td>
                <td>${x.name}</td>
                <td>
                    <input type="number" value=${x.count}>
                </td>
                <td>${x.price}</td>
                <td>
                <button class="btn btn-danger">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                </td>
            </tr>
            `
        })

        document.getElementById('tbody').innerHTML = list 
    }
}

ShowAlert()