import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { UserInterface } from '../Interfaces/interfaces';
import { AccountDto } from '../dto/account.dto';
import { UserDto } from '../dto/user.dto';
import { User, UserDocument } from '../Schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PermissionService } from './permissions.service';
import { constants } from 'src/Config/conf';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private permissionService: PermissionService,
  ) {}

  async createOne(userDto: UserDto): Promise<UserInterface> {
    const defaultRole = {
      name: 'user',
      permissions: this.permissionService.userPermissions(),
    };

    const newUser: UserInterface = {
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      email: userDto.email,
      password: userDto.password,
      job: 'no job set',
      description: 'You can enter a description for your profile',
      photo: `${constants.API_ENDPOINT}/medias/avatars/default.jpg`,
      role: userDto.role ?? defaultRole,
    };

    const createdUser = new this.userModel(newUser);

    createdUser.save();

    return {
      id: createdUser.id,
      firstName: createdUser.firstName,
      lastName: createdUser.lastName,
      email: createdUser.email,
      job: createdUser.job,
      description: createdUser.description,
      photo: createdUser.photo,
      role: createdUser.role,
    };
  }

  async findAll(): Promise<UserInterface[]> {
    const users: UserDocument[] = await this.userModel.find().exec();

    return users.map((user) => {
      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        job: user.job,
        description: user.description,
        photo: user.photo,
        role: user.role,
      };
    });
  }

  async findOneById(userId: string): Promise<UserInterface> {
    const user: UserDocument = await this.userModel
      .findOne({ _id: userId })
      .exec();

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      job: user.job,
      description: user.description,
      photo: user.photo,
      role: user.role,
    };
  }

  async findOneByAccount(accountDto: AccountDto): Promise<UserInterface> {
    const account: UserDocument = await this.userModel
      .findOne({ email: accountDto.email, password: accountDto.password })
      .exec();

    if (account) {
      return {
        id: account.id,
        firstName: account.firstName,
        lastName: account.lastName,
        email: account.email,
        job: account.job,
        description: account.description,
        photo: account.photo,
        role: account.role,
      };
    } else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  async updateOne(userDto: UserDto): Promise<UserInterface> {
    const user: UserDocument = await this.userModel
      .findOne({ _id: userDto.id })
      .exec();

    if (userDto.hasOwnProperty('firstName')) {
      user.firstName = userDto.firstName;
    }

    if (userDto.hasOwnProperty('lastName')) {
      user.lastName = userDto.lastName;
    }

    if (userDto.hasOwnProperty('email')) {
      user.email = userDto.email;
    }

    if (userDto.hasOwnProperty('job')) {
      user.job = userDto.job;
    }

    if (userDto.hasOwnProperty('description')) {
      user.description = userDto.description;
    }

    if (userDto.hasOwnProperty('role')) {
      user.role = userDto.role;
    }

    if (userDto.hasOwnProperty('photo')) {
      user.photo = userDto.photo;
    }

    user.save();

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      job: user.job,
      description: user.description,
      email: user.email,
      photo: user.photo,
      role: user.role,
    };
  }

  async deleteOne(userId: string): Promise<UserInterface> {
    const result = await this.userModel.deleteOne({ _id: userId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('User could not be found!');
    }
    return null;
  }

  storeImage(file, user: UserInterface): void {
    // write image in folder
  }
}
