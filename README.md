# JS_lesson_12
1. В терминале перейти в папку с проектом -> вызвать команду npm -init -> устанавливаем модули через require <br>
2. В терминале ввести команду npm -v<br>
3. Код внутри блока Finally выполняется всегда, даже при наличии ошибок. Этот блок нужен для завершения начатых процессов, например, вычислений  <br>
4. let user = undefined;<br>
  try {  <br>
    console.log(`Привет, ${user.name}`);<br>
  }<br>
  catch(err) {<br>
    console.log("Имя пользователя не заполнено")<br>  
  }<br>
5. Через метод throw new Error ("Cообщение о сгенерированной ошибке")
6. В командной строке вызвать команду npm init, далее ответить на все вопросы через Enter или npm init --yes<br>
7. try {<br>
      console.log(parseInt('ыыыы'));  <br>
      throw new Error ("Аргумент не является числом")<br>
  }<br>
  catch(error) {<br>
    {console.log(error.message)}<br>
  }<br>
  
 8. Чкрез метод moment().format('dddd'); 

