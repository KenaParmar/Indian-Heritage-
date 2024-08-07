const urlParams = new URLSearchParams(window.location.search);
const date = urlParams.get('date');
const festivals = [
    { name: "Makar Sankranti", date: "2024-01-14" },
    { name: "Lohri", date: "2024-01-14" },
    { name: "Pongal", date: "2024-01-15" },
    { name: "Maha Shivaratri", date: "2024-03-08" },
    { name: "Holi", date: "2024-03-25" },
    { name: "Ugadi", date: "2024-04-9" },
    { name: "Eid ul-Fitr", date: "2024-04-10" },
    { name: "Baisakhi", date: "2024-04-14" },
    { name: "Vishu", date: "2024-04-14" },
    { name: "Bihu", date: "2024-04-14" },
    { name: "Muharram", date: "2024-07-7" },
    { name: "Raksha Bandhan", date: "2024-08-19" },
    { name: "Janmashtami", date: "2024-08-26" },
    { name: "Ganesh Chaturthi", date: "2024-09-07" },
    { name: "Onam", date: "2024-09-15" },
    { name: "Navratri", date: "2024-10-03" },
    { name: "Durga Puja", date: "2024-10-9" },
    { name: "Dussehra", date: "2024-10-12" },
    { name: "Diwali", date: "2024-10-31" },
    ];
    const upcomingFestivals = festivals.filter((festival) => {
        const festivalDate = new Date(festival.date);
        const inputDate = new Date(date);
        return festivalDate >= inputDate;
    }).slice(0, 3);
    const container = document.querySelector('.container');
    upcomingFestivals.forEach((festival) => {
        const festivalHTML = `
            <div class="ans">
                <h2>${festival.name}</h2>
                <p>${festival.date}</p>
            </div>
        `;
        container.innerHTML += festivalHTML;
    });

    if (upcomingFestivals.length === 0) {
        const festivalHTML = `
            <div class="ans">
                <h2>No upcoming festivals</h2>
            </div>
        `;
        container.innerHTML += festivalHTML;
    }
