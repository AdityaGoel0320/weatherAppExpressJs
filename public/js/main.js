let cityName = document.getElementById("cityName")
let submitBtn = document.getElementById("submitBtn")
let temp = document.getElementById("temp")
let temp_status = document.getElementById("temp_status")
let city_name = document.getElementById("city_name")
let sub = document.getElementById("sub")
let c = document.getElementById("c")


let getinfo = async (event) => {
    event.preventDefault();
    let cityvalue = cityName.value;
    if (cityvalue === "") {

        city_name.innerText = "no output"

    }
    else {
        try {

            let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=137ad65f261093f01030eb475283e61f`;

            let response = await fetch(api);
            let data = await response.json();
            let arrdata = [data];

            city_name.innerText = `${arrdata[0].name} , ${arrdata[0].sys.country}`;
            temp.innerText = arrdata[0].main.temp;
            temp_status.innerText = arrdata[0].weather[0].main;

            console.log(temp)
            let tempMood = arrdata[0].main.temp;
            if (tempMood = "Clear") {

                temp_status.innerHTML = "<i class='fa fa-sun '  style='color: #eccc68 ; '></i>";

            } else if (tempMood === "Clouds") {

                temp_status.innerHTML = "<i class='fa fa-cloud' style='color:#f12f6;'></i>"

            } else if (tempMood === "Rain") {
                temp_status.innerHTML = "<i class='fa fa-cloud-rain' style='color: #a4bebe;'></I> ";
            } else {

                temp_status.innerHTML = "<i ki class=' fa fa-sun' style='color:#ccc68;''></i>";
            }

        }



        catch {
            city_name.innerText = "Enter City Name properly"
            // city_name.innerText = ""
            temp.innerText = ""
            temp_status.innerText = " "

            sub.innerText = ""
            c.innerText = ""



        }
    }
    console.log("hrftiognit")
}
submitBtn.addEventListener("click", getinfo)




{/* <p id="day">Day :-Sunday</p> */ }
{/* <p id="today_date">Date:- 12/3/23</p> */ }

let today_date = document.getElementById("today_date")
let day = document.getElementById("day")


let date = new Date().toDateString(); ; 
today_date.innerText = date ; 
console.log(date)


const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const dayOfWeek = daysOfWeek[today.getDay()];
day.innerText = dayOfWeek  ;
console.log(dayOfWeek); // Outputs the current day of the week as a string, like "Monday", "Tuesday", etc.

// let d = new Date().toLocalString() ; 
// day.innerText = d ; 

