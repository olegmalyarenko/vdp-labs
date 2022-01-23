import { Menu } from 'antd';
const Menu8 = () => (
<Menu
    className='lab-menu'
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
  >
        <Menu.Item key="1"><a href='#meta8'>Мета роботи</a></Menu.Item>
        <Menu.Item key="2"><a href='#task8'>Умова завдання</a></Menu.Item>
        <Menu.Item key="3"><a href='#analize8'>Аналіз задачі</a></Menu.Item>
        <Menu.Item key="4"><a href='#descr8'>Опис алгоритму розв'язання задачі</a></Menu.Item>
        <Menu.Item key="5"><a href='#schema8'>Блок-схема алгоритму програми</a></Menu.Item>
        <Menu.Item key="6"><a href='#code8'>Текст програми</a></Menu.Item>
        <Menu.Item key="7"><a href='#result8'>Результати виконання програми</a></Menu.Item>
        <Menu.Item key="8"><a href='#check8'>Аналіз достовірності результатів</a></Menu.Item>
      <Menu.Item key="9"><a href='#summary8'>Висновки</a></Menu.Item>
      <Menu.Item key="10"><a href='#answers8'>Відповіді на контрольні питання</a></Menu.Item>
  </Menu>
);

export default Menu8;