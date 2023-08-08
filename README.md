## First node API - HTTP package
Rest API using only from native nodejs packages

node version require > v16 (LTS)

```bash
npm run dev
```

GET
`http://localhost:3333/todos`

POST
`http://localhost:3333/todos`
```json 
{
	"title": "title",
	"description": "description"
}
```

PUT
`http://localhost:3333/todos/${ID-UUID}`
```json 
{
	"title": "titl2e",
	"description": "description"
}
```

DELETE
`http://localhost:3333/todos/${ID-UUID}`
