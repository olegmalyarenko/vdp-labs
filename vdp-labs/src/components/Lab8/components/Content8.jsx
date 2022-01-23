import AceEditor from "react-ace";
import algorithm from "../constants/algorithm";

const Content8 = () => (
<div className="content">
        <div id="meta8" className="content">
            <h3>Лабораторна робота №8</h3>
            <h4>Тема: Багатовимірні масиви</h4>
            <ul><h4>Мета роботи:</h4>
             <li>Ознайомитися з особливостями багатовимірних масивів</li>
            <li>Опанувати технологію застосування багатовимірних масивів даних</li>
            <li>Навчитися розробляти алгоритми та програми із застосуванням багатовимірних масивів</li>
            </ul>
        </div>

        <div className="content" id="task8">
        <h4>Варіант №17</h4>
        <h4>Умова завдання</h4>
        <p>Задати матрицю довільної вимірності та вектор. <br/>Визначити транспоновану матрицю та здійснити множення матриці на вектор.</p>
        </div>

        <div className="content" id="code8">
        <h4>Текст програми</h4>
        <AceEditor
            mode="html"
            value={algorithm}
            theme="github"
            name="task32"
            editorProps={{ $blockScrolling: true }}
            />
        </div>

        <div className="content" id="summary8">
            <h4>Висновки</h4>
            <ul>Виконавши дану лабораторну роботу, ми:
                <li>Вивчили особливості роботи з багатовимірними масивівами даних</li>
                <li>Навчитися розробляти алгоритми та програми із застосуванням багатовимірних масивів, <br/>на прикладі операції з матрицею та вектором</li>
            </ul>
        </div>
</div>
);

export default Content8;
