// Слайдер с счастливыми часами
var swiper = new Swiper('#happyHoursSlider', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '#happyHoursPagination',
    clickable: true,
  },
  navigation: {
    nextEl: '#happyHoursSliderButtonNext',
    prevEl: '#happyHoursSliderButtonPrev',
  },
  });

// Слайдер с сетами 
var swiper = new Swiper('#setSlider', {
  cssMode: true,
  navigation: {
    nextEl: '#setSliderButtonNext',
    prevEl: '#setSliderButtonPrev',
  },
  pagination: {
    el: '#setSliderPagination'
  },
  mousewheel: true,
  keyboard: true,
});




var swiper = new Swiper('#rollsSlider', {
  cssMode: true,
  navigation: {
    nextEl: '#rollsSliderButtonNext',
    prevEl: '#rollsSliderButtonPrev',
  },
  pagination: {
    el: '#rollsSliderPagination'
  },
  mousewheel: true,
  keyboard: true,
});

// Слайдер для пиццы
var swiper = new Swiper('#pizzaSlider', {
  cssMode: true,
  navigation: {
    nextEl: '#pizzaSliderButtonNext',
    prevEl: '#pizzaSliderButtonPrev',
  },
  pagination: {
    el: '#pizzaSliderPagination'
  },
  mousewheel: true,
  keyboard: true,
});



var swiper = new Swiper('#tabsSlider1', {
  cssMode: true,
  navigation: {
    nextEl: '#tabsSlider1ButtonNext',
    prevEl: '#tabsSlider1ButtonPrev',
  },
  pagination: {
    el: '#tabsSlider1Pagination'
  },
  mousewheel: true,
  keyboard: true,
    });

var swiper = new Swiper('#tabsSlider2', {
  cssMode: true,
  navigation: {
    nextEl: '#tabsSlider2ButtonNext',
    prevEl: '#tabsSlider2ButtonPrev',
  },
  pagination: {
    el: '#tabsSlider2Pagination'
  },
  mousewheel: true,
  keyboard: true,
    });

// Слайдеры для маленьких и средних экранов

var swiper = new Swiper('#happyHoursSliderForMallScreens', {
  pagination: {
    el: '#happyHoursSliderForMallScreensSwiperPagination',
  },
});

var swiper = new Swiper('#happyHoursSliderForMiddleScreens', {
  pagination: {
    el: '#happyHoursSliderForMiddleScreensSwiperPagination',
  },
});

 var swiper = new Swiper('#blockForSmallScreensSetsSwiperWrapper');
 var swiper = new Swiper('#blockForSmallScreensRollsSwiperWrapper');
 var swiper = new Swiper('#blockForSmallScreensPizzaSwiperWrapper');


var swiper = new Swiper('#blockForMediumScreensSetSlider', {
  cssMode: true,
  navigation: {
    nextEl: '#blockForMediumScreensSetSliderButtonNext',
    prevEl: '#blockForMediumScreensSetSliderButtonPrev',
  },
  pagination: {
    el: '#blockForMediumScreensSetSliderPagination'
  },
  mousewheel: true,
  keyboard: true,
});

var swiper = new Swiper('#blockForMediumScreensRollsSlider', {
  cssMode: true,
  navigation: {
    nextEl: '#blockForMediumScreensRollsSliderButtonNext',
    prevEl: '#blockForMediumScreensRollsSliderButtonPrev',
  },
  pagination: {
    el: '#blockForMediumScreensRollsSliderPagination'
  },
  mousewheel: true,
  keyboard: true,
});

var swiper = new Swiper('#blockForMediumScreensPizzaSlider', {
  cssMode: true,
  navigation: {
    nextEl: '#blockForMediumScreensPizzaSliderButtonNext',
    prevEl: '#blockForMediumScreensPizzaSliderButtonPrev',
  },
  pagination: {
    el: '#blockForMediumScreensPizzaSliderPagination'
  },
  mousewheel: true,
  keyboard: true,
});

// Функция скрывающая и отображающая информацию о компании

function readMore(obj){
  var hiddentextAboutCompany = document.querySelector("#hiddenTextAboutTheCompany");
  hiddentextAboutCompany.classList.toggle('block-for-small-screens__about-company__hidden-text');

  if(obj.textContent == "ПОКАЗАТЬ ЕЩЁ"){
    obj.textContent = "СКРЫТЬ";
  } else {
    obj.textContent = "ПОКАЗАТЬ ЕЩЁ";
  }



}

// Код для спойлера

$(document).ready(function(){ 
$('.spoiler-title').click(function(){ 
$(this).parent().children('div.spoiler-content').toggle('fast');
return false;
});
});

