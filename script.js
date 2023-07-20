let nowDate = new Date();
let nowDateNumber = nowDate.getDate();
let nowMonth = nowDate.getMonth();
let nowYear = nowDate.getFullYear();
let curDate = nowDate.setMonth(nowDate.getMonth() - 1);

const container = document.getElementById("calendar");
const monthContainer = container.getElementsByClassName("monthname")[0];
const yearContainer = container.getElementsByClassName("yearname")[0];
const daysContainer = container.getElementsByClassName("days")[0];
const prev = container.getElementsByClassName("prev")[0];
const next = container.getElementsByClassName("next")[0];
const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const setMonthCalendar = (year,month) =>
{
    const monthDays = new Date(year, month + 1, 0).getDate();
    const monthPrefix = new Date(year, month, 0).getDay();
    let monthDaysText = "";

    monthContainer.textContent = monthName[month];
    yearContainer.textContent = year;
    daysContainer.innerHTML = "";

    if (monthPrefix > 0)
    {
        for (let i = 1  ; i <= monthPrefix; i++)
        {
            monthDaysText += "<li></li>";
        }
    }

    for (let i = 1; i <= monthDays; i++)
    {
        monthDaysText += `<li> ${i} </li>`;
    }

    daysContainer.innerHTML = monthDaysText;

    if (month == nowMonth && year == nowYear)
    {
        days = daysContainer.getElementsByTagName("li");
        days[monthPrefix + nowDateNumber - 1].classList.add("datenow");
    }
}

setMonthCalendar(nowYear,nowMonth);

prev.onclick = () =>
{
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() - 1);

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    setMonthCalendar(curYear,curMonth);
}

next.onclick = () => 
{
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() + 1);

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    setMonthCalendar(curYear,curMonth);
}