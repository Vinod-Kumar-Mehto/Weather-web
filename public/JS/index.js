
let frm = document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    let input = document.querySelector('input').value
    console.log(input)
    fetch(`/weather?address=${input}`).then((response) => {
        response.json().then((data) => {
            if (!document.querySelector('p')) {
                let frm = document.querySelector('form')
                frm.insertAdjacentHTML("afterend", '<p></p>')
            }
            if (data.error) {
                document.querySelector('p').innerText = data.error
            } else {
                document.querySelector('p').innerText = `Weather is ${data.forecast} ${data.temperature} degree celsius temperature and location is ${data.location}`
            }

        })

    })
})
