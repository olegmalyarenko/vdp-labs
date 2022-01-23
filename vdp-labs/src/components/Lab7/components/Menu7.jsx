import { Menu } from 'antd';
const Menu7 = () => (
<Menu
    className='lab-menu'
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
  >
        <Menu.Item key="1"><a href='#meta7'>Мета роботи</a></Menu.Item>
        <Menu.Item key="2"><a href='#task7'>Умова завдання</a></Menu.Item>
        <Menu.Item key="3"><a href='#analize7'>Аналіз задачі</a></Menu.Item>
        <Menu.Item key="4"><a href='#descr7'>Опис алгоритму розв'язання задачі</a></Menu.Item>
        <Menu.Item key="5"><a href='#schema7'>Блок-схема алгоритму програми</a></Menu.Item>
        <Menu.Item key="6"><a href='#code7'>Текст програми</a></Menu.Item>
        <Menu.Item key="7"><a href='#result7'>Результати виконання програми</a></Menu.Item>
        <Menu.Item key="8"><a href='#check7'>Аналіз достовірності результатів</a></Menu.Item>
      <Menu.Item key="9"><a href='#summary7'>Висновки</a></Menu.Item>
      <Menu.Item key="10"><a href='#answers7'>Відповіді на контрольні питання</a></Menu.Item>
  </Menu>
);

export default Menu7;