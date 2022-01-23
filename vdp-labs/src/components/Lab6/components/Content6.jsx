import AceEditor from "react-ace";
import schema1 from "../static/schema61.png";
import schema2 from "../static/schema62.png";
import taskCode from "../constants/taskCode";
import result1 from "../static/res61.png";
import result2 from "../static/res62.png";

const Content6 = () => (
 <div className="content">
     <div id="meta6">
            <h3>Лабораторна робота №6</h3>
            <h4>Тема: Покажчики</h4>
            <ul><h4>Мета роботи:</h4>
             <li>Ознайомитися з особливостями посилальних типів даних</li>
            <li>Опанувати технологію застосування посилальних типів даних</li>
            <li>Навчитися розробляти алгоритми та програми із застосуванням посилальних типів даних</li>
            </ul>
        </div>

        <div className="content" id="task6">
        <h4>Варіант №17</h4>
        <h4>Умова завдання</h4>
        <p>Скласти програму обчислення найбільшого числа Фібоначчі, яке не перевищує число a<br/>
        та номера найменшого числа Фібоначчі, яке більше від числа a.<br/> Використати функції, що повертають покажчики на тип int.
        </p>
        </div>

        <div className="content" id="analize6">
            <h4>Аналіз задачі, теоретичні обгрунтування вибраного методу вирішення задачі,<br/> розрахункові формули, посилання на літературні джерела.</h4>
        <p>Числа Фібоначчі — це, напевно, найпростіша послідовність.Формально їх можна відобразити за формулою:</p>
        <p>{`F0 = 0, F1 = 1, Fn = Fn-2 + Fn-1, n >=2`}</p>
        <p>Для знаходження потрібного числа, що задовольняє умовам задачі, ми будемо використовувати Метод перебору</p>
        </div>   

        <div className="content" id="descr5">
            <h4>Опис алгоритму розв'язання задачі.</h4>
            <div>
            <ul>
                <li>Вводимо значення аргументу a</li>
                <li>Створюємо зміну b,що буде визначатися  функцією <br/>для знаходження номера числа Фібоначчі, яке більше ніж a</li>
                <ul>Шукаємо значення b
                    <li>Аргумент функції називаємо g </li>
                    <li>Створюємо змінні a =0,b=1, як перщі елементи послідовності</li>
                    <li>Створюємо змінну n=1, як номер числа послідовності</li>
                    <ul>Проходимось циклом по можливим значенням n
                       <li>Додаємо значення a і b</li>
                       <li>b  прирівнюємо до різниці a від b</li>
                       <li>Якщо а більша за g,завершуємо цикл</li>
                       <li>Якщо ні, то збільшуємо n</li>
                    </ul>
                    <li>Передаємо отримане значення n через посилання</li>
                </ul>
                <li>Створюємо змінну n=1, для номера значення найбільшого числа Фібоначчі, яке не перевищує число a та b</li>
                <li>Поки число Фібоначчі від n меньша за a та b, збільшуємо n</li>
                <li>Шукаємо номер найменьшого числа Фібоначчі від зменьшеного на 1цю n </li>
                <li>Виводимо отриманий результат</li>
            </ul>
            </div>
        </div> 

        <div className="content" id="schema6">
            <h4>Блок-схема обчислення числа Фібоначі</h4>
            <img src={schema1} alt="schema"/>

            <h4>Блок-схема функції для знаходження номера числа Фібоначчі, яке більше ніж передане число</h4>
            <img src={schema2} alt="schema"/>
        </div>

        <div className="content" id="code6">
        <h4>Текст програми</h4>
        <AceEditor
            mode="html"
            value={taskCode}
            theme="github"
            name="task32"
            editorProps={{ $blockScrolling: true }}
            />
        </div>

        <div className="content" id="result6">
            <h4>Результати виконання програми</h4>
            <img src={result1} alt="schema"/><br/><br/>
            <img src={result2} alt="schema"/>
        </div>

        <div className="content" id="summary6">
            <h4>Висновки</h4>
            <ul>Виконавши дану лабораторну роботу, ми:
                <li>Вивчили особливості посилальних типів даних</li>
                <li>Навчитися розробляти алгоритми та програми із застосуванням посилальних типів даних</li>
            </ul>
        </div>

        <div className="content" id="check6">
            <h4>Аналіз достовірності результатів</h4>
            <p>Перевіряюмо результат 2:</p>
            <div> Маємо дані a=7. Вираховуємо ряд Фібоначчі 0,1,1,2,3,5,8 , 8 більше за 6 значить b = 6(тому що це порядковий номер 8).<br/>
            Найбільший результат послідовності, що меньше 6, це 5. Значення вірне!</div>
        </div>

        <div className="content" id="answers6">
            <h4>Відповіді на контрольні питання</h4>
            <h5>Дати поняття посилальних типів даних?</h5>
            <p>Це тип змінної у мові C++, який працює як псевдонім іншого об'єкта чи значення.</p>
            <h5>Як здійснюється до доступ до значення змінної?</h5>
            <p>Доступ до елемента через посилання здійснюється за допомогою індексатора.</p>
            <h5>Як оголосити покажчик на певний тип та посилання на змінну?</h5>
            <p>Покажчик оголошується після оголошення типу даних, символом «*», посилання на змінну оголошується перед назвою змінної і позначається символом «&».</p>
            <h5>Як ініціалізувати покажчик та посилання?</h5>
            <p>Ініціалізація покажчиків здійснюється з використанням операції отримання адреси  «&» при визначенні покажчика або за допомогою оператора присвоєння.</p>
             <h5>Що відбувається під час звернення до неініціалізованого покажчика?</h5>
             <p>Вмістом неініціалізованого покажчика є звичайне сміття.</p>
             <h5>Які значення можна присвоювати покажчику?</h5>
             <p>Значення одного покажчика можна присвоювати іншому при умові, що вони мають однаковий базовий тип (є покажчиками на однаковий тип даних).
                 <br/> Якщо покажчики вказують на різні типи даних, то працює операція приведення типів.</p>
            <h5>Які операції припустимі для покажчиків?</h5>  
            <p>Покажчики підтримують ряд операцій: надання, отримання адреси покажчика, отримання значення за покажчиком, деякі арифметичні операції та операції порівняння.</p>   
            <h5>Що таке «розименування покажчика»?</h5>
            <p>Операція розіменування «*» використовується разом з покажчиками і вилучає значення, на яке вказує змінна-покажчик, розташована безпосередньо після символа «*».</p>
            <h5>Як змінюється значення покажчика при додаванні чи відніманні цілого числа?</h5>
            <p>В обох випадках результатом операції буде покажчик на вихід­ний тип, значення якого на вказане число елементів більше або менше вихідного. <br/> Тобто, якщо до покажчика р можна додати деяку цілу величину n, а саме: р + n, то цей вираз визначає ділянку об’єкта, що займає n-не місце після об’єкта,  <br/> на який вказує р, при цьому n автоматично збільшується на коефіцієнт, що дорівнює відповідній довжині об’єкта. Наприклад, якщо int займає 4 байти, то цей коефіцієнт дорівнює чотирьом.</p>
           <h5>У чому полягає особливість покажчиків типу void*?</h5>
           <p>Покажчик на тип void має свої особливості. Це означає, що покажчик на тип void є універсальним покажчиком, <br/> який може налаштовуватись на будь-який тип значень, в тому числі і нульовий.</p>
        </div>    
 </div>
);

export default Content6;