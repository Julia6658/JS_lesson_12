
const searchResult = document.querySelector('.content');
const searchError = document.querySelector('.error');
const sendForm = document.querySelector('.form__btn');

const searchSelect = document.querySelector('#select');
const searchNumber = document.querySelector('#number');
const form = document.querySelector('form');

//вешаем обработчик события на кнопку отправить форму

sendForm.addEventListener('click',()=>{ 
        const searchValue = searchNumber.value;
        let selectValue = searchSelect.value;

        fetch("https://swapi.nomoreparties.co/" + selectValue + "/" + searchValue)
        .then(response => response.json())
        .then(data => new Promise((resolve, reject) => {
          console.log(data);
          try {
            if (!data.name) {
                throw new Error ("Имя не найдено")
            } else {
              searchError.textContent = ''
              searchResult.textContent = `Name: ${data.name}`
              resolve(data);
            }
        }
        catch(error)  {    
            searchResult.textContent = ``
            searchError.textContent = `Ошибка: ${error.message} `
            
        }
        finally{console.log("Finally")}
      
      }))
   
})

