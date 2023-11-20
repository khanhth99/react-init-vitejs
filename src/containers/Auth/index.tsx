import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Input, Row, Spin, Typography } from 'antd';
import { Card } from 'antd';
import TextValidateForm from '@components/TextValidateForm';
import React from 'react';
import validation from './validation';
import Page from '@components/Page';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { loginService } from './api';

const { Title } = Typography;
const Auth: React.FC = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: loginService,
    onSuccess: (response) => {
      localStorage.setItem('token', response.data.token);
      navigate('/');
    },
    onError: () => {
      alert('Login failed!');
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation.loginForm),
    defaultValues: {
      remember: false,
    },
  });

  const onSubmit = async (data: any) => {
    localStorage.setItem('token', 'adadad');
    mutate({
      ...data,
    });
  };

  return (
    <Page title="Login">
      <div className="flex justify-center">
        <img className="w-[250px]" src="/image/logo.png" alt="" />
      </div>
      <div className="flex justify-center">
        <Title level={4}>Welcome back!</Title>
      </div>
      <Card className="w-[500px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row gutter={[16, 16]}>
            <Col md={24}>
              <Title className="pb-3 text-center" level={5}>
                Sign in with credentials
              </Title>
            </Col>
            <Col md={24}>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Input {...field} size="large" placeholder="Username" prefix={<UserOutlined />} />
                )}
              />
              <TextValidateForm text={errors.username?.message} />
            </Col>
            <Col md={24}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    placeholder="Password"
                    type="password"
                    prefix={<LockOutlined />}
                  />
                )}
              />
              <TextValidateForm text={errors.password?.message} />
            </Col>
            <Col md={24}>
              <Row justify="space-between">
                <Col md={12}>
                  <Controller
                    name="remember"
                    control={control}
                    render={({ field }) => (
                      <Checkbox {...field} checked={field.value}>
                        Remember me
                      </Checkbox>
                    )}
                  />
                </Col>
                <Col md={12} className="flex justify-end">
                  <Typography className="text-blue-400">Forgot password?</Typography>
                </Col>
              </Row>
            </Col>
            <Col md={24} className="flex justify-center">
              {isPending ? (
                <Button className="w-[100px] bg-blue-400">
                  <Spin
                    indicator={
                      <LoadingOutlined
                        style={{
                          fontSize: 24,
                        }}
                        spin
                      />
                    }
                  />
                </Button>
              ) : (
                <Button className="w-[100px]" type="primary" htmlType="submit">
                  Sign in
                </Button>
              )}
            </Col>
          </Row>
        </form>
      </Card>
    </Page>
  );
};

export default Auth;
