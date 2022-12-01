import { Injectable, NotFoundException } from '@nestjs/common';
import { GithubInterface } from 'src/Interfaces/interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Github, GithubDocument } from 'src/Schemas/github.schema';
import { GithubDto } from '../dto/githubDto';

@Injectable()
export class GithubService {
  constructor(
    @InjectModel(Github.name) private githubModel: Model<GithubDocument>,
  ) {}

  async createOne(githubDto: GithubDto): Promise<GithubInterface> {
    const createdGithub: GithubDocument = new this.githubModel(githubDto);
    createdGithub.save();

    return {
      id: createdGithub.id,
      user: createdGithub.user,
      owner: createdGithub.owner,
      repository: createdGithub.repository,
      branch: createdGithub.branch,
      enabled: createdGithub.enabled,
      token: createdGithub.token,
      committer: createdGithub.committer,
    };
  }

  async findOneByUserId(userId: string): Promise<GithubInterface> {
    const github: GithubDocument = await this.githubModel
      .findOne({ user: userId })
      .exec();
    if (github) {
      return {
        id: github.id,
        user: github.user,
        owner: github.owner,
        repository: github.repository,
        branch: github.branch,
        enabled: github.enabled,
        token: github.token,
        committer: github.committer,
      };
    } else {
      throw new NotFoundException('Github could not be found !');
    }
  }

  async updateOne(githubDto: GithubDto): Promise<GithubInterface> {
    const githubToUpdate: GithubDocument = await this.githubModel
      .findOne({ user: githubDto.user })
      .exec();

    if (githubDto.hasOwnProperty('owner')) {
      githubToUpdate.owner = githubDto.owner;
    }

    if (githubDto.hasOwnProperty('repository')) {
      githubToUpdate.repository = githubDto.repository;
    }

    if (githubDto.hasOwnProperty('branch')) {
      githubToUpdate.branch = githubDto.branch;
    }

    if (githubDto.hasOwnProperty('token')) {
      githubToUpdate.token = githubDto.token;
    }

    if (githubDto.hasOwnProperty('enabled')) {
      githubToUpdate.enabled = githubDto.enabled;
    }

    if (githubDto.hasOwnProperty('committer')) {
      githubToUpdate.committer = githubDto.committer;
    }

    githubToUpdate.save();

    return {
      id: githubToUpdate.id,
      user: githubToUpdate.user,
      owner: githubToUpdate.owner,
      repository: githubToUpdate.repository,
      branch: githubToUpdate.branch,
      token: githubToUpdate.token,
      enabled: githubToUpdate.enabled,
      committer: githubToUpdate.committer,
    };
  }
}
