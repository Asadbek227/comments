// Синхронные действия выполняются сразу и друг за другом

// event loop - механизм который позволяет Javascriptu работать как многопоточный языке то есть выполнять несколько операций одновременно

// console.log(1);

// setTimeout(function()  {
//     console.log(2); 
// }, 2000);

// console.log(3);

// setTimeout(function()  {
//     console.log(4);
// }, 5000);

// console.log(5);

// У Промиса есть 3 состояния 
// 1) pending - ожидание 
// 2) fullFilled - успешно
// 3) rejected - отклонен

// let call = prompt('Поднять трубку?')

// let promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         if(call == 'yes' || call == 'да') {
//             resolve({message: 'Данные пришли успешно'})
//         }else {
//             reject('Произошла не предвиденная ошибка')
//         }
      
//     }, 1000);
// })

// promise
// .then((data) => window.open('https://learn.javascript.ru/promise-basics', '_blank'))
// .catch((err) => window.open('https://www.google.ru/', '_blank'))



// let video = document.querySelector('video')


// navigator.mediaDevices.getUserMedia({
//     video: true,
    
// })
// .then((info) => {
//     video.srcObject = info
//     video.play()
// })
// .catch((err) => console.log('Что то не то с камерой'))


// CRUD - create, read, update, delete

// fetch() - встроенная фунция в js которая позволяет делать сетевые запросы ( запросы на api)

// GET - запрос на получение данных 
// POST - запрос когда мы отправляем данные

// function getUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// }
// getUsers()

let usersContainer = document.querySelector('.users')

async function getUsers () {
   try {
        let loadingText = document.createElement('p')
        loadingText.textContent = 'Идет загрузка...'
        
        usersContainer.append(loadingText)
    
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await res.json()
        
        usersContainer.removeChild(loadingText)
        
        
        data.forEach((user,i) => {
            let item = document.createElement('div')
            item.classList.add('item')
            
            let name = document.createElement('h2')
            let city = document.createElement('p')
            let email = document.createElement('a')
            
            name.textContent = `Имя: ${user.name}`
            city.textContent = `Город: ${user.address.city}`
            email.textContent = user.email
            email.href = `mailto:${user.email}`
            
            item.append(name,city, email)
            
            usersContainer.append(item)
            
        })
   } catch (error) {
        console.log(error);
   }
    
}
getUsers()


const displayComments = async () => {
     try {
       const response = await fetch('https://jsonplaceholder.typicode.com/comments?limit=10');
       const comments = await response.json();
       const commentsList = document.getElementById('comments');
       comments.forEach(comment => {
           const listItem = document.createElement('p');
           listItem.textContent = `ID: ${comment.id} - ${comment.name}: ${comment.email}`;
           commentsList.appendChild(listItem);
       });
     } catch (error) {
       console.error('Error fetching comments:', error);
     }
   };
   displayComments();