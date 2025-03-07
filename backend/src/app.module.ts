import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { MenuModule } from './modules/menu/menu.module';
import { LocationModule } from './modules/location/location.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ResturantModule } from './modules/resturant/resturant.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    UsersModule,
    AuthModule,
    MenuModule,
    LocationModule,
    OrdersModule,
    ResturantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
