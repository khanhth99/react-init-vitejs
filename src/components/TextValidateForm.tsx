import { Typography } from 'antd';

export default function TextValidateForm({ text }: Record<string, string | undefined | '' | null>) {
  return text ? <Typography className="text-red-500 text-[12px]">{text}</Typography> : '';
}
