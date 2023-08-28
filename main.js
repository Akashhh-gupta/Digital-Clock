let weekday = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
let time = new Date()
console.log(time)
time.getDate() // Date 
time.getMonth() // Month
time.getFullYear() // Year

time.getHours() // Hour
time.getMinutes() // Minutes
time.getSeconds() // Second

time.getDay()  // Week in number


setInterval(() => {
    let time = new Date()
    let day = time.getDay()
    document.getElementById("week").innerHTML = weekday[day-1]
    document.getElementById("date").innerHTML = time.getDate()
    document.getElementById("month").innerHTML = time.getMonth()
    document.getElementById("year").innerHTML = time.getFullYear()
    document.getElementById("hr").innerHTML = time.getHours()
    document.getElementById("min").innerHTML = time.getMinutes()
    document.getElementById("sec").innerHTML = time.getSeconds()
}, 1000);