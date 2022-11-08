import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button, Form, Input, Spin, Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';

import type { Todo } from '../api/todos';

export function formatDate(date: string) {
  return new Date(date).toLocaleString('id-ID');
}

const columns: ColumnsType<Todo> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (data) => <div>{formatDate(data)}</div>,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];

const submitTodo = async (data: Todo) => {
  const URL = 'http://localhost:3000/api/todos';
  const response = await axios.post(URL, {
    ...data,
  });

  if (!response.status) {
    throw new Error('An error has occured');
  }
  return response;
};

const getTodos = async () => {
  const URL = 'http://localhost:3000/api/todos';
  const response = await axios.get(URL);
  return response.data;
};

const Todos = () => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  const {
    data: todos,
    isLoading,
    isSuccess,
  } = useQuery(['todos'], getTodos, {
    staleTime: 20000, // 20s
    refetchInterval: 20000,
  });

  const mutation = useMutation({
    mutationFn: (todo: Todo) => submitTodo(todo),
    onMutate: async (newTodo) => {
      // mutation in-progress
      // use for : spinner, disabled form,etc

      // Optimistic Update :
      // 1. cancel any outgoing refetch
      await queryClient.cancelQueries(['todos']);

      // 2. snapshot the previous value
      const previousMessages = queryClient.getQueryData<Todo[]>(['todos']);

      // 3. optimistically update new value
      if (previousMessages) {
        const newMessageData = {
          ...newTodo,
          createdAt: new Date().toISOString(),
        };
        const finalMessages = [...previousMessages, newMessageData];
        queryClient.setQueryData(['todos'], finalMessages);
      }
      return { previousMessages };
    },
    onSettled: async (data, error: any) => {
      // mutation done --> success, error
      console.log(data, error);

      if (data) {
        // mutation success --> invalidate queries, clear error, reset form
        await queryClient.invalidateQueries(['todos']);
        form.resetFields();
      }

      if (error) {
        // mutation error --> set error message
      }
    },
    onError: async (_: any, _variables, context: any) => {
      // mutation done with error response
      if (context?.previousMessages) {
        queryClient.setQueryData<Todo[]>(['todos'], context.previousMessages);
      }
    },
    onSuccess: async () => {
      // mutation done with success response
      console.log('onSuccess');
    },
  });

  const tableData: Todo[] = todos;

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <Spin spinning />
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  const handleSubmit = () => {
    const todoPayload = form.getFieldsValue();
    mutation.mutate(todoPayload);
  };

  return (
    <div className="w-full">
      <div className="mx-auto max-w-3xl">
        <div className="mt-4">
          <Typography.Title level={2}>React Query Todo App</Typography.Title>
          <Typography.Text>Todo App using React Query</Typography.Text>
        </div>
        <Form form={form} onFinish={() => handleSubmit()} className="mt-8">
          <Form.Item
            name="title"
            rules={[
              {
                required: true,
                message: 'Title is required',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            rules={[
              {
                required: true,
                message: 'Description is required',
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Button block htmlType="submit">
            Add todo
          </Button>
        </Form>
        <div>
          {isSuccess && (
            <Table
              className="mt-8 w-full"
              tableLayout="fixed"
              columns={columns}
              dataSource={tableData}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Todos;
