import { MongooseModule } from '@nestjs/mongoose';

export const mongoconnection: any = [MongooseModule.forRoot('mongodb://localhost:27017')]