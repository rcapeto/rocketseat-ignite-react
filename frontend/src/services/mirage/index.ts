import { createServer, Factory, Model, Response } from 'miragejs';
import faker from '@faker-js/faker';

type User = {
   name: string;
   email: string;
   created_at: string;
};

export function makeServer() {
   const server = createServer({
      models: {
         user: Model.extend<Partial<User>>({}),
      },
      factories: {
         user: Factory.extend({
            name(i: number) {
               return `User ${i + 1}`;
            },
            email() {
               return faker.internet.email().toLowerCase();
            },
            createdAt() {
               return faker.date.recent(10);
            },
         }),
      }, //gerar dados em massa
      seeds(server) {
         //1- nome do factory  2- quantos
         server.createList('user', 200);
      },
      routes() {
         this.namespace = 'api';
         this.timing = 750;

         this.get('/users', async (schema, request) => {
            const { page = 1, per_page = 10 } = request.queryParams;
            const users_data = schema.all('user');
            const total = users_data.length;

            const pageStart = (Number(page) - 1) * Number(per_page);
            const pageEnd = pageStart + Number(per_page);

            const users = users_data.slice(pageStart, pageEnd).models;

            const headers = { 'x-total-count': String(total) };
            
            return new Response(200, headers, { users });
         });
         
         this.get('/users/:id');
         this.post('/users');

         this.namespace = ''; //resetando para não atrapalhar o /api do next.
         this.passthrough(); //utilizar em next.
      }
   });

   return server;
}

/**
 * CRUD
 * - Create
 * - Read
 * - Update
 * - Delete
 * 
 */