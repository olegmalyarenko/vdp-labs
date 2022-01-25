import { Menu } from 'antd';
const Menu9 = () => (
<Menu
    className='lab-menu'
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
  >
        <Menu.Item key="1"><a href='#meta9'>Мета роботи</a></Menu.Item>
        <Menu.Item key="2"><a href='#task9'>Умова завдання</a></Menu.Item>
        <Menu.Item key="3"><a href='#analize9'>Аналіз задачі</a></Menu.Item>
        <Menu.Item key="4"><a href='#descr9'>Опис алгоритму розв'язання задачі</a></Menu.Item>
        <Menu.Item key="5"><a href='#schema9'>Блок-схема алгоритму програми</a></Menu.Item>
        <Menu.Item key="6"><a href='#code9'>Текст програми</a></Menu.Item>
        <Menu.Item key="7"><a href='#result9'>Результати виконання програми</a></Menu.Item>
        <Menu.Item key="8"><a href='#check9'>Аналіз достовірності результатів</a></Menu.Item>
      <Menu.Item key="9"><a href='#summary9'>Висновки</a></Menu.Item>
      <Menu.Item key="10"><a href='#answers9'>Відповіді на контрольні питання</a></Menu.Item>
  </Menu>
);

export default Menu9;