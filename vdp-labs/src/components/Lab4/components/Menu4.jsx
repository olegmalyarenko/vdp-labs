import { Menu } from 'antd';

const Menu4 = () => (
<Menu
    className='lab-menu'
    defaultSelectedKeys={['1']}
    mode="inline"
  >
        <Menu.Item key="1"><a href='#meta4'>Мета роботи</a></Menu.Item>
        <Menu.Item key="2"><a href='#task4'>Умова завдання</a></Menu.Item>
        <Menu.Item key="3"><a href='#analize4'>Аналіз задачі</a></Menu.Item>
        <Menu.Item key="4"><a href='#descr4'>Опис алгоритму розв'язання задачі</a></Menu.Item>
        <Menu.Item key="5"><a href='#schema4'>Блок-схема алгоритму програми</a></Menu.Item>
        <Menu.Item key="6"><a href='#code4'>Текст програми</a></Menu.Item>
        <Menu.Item key="7"><a href='#result4'>Результати виконання програми</a></Menu.Item>
      <Menu.Item key="8"><a href='#summary4'>Висновки</a></Menu.Item>
      <Menu.Item key="9"><a href='#answers4'>Відповіді на контрольні питання</a></Menu.Item>
  </Menu>
);

export default Menu4;