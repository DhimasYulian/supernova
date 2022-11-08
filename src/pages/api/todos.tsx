import type { NextApiRequest, NextApiResponse } from 'next';

type Status = {
  status: 'todo' | 'inProgress' | 'completed';
};

export interface Todo {
  id?: string;
  createdAt?: string;
  title: string;
  description: string;
  status?: Status;
}

interface TodoStatus {
  id: string;
  status: Status;
}

// temporary db
let messages: Todo[] = [];

const addTodo = (data: Todo): Todo[] => {
  const preData = {
    id: messages.length + 1,
    createdAt: new Date().toISOString(),
    status: 'waiting',
  };
  const objData = typeof data === 'string' ? JSON.parse(data) : data;
  const finalData = { ...preData, ...objData };
  messages = [...messages, finalData];
  return [finalData];
};

const updateStatus = (data: TodoStatus) => {
  const find = messages.map((msg) => {
    const tempMsg = { ...msg };
    if (msg.id === data.id) {
      tempMsg.status = data.status;
    }
    return msg;
  });
  messages = find;
  return [
    {
      id: data.id,
      status: data.status,
    },
  ];
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let response: Todo[] | TodoStatus[] = [];
  switch (req.method) {
    case 'GET':
      response = messages;
      break;

    case 'POST':
      response = addTodo(req.body);
      break;

    case 'PUT':
      response = updateStatus(req.body);
      break;

    default:
      break;
  }

  setTimeout(() => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(response));
  }, 2000);
  // res.statusCode = 400;
  // res.end("Bad Request");
}
