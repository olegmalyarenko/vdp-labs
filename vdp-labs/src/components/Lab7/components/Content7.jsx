import AceEditor from "react-ace";
import algorithm from "../constants/algorithm";
import res from "../static/res7.png";
import schema7 from "../static/schema7.jpg";

const Content7 = () => (
    <div className="content">
        <div id="meta7" className="content ml">
            <h3>Лабораторна робота №7</h3>
            <h4>Тема: Одновимірні масиви</h4>
            <ul><h4>Мета роботи:</h4>
             <li>Ознайомитися з особливостями типу масиву</li>
            <li>Опанувати технологію застосування масивів даних</li>
            <li>Навчитися розробляти алгоритми та програми із застосуванням одновимірних масивів</li>
            </ul>
        </div>

        <div className="content ml" id="task7">
        <h4>Варіант №17</h4>
        <h4>Умова завдання</h4>
        <p>Задати два упорядкованих за зростанням одновимірних масиви. <br/>Побудувати упорядкований за зростанням третій масив злиттям двох заданих.</p>
        </div>

        <div className="content ml" id="analize7">
            <h4>Аналіз задачі, теоретичні обгрунтування вибраного методу вирішення задачі,<br/> розрахункові формули, посилання на літературні джерела.</h4>
      
        <ul>Для вирішення задачі ідеально підходить алгоритм Сортування злиттям, за умовою якого:
             <li>Сортований масив розбивається на дві частини приблизно однакового розміру</li>
             <li>Кожна з вийшов частин сортується окремо, наприклад - тим же самим алгоритмом</li>
            <li>Два впорядкованих масиву половинного розміру з'єднуються в один</li>
        </ul>
        </div>

        <div className="content ml" id="descr7">
            <h4>Опис алгоритму розв'язання задачі.</h4>
            <div>
            <ul>
                <li>Отримуємо два впорядковані масиви даних one і two</li>
                <li>Передаємо їх в функцію з алгоритмом Сортування злиттям</li>
                <ul>Алгоритм Сортування злиттям
                    <li>Створюємо змінні індексів для 3 масивів i,j,k </li>
                    <li>Створюємо масив res для відсортованих даних</li>
                    <ul>Поки індекс i меньший довжини one та індекс j меньший довжині two
                       <li>Якщо елемент з поточним індексом першого масива більше за елемент другого,додаємо його в масив res</li>
                       <li>Якщо елемент з поточним індексом другого масива більше за елемент першого,додаємо його в масив res</li>
                       <li>Збільшуємо індекси j та k</li>
                    </ul>
                    <ul>Якщо індекс i більше довжини one 
                       <li>Додаємо цей елемент в масив res</li>
                       <li>Збільшуємо індекси i та k</li>
                    </ul>
                    <ul>Якщо індекс j більше довжини two
                       <li>Додаємо цей елемент в масив res</li>
                       <li>Збільшуємо індекси j та k</li>
                    </ul>
                </ul>    
                    <li>Виводимо отриманий масив res</li>
                </ul>
            </div>   
        </div> 

        <div className="content ml" id="schema7">
            <h4>Блок-схема Сортування злиттям</h4>
            <img src={schema7} alt="schema" width={500}/>
        </div> 

        <div className="content ml" id="code7">
        <h4>Текст програми</h4>
        <AceEditor
            mode="html"
            value={algorithm}
            theme="github"
            name="task32"
            editorProps={{ $blockScrolling: true }}
            />
        </div>

        <div className="content ml" id="result7">
            <h4>Результати виконання програми</h4>
            <img src={res} alt="result"/>
        </div>
        
        <div className="content ml" id="check7">
            <h4>Аналіз достовірності результатів</h4>
          <p>Якщо подивитися вхідні дані з якими працювала функція <br/>
         {`one = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}, two = {10, 11, 12, 13, 14, 15, 16, 17, 18, 19}`} ,  <br/>
          то можна зрозуміти що отриманий результат відсортовано правильно </p>
        </div>

        <div className="content ml" id="summary7">
            <h4>Висновки</h4>
            <ul>Виконавши дану лабораторну роботу, ми:
                <li>Вивчили особливості роботи з масивами даних</li>
                <li>Навчитися розробляти алгоритми та програми із застосуванням одновимірних масивів</li>
            </ul>
        </div>

        <div className="content ml" id="answers7">
            <h4>Відповіді на контрольні питання</h4>
            <h5>Дати означення масиву та типу масиву</h5>
            <p>Тип масиву — це структурований тип даних, множина допустимих значень <br/> котрого складається з усіх масивів, для яких зафіксовано: <br/>
             розмірність,базовий тип, індексний тип,множину значень індексу.</p>
             <h5>Якими є властивості масивів даних?</h5>
             <ul>Основні властивості масивів:
                <li>однорідність — усі елементи належать одному типу;</li>
                <li>сталість — вимірність масиву задається під час його оголошення і не змінюється протягом роботи з ним;</li>   
                <li>рівнодоступність — спосіб доступу до всіх елементів є однаковим;</li>
                <li>послідовність розташування — усі елементи масиву розташовані в послідовних комірках оперативної пам’яті;</li>
                <li>індексованість — елементи однозначно ідентифікуються своїми індексами;</li>
                <li>упорядкованість індексу — індексний тип має бути простим порядковим типом даних.</li>
             </ul>
             <h5>Які базові операції обробки одновимірних масивів?</h5>
           <ul>Базовими операціями обробки масивів є:
             <li>введення та виведення масиву;</li>
              <li>ініціалізація масиву;</li>
              <li>копіювання масиву;</li>
             <li>пошук максимального або мінімального елемента;</li>
             <li>обчислення узагальнювальних характеристик (сум елементів, їх добутків);</li>
             <li>пошук заданого елемента;</li>
             <li>перестановка елементів або обмін значеннями між елементами масиву;</li>
              <li>вставка та видалення елемента.</li>
           </ul>
           <h5>Як повернути масив із функції?</h5>
           <li>Для виведеня результатів сортування масиву ми використовували функцію, яка повертала кожний елемент масиву через пробіл.</li>
        </div>   
    </div>
);

export default Content7;
