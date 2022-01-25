import AceEditor from "react-ace";
import taskNine from "../contstants/taskNine";
import result from "../static/task9result.png";

const Content9 = () => (
    <div className="content">
            <div id="meta9" className="content">
                <h3>Лабораторна робота №9</h3>
                <h4>Тема: Обробка рядків</h4>
                <ul><h4>Мета роботи:</h4>
                 <li>Ознайомитися з особливостями обробки рядків</li>
                <li>Навчитися розробляти алгоритми та програми із застосуванням рядків</li>
                </ul>
            </div>
    
            <div className="content" id="task9">
            <h4>Варіант №17</h4>
            <h4>Умова завдання</h4>
            <p>Розбити на склади згідно з правилами перенесення слів кожне слово на парній позиції у рядку.<br/>Слова на непарних позиціях інвертувати (записати у зворотньому порядку).</p>
            </div>

        <div className="content" id="code9">
        <h4>Текст програми</h4>
        <AceEditor
            mode="html"
            value={taskNine}
            theme="github"
            name="task9"
            editorProps={{ $blockScrolling: true }}
            />
        </div>

        <div className="content" id="result9">
            <h4>Результати виконання програми</h4>
            <img src={result} alt="schema"/>
        </div>

        <div className="content" id="summary9">
            <h4>Висновки</h4>
            <ul>Виконавши дану лабораторну роботу, ми:
                <li>Вивчили особливості роботи з рядками</li>
                <li>Навчитися розробляти алгоритми та програми обробкою рядків, <br/> а саме зміні порядку букв у слові та розбивання слова на рядки</li>
            </ul>
        </div>
    </div>
);

export default Content9;    