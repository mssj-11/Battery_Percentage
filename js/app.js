const batteryLevel = document.querySelector('.battery');


navigator.getBattery().then(function (battery){
    const level = battery.level;
    const status = level * 100 + "%";

    batteryLevel.innerHTML = status;
    console.log(status);
});