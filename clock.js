// For Rotation
setInterval(() => {
    d = new Date();
    dhour = d.getHours();
    dmin = d.getMinutes();
    dsec = d.getSeconds();
// Formulas
    rhour = 30*dhour + dmin/2;
    rminute = 6*dmin;
    rsecond = 6*dsec;
// Rotation using Transform Attribute
    hour.style.transform = `rotate(${rhour}deg)`;
    minute.style.transform = `rotate(${rminute}deg)`;
    second.style.transform = `rotate(${rsecond}deg)`;
}, 1000);