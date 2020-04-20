const menuBtn = document.querySelector('.toMenu')
const content = document.querySelector('.section')



let isSidebar = false // Sidebar активен? 
menuBtn.addEventListener('click', function () {
  if (isSidebar) {
    document.querySelector('.sidebar').classList.remove('active')
    menuBtn.querySelector('img').setAttribute('src', 'img/sidebar/ic-burger-menu.svg')
    document.querySelector('.section').style.transform = 'translateX(0px)'
    document.querySelector('.sidebar').scrollTo(pageXOffset, 0)

    isSidebar = false
  } else {
    document.querySelector('.sidebar').classList.add('active')
    menuBtn.querySelector('img').setAttribute('src', 'img/sidebar/ic-burger.svg')
    document.querySelector('.section').style.transform = 'translateX(190px)'

    isSidebar = true
  }

})

content.addEventListener('click', function () {
  if (isSidebar) {
    document.querySelector('.sidebar').classList.remove('active')
    menuBtn.querySelector('img').setAttribute('src', 'img/sidebar/ic-burger-menu.svg')
    document.querySelector('.section').style.transform = 'translateX(0px)'
    document.querySelector('.sidebar').scrollTo(pageXOffset, 0)

    isSidebar = false
  }

})

try {
  const profileSettingItems = document.querySelectorAll('.profile-content__item')

  profileSettingItems.forEach(item => {
    // console.log(item)
    const btn = item.querySelector('.btn')
    btn.addEventListener('click', () => {
      const block = item.querySelector('.item-block')
      const itemValue = item.querySelector('.profile-content__item .value')
      itemValue.classList.toggle('hidden')
      block.classList.toggle('active')
      btn.classList.toggle('primary')
      item.classList.toggle('active')
      // document.querySelector('.profile-content').classList.toggle('active')
    })
  })


  const changeWebmonay = document.querySelector('.webmoney')
  let isChangingMoney = false // В режиме изменения?

  changeWebmonay.querySelector('button').addEventListener('click', () => {
    if (isChangingMoney) {
      changeWebmonay.querySelector('span:last-of-type').style.display = 'block'
      changeWebmonay.querySelector('button').style.backgroundColor = '#E4FFDF'
      changeWebmonay.querySelector('button').style.color = '#324332'
      changeWebmonay.querySelector('button').style.fontFamily = 'Oswald'


      changeWebmonay.querySelectorAll('input.input').forEach(item => {
        item.classList.add('hidden')
      })

      // document.querySelector('.profile-content__item.password').style.alignItems = 'center'


      isChangingMoney = false
    } else {
      changeWebmonay.querySelector('span:last-of-type').style.display = 'none'
      changeWebmonay.querySelector('button').style.backgroundColor = '#324332'
      changeWebmonay.querySelector('button').style.color = '#E4FFDF'
      changeWebmonay.querySelector('button').style.fontFamily = 'Russo One'



      changeWebmonay.querySelectorAll('input.input').forEach(item => {
        item.classList.remove('hidden')
      })
      // document.querySelector('.profile-content__item.password').style.alignItems = 'flex-start'

      isChangingMoney = true

    }

  })
} catch {}


try {
  const changeThemeBtn = document.querySelector('#theme')
  const themeValue = document.querySelector('#themeValue')
  changeThemeBtn.addEventListener('click', () => {
    document.querySelector('.themeSelect').classList.toggle('active')
  })

  const moneySelectValue = document.querySelector('#money-select-value span')
  const moneyselectItem = document.querySelectorAll('#money-select li')

  moneyselectItem.forEach(item => {
    item.addEventListener('click', () => {
      // console.log(item.querySelector('span').textContent)
      themeValue.textContent = item.querySelector('span').textContent
    })
  })

} catch {}



try {

  const dropBtn = document.querySelector('.drop')

  dropBtn.addEventListener('click', () => {
    document.querySelector('.drop').classList.toggle('active')
  })
} catch {}

try {
  const selectMoney = document.querySelector('.select')
  selectMoney.addEventListener('click', () => {

    selectMoney.classList.toggle('active')

  })


} catch {}

try {
  const addMoney = document.querySelector('.money-add-head')
  let isAdd = false


  addMoney.addEventListener('click', () => {
    if (isAdd) {
      document.querySelector('.money-add-head img').setAttribute('src', 'img/money/add.svg');
      isAdd = false
    } else {
      document.querySelector('.money-add-head img').setAttribute('src', 'img/money/remove.svg');
      isAdd = true
    }
    document.querySelector('.money-add').classList.toggle('active')
  })
} catch {}



try {
  const headFiles = document.querySelector('#allFiles')
  const files = document.querySelectorAll('.checkbox-input')

  headFiles.addEventListener('change', () => {
    files.forEach((file) => {
      // console.log(headFiles.value)
      if (headFiles.checked) {
        // file.setAttribute('checked', '')
        file.checked = true
      } else {
        file.checked = false
        // file.removeAttribute('checked')
      }
    })
  })
} catch {}



$(document).ready(function () {

  $('.thumbnail-item').mouseenter(function (e) {

    // Calculate the position of the image tooltip
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;

    // Set the z-index of the current item,
    // make sure it's greater than the rest of thumbnail items
    // Set the position and display the image tooltip
    $(this).css('z-index', '15')
      .children("div.tooltip")
      .css({
        'top': -50,
        'left': 30,
        'display': 'block'
      });

  }).mouseleave(function () {

    // Reset the z-index and hide the image tooltip
    $(this).css('z-index', '1')
      .children("div.tooltip")
      .animate({
        "opacity": "hide"
      }, 0);
  });


});
//

try {
  const moneySelectValue = document.querySelector('#money-select-value span')
  const moneyselectItem = document.querySelectorAll('#money-select li')

  moneyselectItem.forEach(item => {
    item.addEventListener('click', () => {
      console.log(item.querySelector('span').textContent)
      moneySelectValue.textContent = item.querySelector('span').textContent
    })
  })

} catch {}