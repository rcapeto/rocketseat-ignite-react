import { createServer, Factory, Model } from 'miragejs';
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
         server.createList('user', 10);
      },
      routes() {
         this.namespace = 'api';
         this.timing = 750;

         this.get('/users');
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