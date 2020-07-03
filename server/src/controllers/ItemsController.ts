import { Request, Response } from 'express';
import knex from '../database/conncetion';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                //image_url: `http://localhost:3333/uploads/${item.image}`, -> Desktop
                image_url: `http://10.0.0.107:3333/uploads/${item.image}`, //-> Mobile
            }
        })
        return response.json(serializedItems);
    }
}

export default ItemsController;