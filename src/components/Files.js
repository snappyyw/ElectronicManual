import React from "react";
import ReactPlayer from "react-player";

function Files() {
  return (
    <div className={"body"}>
      <h1 className="title">Работа с файлами</h1>
      <ReactPlayer
        height="500px"
        width="100%"
        controls="true"
        url="https://www.youtube.com/watch?v=uYcL6K8tS4Y"
      />
      <h3 className={"subtitle"}>Материал к видео:</h3>
      <p>
        Файл не содержит информации, он пустой и представляет собой
        наименование, в данном случае, текстовый документ с расширением .txt,
        Расширение .txt означает, что это, текстовый файл.
      </p>
      <p>
        Существует несколько основных моментов, важных при работе с файловой
        системой:
        <br />
        * Данные на диско или на внешних носителях хранятся в виде файлов.
        <br />
        * Каждый файл имеет название. Название делится на две составляющие: имя
        файла и его расширение, оно указывается после точки. Расширения служат
        для определения типа (формата) файла. В некоторых случаях расширение
        файла может отсутствовать.
        <br />* У каждого файла есть адрес (путь к нему).
      </p>
      <p>Рассмотрим, как формируется путь к файлу.</p>
      <p>
        В первом случае файл находится на диске С: в папке Window, имеет имя
        regedit.ехе. Таким образом, основные составляющие пуги к файлу
        следующие:
        <br />
        1)Наименование диска. Указывается диск и ставится двоеточие — С:. Это
        диск, на котором физически находится файл. Диск может быть и внешним,
        например, флэш- карта
        <br />
        2)Названия папок, содержащих этот файл. Папки отделяются наклонной
        чертой "\". В. данном случае путь к файлу записывается так:
        C:\Window\regedit.exe. После наименования каждой папки (директории),
        устанавливается наклонная черта. Если вложенных папок много, они
        последовательно указываются через наклонную черту.
        <br />
        3)Название самого файла, в нашем случае это regedit.exe.
      </p>
      <p>
        Таким образом, структура папок представляет собой древовидную схему: в
        каждую папку могут быть вложены другие папки (директории), внутри них
        также могут находиться папки, и т. д. В этих папках содержится множество
        файлов или один файл
      </p>
      <p>
        Файлы можно создавать, переименовать или удалять. Подобные операции
        можно производить и программно, с помощью языка программирования Java.
      </p>
      <p>
        Для работы с файлами в Java-приложениях существует специально
        предназначенный класс под названием Рис. Для работы с этим классом
        подключается специальная библиотека при помощи команды import.
      </p>
      <p>
        Все классы, находящиеся внутри библиотеки .io, станут доступны, т.к.
        символ "*" (звёздочка) означает возможность использования всех классов,
        находящихся в указанной: библиотеке. Подключив к проекту эту библиотеку,
        можно начать работать с файлами, Рассмотрим основные методы работы с
        файлами в Java.
        <br />
        * Метод createNewFile() применяется, если требуется создать новый файл.
        При помощи этого метола можно создать на диске новый файл по указанному
        адресу.
        <br />
        * Метод exists() предназначен для программной проверки существования
        файла. Этот метод определяет, есть такой файл на диске или нет.
        <br />
        * Метод renameTo() позволяет переименовать файл, т. с. задать ему
        какое-то другое имя.
        <br />
        * Метод delete() позволяет удалить файл с диска.
        <br />* Метод getParent() позволяет получить путь к файлу.
      </p>
      <p>
        Эти методы нам сейчас и понадобятся, Перейдем в среду разработки Eclipse
        и создадим новый проект Лау, назвав его lesson_21.
      </p>
      <p>
        На прошлом занятии мы познакомились с визуальным редактором для
        разработки интерфейса. С помощью этого редактора создадим интерфейс
        нашего нового приложения.
      </p>
      <p>
        Для создания такого интерфейса нам необходимо добавить:
        <br />
        * одну текстовую надпись JLabel, содержащую текст: "Укажите путь к
        файлу"
        <br />
        * текстовое поле JTextField, которое будет находиться справа от надписи.
        <br />
        * пять кнопок JButton с названиями: "Создать новый”, "Удалить",
        "Переименовать", "Прочитать", "Записать".
        <br />* многострочное текстовое поле JTextArea, которое будет
        располагаться справа от кнопок
      </p>
      <p>
        * Для текстового поля JTextField укажем имя — textFieldFile. <br />* Для
        кнопки "Создать новый" — buttonNoviy.
        <br />
        * Для кнопки "Удалить" — buttonUdalit.
        <br />
        * Для кнопки "Переименовать" — buttonPereim.
        <br />
        * Для кнопки "Записать" — buttonProch.
        <br />
        * Для кнопки "Прочитать" — buttonZap.
        <br />* Для многострочного текстового поля JTextArea — textArea.
      </p>

      <p>
        Нам нужно объявить переменную JTextArea в переменных класса, чтобы она
        была доступна в любой точке класса (иначе из программного кода к ней
        можно будет обратиться только внутри конструктора класса).
      </p>
      <p>
        В строке, где создается объект JTextArea удалено указание типа
        переменной, эту переменную мы объявили как переменную класса, а в
        конструкторе просто обращаемся к ней.
      </p>
      <p>
        Если бы мы оставили тип переменной, это была бы уже другая переменная. В
        данном же случае мы имеем переменную, объявленную в самой верхней части
        класса. Указан сё тип, имя. А ниже уже создаётся объект, привязанный к
        этой переменной.
      </p>
      <p>
        Теперь визуальная часть полностью готова. Начинаем добавлять основной
        программный код.
      </p>
      <p>
        Автоматизируем кнопку создания нового файла. Перейдём в визуальный
        конструктор.
      </p>

      <p>
        Выделив кнопку "Создать новый", двойным щелчком левой клавишей мыши
        перейдем в обработчик события, который будет создан по умолчанию.
      </p>
      <p>
        Двойной щелчок на элементе формы автоматически создаёт обработчик
        события, наиболее часто происходящего с этим элементом формы. Для кнопки
        основное событие — нажатие на кнопку, событие типа actionPerformed().
        Всё, прописанное внутри метода actionPerformed(), будет выполняться
        после нажатия на эту кнопку.
      </p>
      <p>
        В этом обработчике будет объявлена переменная под названием str, типа
        String, строк В эту переменную запишется содержимое текстового поля,
        находящегося в самой верхне части программного кода.
      </p>
      <p>Выберем переменную textFieldFile — нужное нам текстовое поле.</p>
      <p>
        Обратимся к этому текстовому полю, нажимаем и при помощи метода
        getText() (который мы выберем после оператора точка (.)) получим
        содержимое этого поля ее текста, который будет там написан.
      </p>
      <p>
        Далее оператором точка (.) вызовем сщё один метод под названием trim().
        Метод trim() срезает пробелы справа и слеза, т.е. удаляет ненужные
        пробелы, если пользователь случайно ‚их ввёл.
      </p>
      <p>
        Создаём конструкцию if. Выбираем str, через оператор точка (.) вызовем
        метод isEmpty(). Метод isEmpty()— это проверка факта. пустой строки.
        Вели метод isEmpty() возвращает значение "истина", значит, строка
        пустая, пользователь не указал ничего в имени файла. В этом случае для
        него нужно вывести предупреждающее сообщение
      </p>
      <p>
        Открываем и закрываем фигурные скобки, при помощи класса JOptionPane
        вызываем метод showMessageDialog(). В скобках этого метода укажем 4
        параметра. Первый параметр null — родительское окно, ему принадлежит
        данное диалоговое окно. В нашем случае Родительское окно само по себе,
        поэтому первый параметр null - пустой параметр. Следующим параметром
        указываем текстовое сообщение для пользователя: "Введите путь к файлу!".
        Третьим параметром укажем заголовок окна — Ошибка: Переменные типа
        String указываются в двойных кавычках. Сообщение для пользователя и
        заголовок окна - переменные типа String, строковые переменные, И
        последний, четвертый параметр 0 — тип иконки, выводимой в окне
        пользователя.
      </p>
      <p>
        Записываем блок else (иначе). Нам нужно описать ситуацию, которая
        возникнет, если пользователь ввёл какой-то текст. Создадим открывающую и
        закрывающую фигурные скобки, Внутри фигурных скобок else создаём
        переменную nf типа File и новый объект new File(str). Внутри круглых
        скобок помещаем введено пользователем значение переменной str.
      </p>
      <p>
        При помощи переменной типа File можно производить некоторые операции с
        файлами, такие как удаление или переименование файлов. В круглых скобках
        указывается путь к файлу. Подчёркивание красным цветом говорит о том,
        что в самой верхней части, где происходит добавление библиотек, не
        добавлена библиотека для работы с классом File, о которой говорилось в
        самом начале. Добавим эту библиотеку:
      </p>
      <p>
        Снова возвращаемся к программному коду, подчеркивание красным цветом
        исчезло Создадим конструкцию try ... catch (попытка ... исключение). Эта
        конструкция используется, если при выполнении некоторых операций, может
        возникнуть исключительная ситуация невозможность исполнения команд. В
        нашем случае, если пользователь укажет неверный адрес файла, программа
        не сможет создать этот файл.
      </p>
      <p>
        В таком случае операции по созданию файла можно поместить в конструкцию
        try ... catch. После ключевого слова try пропишем попытку создания
        файла.
      </p>
      <p>
        Обратимся к переменной nf связанной с тем файлом, путь к которому был
        указан, и вызываем метод createNewFile() — создать новый файл.
      </p>
      <p>
        После создания файла выведем пользователю сообщение в диалоговое окне об
        успешном создании файла: "Файл создан!". Для этого воспользуемся классом
        JOptionPane и методом showMessageDialog. В диалоговом окне выведем
        сообщение пользователю.
      </p>
      <p>
        Команды, которые должны сработать в случае, если у программы не
        получится создать файл, записываются после ключевого слова catch. В
        круглых скобках создается переменная типа IOException — исключительная
        ситуация ввода-вывода.
      </p>
      <p>
        У конструкции catch также есть свои фигурные скобки, выделяющие блок,
        выполняемый в случас неуспешной попытки. Мы в случае не удачной попытки
        создания файла выведем сообщение в диалоговом окне: "Файл ие создан!".
        Для этого вновь воспользуемся классом JOptionPane и методом
        showMessageDiaolog.
      </p>
      <p>
        Запустим приложение на исполнение. Конструкция try ... catch будет
        работать так: сначала выполняется блок try — попытка. Если попытка
        успешна, блок catch не выполнится вообще. Если файл будет создан, блок
        catch не сработает.
      </p>
      <p>
        Если же файл создать не удастся — произойдет ошибка (например,
        пользователь указал неправильный путь к файлу), в этом случае сработает
        блок catch, и пользователю будет выведено сообщение, что файл создать не
        удалось.
      </p>
      <p>
        Бсли пользователь не вводит ничего, ему выводится предупреждающее
        сообщение: "Введите путь к файлу!".
      </p>
      <p>
        Пользователь ввёл, например, путь C:\text.txt, т. е. имя создаваемого
        файла и путь к нему. В этом случае при нажатии пользователем кнопки
        "Создать новый" появляется сообщение "Файл создан!". Это информационное
        сообщение об успешном действии, иконка уже другая. Пользователь нажимает
        "ОК" — окно закрывается.
      </p>
      <p>
        Проверим, действительно ли файл был создан. Перейдём в корень диска
        новый файл под названием text.txt, созданный программно.
      </p>
      <p>
        Вернемся к нашему приложению и создадим еше один файл, например,
        test123.txt — в корне диска С:\ появился еще один файл. Если файл с
        таким именем уже существует, при выполнении метода сгеcreateNewFile,
        новый файл создаваться не будет. Теперь создадим команды для кнопки
        "Удалить".
      </p>
      <p>
        Опишем процесс удаления файла (часть программного кода в блоке else).
        Мы, воспользовавшись классом File, создали переменную типа File, передав
        ей путь к этому файлу. Путь находится сейчас в переменной str.
      </p>
      <p>
        Файл нужно удалить, а не создать, поэтому в данном случае, вместо метода
        createNewFile(), обращаясь к переменной nf типа File через оператор
        точка (.), нужно вызвать метод delete(). Метод delete() удаляет файл.
      </p>
      <p>
        После удалёния файла пользователю вместо сообщения "Файл создан"
        выводится сообщение "Файл удален!". Пользователь получил сообщение об
        успешном удаление файла.
      </p>
      <p>
        Данная конструкция может также сработать и неуспешно, например, когда
        пользователь пытается удалить файл, изначально отсутствующий ва диске.
        Поэтому. прежде чем удалять файл, сначала нужно проверить наличие этого
        файла на диске.
      </p>
      <p>
        Для проверки наличия файла на диске служит метод exists(). Этот метод,
        подобно методу isEmpty() возвращает значение типа "булево". "Истина" —
        если файл присутствует на диске, ложь в противном случае.
      </p>
      <p>
        Запишем конструкцию if обратимся к переменной nf вызовом метод exists().
        Если он возвращает значение "Истина", значит, файл с таким именем на
        диске действительно существует, в этом случае его можно удалять. После
        ставим фигурные скобки. Бели файл существует, он удаляется, и
        пользователю выводится сообщение, что файл удалён.
      </p>
      <p>
        Теперь зададим действия для кнопки "Переименовать" Выделим кнопку на
        форме и создадим для нее обработчик событий -actionPerformed(). Сейчас
        опять можно не писать программный код полностью, а воспользоваться
        кодом, уже. написанным для предыдущей кнопки buttonUdalit.
      </p>
      <p>
        Выделим блок программного кода, начиная от строки объявления переменной
        str и заканчивая закрывающей фигурной скобкой конструкции else, копируем
        его, переходим в обработчик кнопки "Переименовать" и вставляем в него
        программный код.
      </p>
      <p>
        Выясним, какая часть программного кода на этот раз останется без
        изменений, и что изменится.
      </p>
      <p>
        В переменную str снова запишем значение текстового поля, срезав пробелы
        справа и слева командой trim(). Затем проверяем при помощи метода
        isEmpty() пуста ли строка. Если строка пустая, выводим пользователю
        сообщение: "Введите путь к файлу!" Пока все без изменений. После
        некоторых изменений в программном коде — получится следующее |
        (изменения выделены жирным шрифтом):
      </p>
      <p>
        Если файл ие существует, пользователю выводится другое сообщение: "Файл
        ие найден". Копируем строку, выводящую диалоговое окно, вставляем её в
        блок еде. и записываем в иём: "Файл не найден!" (конструкцию try...
        catch удаляем).
      </p>
      <p>
        Опишем процесс переименования файла. Для начала работы с файлом,
        необходимо создать переменную тиша File, передать в переменную str путь
        к нему. Очевидно, переменная nf привязывается к этому файлу — она
        отвечает за файл, указанный пользователем.
      </p>
      <p>
        Метод exists() определяет наличие файла, его существование. Если этот
        метод возвращает значение "Истина", выполняется конструкция, находящаяся
        в блоке if. Если же файл не существует, выполняется конструкция else.
        Файл можно переименовать, только при условии его существования на диске,
        поэтому проверка здесь необходима.
      </p>
      <p>
        Если файл не существует, пользователю, как и в предыдущем случае,
        выводится сообщение: "Файл ие найден!" — эта часть кода не меняется.
      </p>
      <p>
        Но теперь нужно выполнить не удаление файла, а сго переименование,
        строку. описывающую этот процесс, удаляем. После переименования файла,
        пользователю выводится другое сообщение: "Файл переименован!" — вносим
        изменения.
      </p>
      <p>
        Перед выводом сообщения об успешном переименовании файла выполним эту
        операцию. Сначала необходимо обратиться к пользователю, чтобы он указал
        новое имя для файла. Создадим переменную строкового типа, называем её
        newName, новое имя, в которую запишем новое имя, введенное
        пользователем. Запросим новое значение у пользователя с помощью
        диалогового окна. Для этого обратимся к классу JOptionPane, и вызовем
        метод showInputDialog().
      </p>
      <p>
        В отличие от метода showMessageDialog(), метод showInputDialog позволяет
        пользователю ввести значение с клавиатуры.
      </p>
      <p>
        Метод showMessageDialog отображает сообщения пользователю, а метод
        showInputDialog() позволяет пользователю ввести значение, которое он
        хочет передать в программу.
      </p>
      <p>
        Пользователь увидит окно, запрашивающее этот результат, Теоретически
        пользователь может ничего туда не ввести и просто закрыть окно, В этом
        случае переменная newName получит никакого значения. Чтобы это
        определить, надо записать конструкцию if проверяющую, если newName равно
        null. null — это пустое значение (получается, когда пользователь не ввел
        ничего, переменная newName осталась пустой). В этом случае ей
        присваивается значение пустой строки.
      </p>
      <p>
        Обратите внимание, значение null, т.e. пустое значение, и пустая строка
        — это не одно и то же. Пустая строка подразумевает, какое-то значение
        есть, о оно не содержит символов, а null означает полное отсутствие
        любого значения.
        <br />
        Далее осуществляется проверка: Значение выражения
        !newName.trim().isEmpty(), как и ранее, позволит проверить: пустая
        строка или нет. Если строка, введённая пользователем, не пустая, то
        переименуем файл. Иначе, если строка пустая - в этом случае делать
        ничего не нужно. Действие осуществляется, если пользователь ввёл
        какое-то имя. Поэтому в нашем. случае мы проверяем обратное условие:
        если строка ИЕ пустая, тогда выполняются какие-то действия. Чтобы
        обозначить признак отрицания (НЕ), нужно поставить вначале выражения
        символ: "!".
      </p>
    </div>
  );
}

export default Files;
