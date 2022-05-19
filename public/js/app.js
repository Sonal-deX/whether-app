const wForm = document.querySelector('form')
const search = document.querySelector('input')
const country = document.querySelector('#country')
const state = document.querySelector('#state')
const tz = document.querySelector('#tz')
const whe = document.querySelector('#whe')
const rt = document.querySelector('#rt')
const fl = document.querySelector('#fl')
const load = document.querySelector('#load')

wForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    const city = search.value
    load.textContent = "loading..."

    fetch("/whether?city="+city)
        .then((res)=>{
            res.json()
            .then((data)=>{
                load.textContent = ""
                country.textContent = data.Country
                state.textContent = data.State
                tz.textContent = data.Timezone
                whe.textContent = data.Whether
                rt.textContent = data.RealTemperature
                fl.textContent = data.Feels_Like
            })
            .catch((data)=>{
                load.textContent = data
            })
        })
})