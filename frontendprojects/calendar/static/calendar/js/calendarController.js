const dates = document.getElementById('dates');
const headerTitle = document.getElementById('header-text');
const navs = document.querySelectorAll('#prev, #next');
const pastDates = document.querySelectorAll('#past')

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

renderCalendar = () => {
    let datesHtml = ""
    let classes ="w-[calc(100%/7)] mt-6 relative z-10 text-black"

    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month + 1, 0).getDate();

    const end = new Date(year, month, endDate).getDay();
    const endDatePrev = new Date(year, month, 0).getDate();

    for (let i = start; i > 0; i--) {
        datesHtml += `<li id="past" class="${classes}">${endDatePrev - i + 1}</li>`;
    }

    for (let i = 1; i <= endDate; i++) {
        let todayId = (
            i === date.getDate() && 
            month === new Date().getMonth() &&
            year === new Date().getFullYear()

        ) ? 'id="today"' : ""
        datesHtml += `<li ${todayId} class="${classes}">${i}</li>`
    }

    for (i = end; i < 6; i++) {
        datesHtml += `<li id="past" class="${classes}">${i - end+ 1}</li>`
    }

    dates.innerHTML = datesHtml
    headerTitle.textContent = `${months[month]} ${year}`;
}

navs.forEach(nav => {
    //console.log(nav)
    nav.addEventListener('click', e => {
        const btnId = e.target.id;
        console.log(btnId)

        if (btnId === 'prev' && month === 0) {
            year--;
            month = 11;
        }   else if (btnId === 'next' && month === 11) {
            year++;
            month = 0;
        } else {
            month = btnId === 'next' ? month + 1 : month - 1;
        }

        date = new Date(year, month, new Date().getDate());
        year = date.getFullYear();
        month = date.getMonth();

        renderCalendar()
    });
});

renderCalendar()


