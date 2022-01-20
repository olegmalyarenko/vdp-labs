import { Menu } from 'antd';

const Menu2 = () => (
<Menu
    className='lab-menu'
    defaultSelectedKeys={['1']}
    mode="inline"
  >
        <Menu.Item key="1"><a href='#meta2'>Мета роботи</a></Menu.Item>
        <Menu.Item key="2"><a href='#task2'>Умова завдання</a></Menu.Item>
        <Menu.Item key="3"><a href='#analize2'>Аналіз задачі</a></Menu.Item>
        <Menu.Item key="4"><a href='#descr2'>Опис алгоритму розв'язання задачі</a></Menu.Item>
        <Menu.Item key="5"><a href='#schema2'>Блок-схема алгоритму програми</a></Menu.Item>
        <Menu.Item key="6"><a href='#code2'>Текст програми</a></Menu.Item>
        <Menu.Item key="7"><a href='#result2'>Результати виконання програми</a></Menu.Item>
        <Menu.Item key="8"><a href='#check2'>Аналіз достовірності результатів</a></Menu.Item>
      <Menu.Item key="9"><a href='#summary2'>Висновки</a></Menu.Item>
      <Menu.Item key="10"><a href='#answers2'>Відповіді на контрольні питання</a></Menu.Item>
  </Menu>
);

export default Menu2;
