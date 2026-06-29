function toggleDark(){
    document.body.classList.toggle("dark");
}

fetch("https://dummyjson.com/quotes/random")
    .then(response => response.json())
    .then(data => {

         const text =
            `💬 คำคมประจำวัน: "${data.quote}" — ${data.author}`;
        document.getElementById("quote").innerText = text;
        console.log(data);
    })
    .catch(error => {
        document.getElementById("quote").innerText = "โหลดข้อมูลไม่สำเร็จ";
        console.log(error);
    });