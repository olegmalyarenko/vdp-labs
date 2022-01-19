import { Menu } from 'antd';
const MenuLab5 = () => (
<Menu
    className='lab-menu'
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
  >
        <Menu.Item key="1"><a href='#meta5'>Мета роботи</a></Menu.Item>
        <Menu.Item key="2"><a href='#task5'>Умова завдання</a></Menu.Item>
        <Menu.Item key="3"><a href='#analize5'>Аналіз задачі</a></Menu.Item>
        <Menu.Item key="4"><a href='#descr5'>Опис алгоритму розв'язання задачі</a></Menu.Item>
        <Menu.Item key="5"><a href='#schema5'>Блок-схема алгоритму програми</a></Menu.Item>
        <Menu.Item key="6"><a href='#code5'>Текст програми</a></Menu.Item>
        <Menu.Item key="7"><a href='#result5'>Результати виконання програми</a></Menu.Item>
        <Menu.Item key="8"><a href='#check5'>Аналіз достовірності результатів</a></Menu.Item>
      <Menu.Item key="9"><a href='#summary5'>Висновки</a></Menu.Item>
      <Menu.Item key="10"><a href='#answers5'>Відповіді на контрольні питання</a></Menu.Item>
  </Menu>
);

export default MenuLab5;
