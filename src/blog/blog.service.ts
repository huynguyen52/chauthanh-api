import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) {}
  create(createBlogInput: CreateBlogInput) {
    const blog = this.blogRepository.create(createBlogInput);
    return this.blogRepository.save(blog);
  }

  findAll() {
    return this.blogRepository.find();
  }

  findOne(id: string) {
    return this.blogRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateBlogInput: UpdateBlogInput) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
