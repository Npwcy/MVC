//Model
const houses = [
    {
        code: "SM",
        name: "Smith"
    },
    {
        code: "JD",
        name: "Jordan"
    },
    {
        code: "BL",
        name: "Billy"
    }
]

const getFamily = houseCode => {
    switch(houseCode){
        case "SM":
            return ["Mario", "Karen", "Tayler"];
        case "JD":
            return ["Dean", "Jasmine", "Atlanta", "Lilly"];
        case "SM":
            return ["Robert", "Louise", "Sia"];
        default:
            return [];
    }
}

const createOptionElement = (text, value) => {
    const element = document.createElement("option");
    element.textContent = text;
    element.value = value;
    return element;
}

const createLiElement = text =>{ //แสดงข้อมูลสมาชิกต่างๆ
    const element = document.createElement("Li");
    element.textContent = text;
    return element;
}

const houseElement = document.querySelector("select"); //ตัวselectจากhtml

houses.forEach(house => {
    houseElement.appendChild(createOptionElement(house.name, house.code));
}) //พอdrop down ก็จะมีชื่อข้อมูล


//controller
houseElement.addEventListener("change", e =>{
    const fams = getFamily(e.target.value);
    const famsElement = document.getElementById("family"); //id fame of ul id in html file

    famsElement.innerHTML="";
    fams.forEach(fam => {
        famsElement.appendChild(createLiElement(fam));
    })
})