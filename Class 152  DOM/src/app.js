let theme_switcher = document.getElementById("theme-switcher")
// document.getElementById("defaultTheme").innerText = localStorage.getItem("defaultTheme")
changeTheme(localStorage.getItem("theme"))
theme_switcher.addEventListener("change", function (e) {
    let value = e.target.value
    localStorage.setItem("theme", value)
    let theme = localStorage.getItem("theme")

    // if (value==="dark-theme"){
    //     localStorage.setItem("defaultTheme","Dark")
    //     e.target["0"].innerText = localStorage.getItem("defaultTheme")
    // }else{
    //     localStorage.setItem("defaultTheme", "Light")
    //     e.target["0"].innerText = localStorage.getItem("defaultTheme")
    // }

    // if(value=)
    // if (value === "dark-theme"){
    //     e.target["0"].setAttribute("selected","")
    //     e.target["1"].setAttribute("","")
    // }else{
    //     e.target["1"].setAttribute("selected","")
    //     e.target["0"].setAttribute("","")
    // }

    changeTheme(theme)
})

function changeTheme(theme) {
    document.documentElement.className = theme
}


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position.coords.latitude)
        // console.log(position.coords.longitude)

        fetch(`https://api.sunrise-sunset.org/json?lat=${position.coords.latitude}&lng=${position.coords.longitude}=today`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.results.sunset)
        })
    });
} else {
    console.log("NAN")
}