const menuList = [
    {name: "토담집", img: "./icon/todamjip.svg", menu: "순두부찌개", price: "9,000원"},
    {name: "한스포", img: "./icon/hanseupo.svg", menu: "양지 쌀국수", price: "9,500원"},
    {name: "순리대로", img: "./icon/sunridaero.svg", menu: "순대국밥", price: "12,000원"},
    {name: "뽕사부", img: "./icon/ppongsabu.svg", menu: "짬뽕", price: "12,000원"},
    {name: "원스타올드 버거", img: "./icon/wonstarold.svg", menu: "원스타 디럭스", price: "10,800원"},
    {name: "신촌설렁탕", img: "./icon/shinchon.svg", menu: "명품설렁탕", price: "11,000원"},
    {name: "백소정", img: "./icon/baeksojeong.svg", menu: "돈카츠", price: "10,900원"},
    {name: "포브라더스", img: "./icon/fourbrothers.svg", menu: "양지 쌀국수", price: "12,500원"},
    {name: "콩나물국밥", img: "./icon/kongnamul.svg", menu: "돈까스", price: "10,000원"},
    {name: "광화문국밥", img: "./icon/gwanghwamun.svg", menu: "돼지국밥", price: "9,000원"},
    {name: "봉시김치찌개", img: "./icon/bongsi.svg", menu: "봉시찌개", price: "11,000원"},
    {name: "덴키", img: "./icon/denki.svg", menu: "이에케라멘", price: "10,000원"},
    {name: "사계솔", img: "./icon/sagyesol.svg", menu: "차돌 순두부", price: "9,000원"},
    {name: "삼식이감자탕", img: "./icon/samsigi.svg", menu: "뼈해장국", price: "12,000원"},
    {name: "수닭도리", img: "./icon/sudalttori.svg", menu: "순살 닭짜글이", price: "10,000원"},
    {name: "코시", img: "./icon/kosi.svg", menu: "토리텐붓카케우동", price: "10,500원"},
    {name: "the감성", img: "./icon/thegamseong.svg", menu: "우삼겹 포케", price: "11,000원"},
    {name: "골목안생태집", img: "./icon/golmogan.svg", menu: "동태탕", price: "11,000원"},
    {name: "김가네", img: "./icon/kimgane.svg", menu: "김가네김밥", price: "5,000원"},
    {name: "청실홍실", img: "./icon/cheongsilhongsil.svg", menu: "온모밀국수", price: "8,000원"},
    {name: "the볶이", img: "./icon/thebokyi.svg", menu: "THE 볶이", price: "4,000원"},
    {name: "취향마라", img: "./icon/maratang.svg", menu: "셀프마라탕", price: "11,500원"},
    {name: "호앙비엣", img: "./icon/hoangviet.svg", menu: "소고기 양지 쌀국수", price: "10,500원"}
];

let menuInterval;
let running = false;

function randomMenu() {
    const i = Math.floor(Math.random() * menuList.length);
    const selectMenu = menuList[i];
    
    const menuDisplay = document.getElementById('menuDisplay');
    
    const menuImg = document.createElement('img');
    menuImg.src = selectMenu.img;
    menuImg.alt = selectMenu.name;
    menuImg.className = 'menuImg';

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