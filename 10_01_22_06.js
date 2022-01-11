let n = 0
let s = 0

for (x=1;n<=20;x++){
    if (x%7===0){
        s += x;
        n += 1;
    }
}

document.write("Tổng của 30 số đầu tiên chia hết cho 7 là: " + s)