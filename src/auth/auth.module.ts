import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from '../Services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { constants } from '../Config/conf';
import { User, UserSchema } from 'src/Schemas/user.schema';
import { PermissionService } from 'src/Services/permissions.service';

@Module({
  controllers: [AuthController],
  imports: [
    MongooseModule.forRoot(constants.MONGODB_URI),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
      secret: constants.JWT_SECRET_KEY,
      signOptions: { expiresIn: constants.JWT_EXPIRE_IN },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    UserService,
    PermissionService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
