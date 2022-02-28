
$('.galerey').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
});
let num = 0
const block = 'block'
    flex = 'flex' 
    none = 'none'
    topContainer = document.querySelector('.top__container')
    line = document.querySelector('.line')
    text1 = document.querySelector('.text1')
    arrow__down = document.querySelector('.arrow__down')
    header = document.querySelector('header')
    skills = document.querySelector('.skills')
    menuItem = document.querySelectorAll('.menu__item')
    skillsText1 = document.querySelector('.skills__text1')
    skillsLiEl = document.querySelectorAll('.skills__items__item')
    rightMenu = document.querySelector('.right__menu')
    rightMenuItem = document.querySelectorAll('.right__menu__item')
    photo = document.querySelector('.photo')
    photoItemsLines = document.querySelector('.photo__items__lines')
    photoText = document.querySelector('.photo__text')

hide1 = () => {
    topContainer.classList.add('fadeOutLeft', 'animated', 'delay-1s')
    line.classList.add('fadeOutRight', 'animated', 'delay-1s')
    text1.classList.add('zoomOut', 'animated', 'delay-2s')
    arrow__down.classList.add('fadeOutDown', 'animated', 'delay-3s')
}
hide2 = () => {
    skillsText1.classList.add('fadeOutRight', 'animated', 'delay-1s')
    skillsLiEl[0].classList.add('animated', 'fadeOutRight', 'delay-2s')
    skillsLiEl[1].classList.add('animated', 'fadeOut', 'delay-4s')
    skillsLiEl[2].classList.add('animated', 'fadeOutLeft', 'delay-2s')
    rightMenu.classList.add('animated', 'zoomOutRight', 'delay-5s')
    //skills.style.transform = 'none'
    //skills.style.animation = 'none'
}
close1 = () => {
    header.style.transform = 'scale(.7) skew(0deg, -20deg)'
    header.style.animation = 'bg both 6s ease'
}
close2 = () => {
    skills.style.transform = 'scale(.7) skew(0deg, -20deg)'
    skills.style.animation = 'bg3 both 6s ease'
}
close3 = () => {
    skills.style.transform = 'scale(.7) skew(0deg, -20deg)'
    skills.style.animation = 'bg5 both 6s ease'
}
open1 = () => {
    num++
    skills.style.display = block
    skills.style.transform = 'scale(.7) skew(0deg, -20deg)'
    skills.style.animation = 'bg2 both 5s 5s linear'
    num >= 2
    ? setTimeout(() => {
        skillsText1.style.display = block
        skillsText1.classList.remove('animated', 'fadeInLeft', 'delay-0s')
        for(let i = 0; i < skillsLiEl.length ; i++) {
            skillsLiEl[i].style.display = flex
        }
        skillsLiEl[0].classList.remove('animated', 'fadeInDown', 'fadeOutRight', 'delay-1s')
        skillsLiEl[1].classList.remove('animated', 'fadeInDown', 'fadeOut', 'delay-2s')
        skillsLiEl[2].classList.remove('animated', 'fadeInDown', 'fadeOutLeft', 'delay-3s')
        rightMenu.style.display = flex
        rightMenu.classList.remove('animated', 'zoomOutRight', 'delay-5s')
        rightMenuItem[0].classList.remove('animated', 'zoomInRight', 'delay-0s')
        rightMenuItem[1].classList.remove('animated', 'zoomInRight', 'delay-0s')
        rightMenuItem[2].classList.remove('animated', 'zoomInRight', 'delay-1s')
        rightMenuItem[3].classList.remove('animated', 'zoomInRight', 'delay-1s')
        rightMenuItem[4].classList.remove('animated', 'zoomInRight', 'delay-2s')
        rightMenuItem[5].classList.remove('animated', 'zoomInRight', 'delay-2s')
    }, 0)
    : setTimeout(() => {
        skillsText1.style.display = block
        skillsText1.classList.add('animated', 'fadeInLeft', 'delay-0s')
        for(let i = 0; i < skillsLiEl.length ; i++) {
            skillsLiEl[i].style.display = flex
        }
        skillsLiEl[0].classList.add('animated', 'fadeInDown', 'delay-1s')
        skillsLiEl[1].classList.add('animated', 'fadeInDown', 'delay-2s')
        skillsLiEl[2].classList.add('animated', 'fadeInDown', 'delay-3s')
        setTimeout(() => {
            rightMenu.style.display = flex
            rightMenuItem[0].classList.add('animated', 'zoomInRight', 'delay-0s')
            rightMenuItem[1].classList.add('animated', 'zoomInRight', 'delay-0s')
            rightMenuItem[2].classList.add('animated', 'zoomInRight', 'delay-1s')
            rightMenuItem[3].classList.add('animated', 'zoomInRight', 'delay-1s')
            rightMenuItem[4].classList.add('animated', 'zoomInRight', 'delay-2s')
            rightMenuItem[5].classList.add('animated', 'zoomInRight', 'delay-2s')
        }, 3300);
    },11000)
}
open2 = () => {
    header.style.transform = 'scale(.7) skew(0deg, -20deg)'
    header.style.animation = 'bg4 both 5s 5s linear'
    topContainer.classList.remove('fadeOutLeft', 'animated', 'delay-1s')
    line.classList.remove('fadeOutRight', 'animated', 'delay-1s')
    text1.classList.remove('zoomOut', 'animated', 'delay-2s')
    arrow__down.classList.remove('fadeOutDown', 'animated', 'delay-3s')
}
open3 = () => {
    skills.style.display = none
    photo.style.display = block
    photo.style.transform = 'scale(.7) skew(0deg, -20deg)'
    photo.style.animation = 'bg5 both 5s 5s linear'
    setTimeout(() => {
        skillsText1.style.display = block
        photoItemsLines.style.display = block
        rightMenu.style.display = flex
    }, 3300)
}

menuItem[1].addEventListener('click', nex1)
arrow__down.addEventListener('click', nex1)
rightMenuItem[0].addEventListener('click', nex2)
menuItem[2].addEventListener('click', nex3)
function nex1() {
    hide1()
    setTimeout(close1, 3250)
    setTimeout(open1, 3300)
}
function nex2() {
    hide2()
    setTimeout(close2, 5250)
    setTimeout(open2, 5300)
}
function nex3() {
    hide1()
    setTimeout(close1, 3250)
    setTimeout(open3, 3300)
}