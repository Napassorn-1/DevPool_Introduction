function toggleDark(){
    document.body.classList.toggle("dark");
}

fetch("https://dummyjson.com/quotes/random")
    .then(res => res.json())
    .then(data => {
         const text =
            `💬 คำคมประจำวัน: "${data.quote}" — ${data.author}`;
        document.getElementById("quote").innerText = text;
    })
