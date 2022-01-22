import { Menu } from 'antd';
const Menu6 = () => (
<Menu
    className='lab-menu'
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
  >
        <Menu.Item key="1"><a href='#meta6'>Мета роботи</a></Menu.Item>
        <Menu.Item key="2"><a href='#task6'>Умова завдання</a></Menu.Item>
        <Menu.Item key="3"><a href='#analize6'>Аналіз задачі</a></Menu.Item>
        <Menu.Item key="4"><a href='#descr6'>Опис алгоритму розв'язання задачі</a></Menu.Item>
        <Menu.Item key="5"><a href='#schema6'>Блок-схема алгоритму програми</a></Menu.Item>
        <Menu.Item key="6"><a href='#code6'>Текст програми</a></Menu.Item>
        <Menu.Item key="7"><a href='#result6'>Результати виконання програми</a></Menu.Item>
        <Menu.Item key="8"><a href='#check6'>Аналіз достовірності результатів</a></Menu.Item>
      <Menu.Item key="9"><a href='#summary6'>Висновки</a></Menu.Item>
      <Menu.Item key="10"><a href='#answers6'>Відповіді на контрольні питання</a></Menu.Item>
  </Menu>
);

export default Menu6;