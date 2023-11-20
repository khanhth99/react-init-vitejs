import { Breadcrumb, Typography } from 'antd';

const { Title } = Typography;
function Header({ title }: Record<string, string[]>) {
  return (
    <div className="mb-[10px]">
      <Breadcrumb separator=">" items={title.map((item) => ({ title: item }))} />
      <Title level={3}>{title[title.length - 1]}</Title>
    </div>
  );
}

export default Header;
