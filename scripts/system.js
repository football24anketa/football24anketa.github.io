let scroll
let body
let rollercoaster
let biglogo

function handleResponse(data) {
    if (data.response && data.response[0].members_count) {
        console.log("Количество подписчиков: " + data.response[0].members_count);
        // Можете записать количество подписчиков в нужное место на странице
        document.getElementById('vkontakte_count').textContent = data.response[0].members_count;
    } else {
        console.log("Ошибка: Не удалось получить данные");
    }
}

window.onload = function(){
	scroll = document.getElementsByClassName('slow-scroll')[0];
	scroll.style.marginTop = `-${window.scrollY/5}px`;
	body=document.getElementsByClassName('body')[0];
	biglogo=document.getElementsByClassName('big-logo')[0]
	rollercoaster = document.getElementsByClassName('rollercoaster');
	rollercoaster[0].scrollTo({left: window.scrollY});
};

window.addEventListener('scroll', function(){
	scroll.style.marginTop = `-${window.scrollY/5}px`;
	rollercoaster[0].scrollTo({left: window.scrollY});
})