import { Menu } from 'antd';
const MenuLab1 = () => (
<Menu
    className='lab-menu'
    defaultSelectedKeys={['1']}
    mode="inline"
  >
        <Menu.Item key="1"><a href='#meta'>Мета роботи</a></Menu.Item>
        <Menu.Item key="2"><a href='#task'>Умова завдання</a></Menu.Item>
        <Menu.Item key="3"><a href='#analize'>Аналіз задачі</a></Menu.Item>
        <Menu.Item key="4"><a href='#descr'>Опис алгоритму розв'язання задачі</a></Menu.Item>
        <Menu.Item key="5"><a href='#schema'>Блок-схема алгоритму програми</a></Menu.Item>
        <Menu.Item key="6"><a href='#code'>Текст програми</a></Menu.Item>
        <Menu.Item key="7"><a href='#result'>Результати виконання програми</a></Menu.Item>
        <Menu.Item key="8"><a href='#check'>Аналіз достовірності результатів</a></Menu.Item>
      <Menu.Item key="9"><a href='#summary'>Висновки</a></Menu.Item>
      <Menu.Item key="10"><a href='#answers'>Відповіді на контрольні питання</a></Menu.Item>
  </Menu>
);

export default MenuLab1;