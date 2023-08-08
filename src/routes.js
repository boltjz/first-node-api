import crypto from 'crypto';

const todos = [];

export const routes = [
  {
    method: "GET",
    path: buildRoute("/todos"),
    handler: (req, res) => {
      return res
        .setHeader("Content-type", "application/json")
        .end(JSON.stringify(todos));
    },
  },
  {
    method: "POST",
    path: buildRoute("/todos"),
    handler: (req, res) => {
      todos.push({
        id: crypto.randomUUID(),
        ...req.body
      });

      return res.writeHead(201).end();
    },
  },
  {
    method: "PUT",
    path: buildRoute("/todos/:id"),
    handler: (req, res) => {
      const { id } = req.params;
      const index = todos.findIndex((row) => row.id === id);

      if (index > -1) {
        todos[index] = { id, ...req.body };
      }

      return res.writeHead(204).end();
    },
  },
  {
    method: "DELETE",
    path: buildRoute("/todos/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      const index = todos.findIndex(row => row.id === id)

      if (index > -1) {
        todos.splice(index, 1)
      }

      return res.writeHead(204).end();
    },
  },
];


export function buildRoute(path) {
  const routeParams = /:([a-zA-Z]+)/g
  const params = path.replaceAll(routeParams, '(?<$1>[a-z0-9\-_]+)')

  return new RegExp(`^${params}(?<query>\\?(.*))?$`)
}
