const menuList = [
    {name: "백소정", img: "0% 0%", menu: "돈카츠", price: "10,900원"},
    {name: "봉시김치찌개", img: "25% 0%", menu: "봉시찌개", price: "11,000원"},
    {name: "청실홍실", img: "50% 0%", menu: "온모밀국수", price: "8,000원"},
    {name: "덴키", img: "75% 0%", menu: "이에케라멘", price: "10,000원"},
    {name: "포브라더스", img: "100% 0%", menu: "양지 쌀국수", price: "12,500원"},
    {name: "골목안생태집", img: "25% 0%", menu: "동태탕", price: "11,000원"},
    {name: "광화문국밥", img: "25% 25%", menu: "돼지국밥", price: "9,000원"},
    {name: "한스포", img: "25% 50%", menu: "양지 쌀국수", price: "9,500원"},
    {name: "호앙비엣", img: "25% 75%", menu: "소고기 양지 쌀국수", price: "10,500원"},
    {name: "김가네", img: "25% 100%", menu: "김가네김밥", price: "5,000원"},
    {name: "콩나물국밥", img: "50% 0%", menu: "돈까스", price: "10,000원"},
    {name: "코시", img: "50% 25%", menu: "토리텐붓카케우동", price: "10,500원"},
    {name: "취향마라", img: "50% 50%", menu: "셀프마라탕", price: "11,500원"},
    {name: "뽕사부", img: "50% 75%", menu: "짬뽕", price: "12,000원"},
    {name: "사계솔", img: "50% 100%", menu: "차돌 순두부", price: "9,000원"},
    {name: "삼식이감자탕", img: "75% 0%", menu: "뼈해장국", price: "12,000원"},
    {name: "신촌설렁탕", img: "75% 25%", menu: "명품설렁탕", price: "11,000원"},
    {name: "수닭도리", img: "75% 50%", menu: "순살 닭짜글이", price: "10,000원"},
    {name: "순리대로", img: "75% 75%", menu: "순대국밥", price: "12,000원"},
    {name: "the볶이", img: "75% 100%", menu: "THE 볶이", price: "4,000원"},
    {name: "the감성", img: "100% 0%", menu: "우삼겹 포케", price: "11,000원"},
    {name: "토담집", img: "100% 25%", menu: "순두부찌개", price: "9,000원"},
    {name: "원스타올드 버거", img: "100% 50%", menu: "원스타 디럭스", price: "10,800원"}
];

let menuInterval;
let running = false;

function randomMenu() {
    const i = Math.floor(Math.random() * menuList.length);
    const selectMenu = menuList[i];
    
    const menuDisplay = document.getElementById('menuDisplay');
    
    const menuImg = document.querySelector('.menuImg');
    menuImg.style.backgroundPosition=selectMenu.img;

    const menuMenu = document.createElement('p');
    menuMenu.className = 'menuMenu';
    menuMenu.textContent = `${selectMenu.menu} ${selectMenu.price}`;

    const menuName = document.createElement('p');
    menuName.className = 'menuName';
    menuName.textContent = selectMenu.name;
    
    menuDisplay.innerHTML = '';
    menuDisplay.appendChild(menuImg);
    menuDisplay.appendChild(menuMenu);
    menuDisplay.appendChild(menuName);
}

function toggleMenu() {
    const button = document.getElementById('pickMenu');

    if (running) {
        clearInterval(menuInterval);
        button.textContent = "START";
    } else {
        menuInterval = setInterval(randomMenu, 50);
        button.textContent = "STOP";
    }

    running = !running;
}

document.getElementById('pickMenu').addEventListener('click', toggleMenu);