function changeArrow(elem) {
  var idArrow = elem.dataset.id;
  var arrow = document.getElementById(idArrow);
  arrow.classList.toggle("arrow");
}

//  function clikButtonPlus (a) {
  
//   var elem = a.dataset.quantity; // Переменная для хранения  идентификатора количества
//   var elem1 = a.dataset.cart;  // Переменная для хранения идентификатора корзины 
//   var elem2 = a.dataset.price; // Переменная для хранения идентификатора цены

//   var idQuantity = document.getElementById(elem);
//   var idCart = document.getElementById(elem1);
//   var idPrice = document.getElementById(elem2);
//   var unitPrice = idCart.dataset.price; // Переменная храняшая цену за один сет

  
 
//   if(idQuantity.textContent < 5){
//     idQuantity.textContent ++;
//     idPrice.textContent = Number(idQuantity.textContent) * Number(unitPrice); //Меняем цену в карточке
//   }

//   var attributeName = "data-totalPrice";
//   var attributeName1 = "data-totalQuantity";

//   // Добавление атрибутов в корзину, которые содержат данные о общем количестве и цене
//   idCart.setAttribute(attributeName, idPrice.textContent); 
//   idCart.setAttribute(attributeName1, idQuantity.textContent);
// }

// function clikButtonMinus (a) {

//   var elem = a.dataset.quantity; // Переменная для хранения  идентификатора количества
//   var elem1 = a.dataset.cart;  // Переменная для хранения идентификатора корзины 
//   var elem2 = a.dataset.price; // Переменная для хранения идентификатора цены

//   var idQuantity = document.getElementById(elem);
//   var idCart = document.getElementById(elem1);
//   var idPrice = document.getElementById(elem2);
//   var unitPrice = idCart.dataset.price; // Переменная храняшая цену за один сет

  
 
//   if(idQuantity.textContent  > 1){
//     idQuantity.textContent --;
//     idPrice.textContent = Number(idQuantity.textContent) * Number(unitPrice); //Меняем цену в карточке
//   }

//   var attributeName = "data-totalPrice";
//   var attributeName1 = "data-totalQuantity";

//   // Добавление атрибутов в корзину, которые содержат данные о общем количестве и цене
//   idCart.setAttribute(attributeName, idPrice.textContent); 
//   idCart.setAttribute(attributeName1, idQuantity.textContent);
// }

function clikButton(a, sign) {
  var elem = a.dataset.quantity; // Переменная для хранения  идентификатора количества
  var elem1 = a.dataset.cart;  // Переменная для хранения идентификатора корзины 
  var elem2 = a.dataset.price; // Переменная для хранения идентификатора цены

  var idQuantity = document.getElementById(elem);
  var idCart = document.getElementById(elem1);
  var idPrice = document.getElementById(elem2);
  var unitPrice = idCart.dataset.price; // Переменная храняшая цену за один сет

  if(sign == '+'){

    if(idQuantity.textContent < 5){
    idQuantity.textContent ++;
    idPrice.textContent = Number(idQuantity.textContent) * Number(unitPrice); //Меняем цену в карточке
  }

    var attributeName = "data-totalPrice";
    var attributeName1 = "data-totalQuantity";

    // Добавление атрибутов в корзину, которые содержат данные о общем количестве и цене
    idCart.setAttribute(attributeName, idPrice.textContent); 
    idCart.setAttribute(attributeName1, idQuantity.textContent);
  } else {
     if(idQuantity.textContent  > 1){
      idQuantity.textContent --;
      idPrice.textContent = Number(idQuantity.textContent) * Number(unitPrice); //Меняем цену в карточке
      }

      var attributeName = "data-totalPrice";
      var attributeName1 = "data-totalQuantity";

      // Добавление атрибутов в корзину, которые содержат данные о общем количестве и цене
      idCart.setAttribute(attributeName, idPrice.textContent); 
      idCart.setAttribute(attributeName1, idQuantity.textContent);
  }
}

// Добавление в корзину 

function addToCart (elem) {
  // Блок кода меняющий внешний вид корзины
  elem.classList.remove("cart__button");
  elem.classList.add("cart__button_inactive");
  elem.textContent = "В КОРЗИНЕ";

  // Добавление в общую корзину
  var elem1 = document.getElementById('totalQuantityOfGoods');
  elem1.textContent = Number(elem1.textContent) + Number(elem.dataset.totalquantity);

  var elem2 = document.getElementById('totalPrice');
   elem2.title =  Number(elem2.title) + Number(elem.dataset.totalprice);
  }