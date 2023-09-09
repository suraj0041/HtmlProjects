setInterval(() => {
    let datetime=new Date();
    let second=document.getElementById('second');
    second.style.transform=`rotate(${(6*datetime.getSeconds())}deg)`;
    let minutes=document.getElementById('minutes');
    minutes.style.transform=`rotate(${(6*datetime.getMinutes())}deg)`;

    let hour=document.getElementById('hour');
    hour.style.transform=`rotate(${(30*datetime.getHours())}deg)`;
}, 100);