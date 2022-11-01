//To update the page every one second
setInterval(() => {
    let NewDate = new Date();
    let Mtime = NewDate.getMinutes();
    let Htime = NewDate.getHours();
    let Stime = NewDate.getSeconds();
    //These are the formulae derived for calculating the rotation of hands
    let Hrotation = 30 * Htime + Mtime / 2;
    let Mrotation = 6 * Mtime;
    let Srotation = 6 * Stime;
    //Setting up the rotation..
    hour.style.transform = `rotate(${Hrotation}deg)`;
    minute.style.transform = `rotate(${Mrotation}deg)`;
    second.style.transform = `rotate(${Srotation}deg)`;
}, 1000);
//
