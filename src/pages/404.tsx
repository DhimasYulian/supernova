import { Result } from 'antd';

const Custom404 = () => {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    </div>
  );
};

export default Custom404;
