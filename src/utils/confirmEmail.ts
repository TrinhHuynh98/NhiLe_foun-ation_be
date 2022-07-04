import {v4} from 'uuid';
import { redis } from 'src/redis';
import { ConfigService } from '@nestjs/config';

export const confirmEmail = async(userId:Number) =>{
    const c = new ConfigService();
    const id = v4();

    await redis.set(id, userId, 'ex', 60 * 60 * 15);

    console.log("LOCALHOST",c.get('LOCALHOST'))

    return `${c.get('LOCALHOST')}user/confirm/${id}`
}


