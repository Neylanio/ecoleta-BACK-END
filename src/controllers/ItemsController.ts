import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
        
        const serializeditems = items.map(item => { 
            return{
                id: item.id,
                title: item.title,
                // image_url: `http://192.168.100.8:3333/uploads/${item.image}`
                image_url: `https://e-coleta-backend.herokuapp.com/uploads/${item.image}`
            }
        });
    
        return response.json(serializeditems);
    }

    async show(request: Request, response: Response){
        const { id } = request.params;

        const items = await knex('items').where('id', Number(id)).first();

        return response.json(items) ? items != null : response.status(400).json({message: 'Item not found'});

    }

}

export default ItemsController;