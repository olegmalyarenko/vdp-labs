import { Menu } from 'antd';

const Menu3 = () => (
<Menu
    className='lab-menu'
    defaultSelectedKeys={['1']}
    mode="inline"
  >
        <Menu.Item key="1"><a href='#meta3'>Мета роботи</a></Menu.Item>
        <Menu.Item key="2"><a href='#task3'>Умова завдання</a></Menu.Item>
        <Menu.Item key="3"><a href='#analize3'>Аналіз задачі</a></Menu.Item>
        <Menu.Item key="4"><a href='#descr3'>Опис алгоритму розв'язання задачі</a></Menu.Item>
        <Menu.Item key="5"><a href='#schema3'>Блок-схема алгоритму програми</a></Menu.Item>
        <Menu.Item key="6"><a href='#code3'>Текст програми</a></Menu.Item>
        <Menu.Item key="7"><a href='#result3'>Результати виконання програми</a></Menu.Item>
      <Menu.Item key="8"><a href='#summary3'>Висновки</a></Menu.Item>
      <Menu.Item key="9"><a href='#answers3'>Відповіді на контрольні питання</a></Menu.Item>
  </Menu>
);

export default Menu3;