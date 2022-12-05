import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeController } from './Controllers/home.controller';
import { UserController } from './Controllers/user.controller';
import { TaskController } from './Controllers/task.controller';
import { HomeService } from './Services/home.service';
import { UserService } from './Services/user.service';
import { TaskService } from './Services/task.service';
import { PermissionService } from './Services/permissions.service';
import { FormatService } from './Services/format.service';
import { GithubService } from './Services/github.service';
import { GithubController } from './Controllers/github.controller';
import { NavigationService } from './Services/navigation.service';
import { NavigationController } from './Controllers/navigation.controller';
import { User, UserSchema } from './Schemas/user.schema';
import { Task, TaskSchema } from './Schemas/task.schema';
import { Github, GithubSchema } from './Schemas/github.schema';
import { constants } from './Config/conf';
import { FileController } from './Controllers/file.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(constants.MONGODB_URI),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Task.name, schema: TaskSchema },
      { name: Github.name, schema: GithubSchema },
    ]),
    AuthModule,
  ],
  controllers: [
    HomeController,
    UserController,
    TaskController,
    GithubController,
    NavigationController,
    FileController,
  ],
  providers: [
    HomeService,
    UserService,
    TaskService,
    FormatService,
    GithubService,
    NavigationService,
    PermissionService,
  ],
})
export class AppModule {}
