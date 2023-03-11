import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoticeDto } from '../DTOs/noticeDto.dto';
import { FacultyInfo } from '../Entitys/facultyInfo.entity';
import { FacultyNotice } from '../Entitys/facultyNotice.entity';

@Injectable()
export class NoticeService {
  mailerService: any;
  constructor(
    @InjectRepository(FacultyNotice)
    private NoticeRepo: Repository<FacultyNotice>,
    @InjectRepository(FacultyInfo)
    private facultyRepo: Repository<FacultyInfo>,
  ) {}

  getNotice(): any {
    return this.NoticeRepo.find();
  }
  
  insertNotice(noticedto: NoticeDto): any {
    return this.NoticeRepo.save(noticedto);
  }

  updateNotice(noticedto, id): any {
    return this.NoticeRepo.update(id, noticedto);
  }

  updateNoticeById(noticedto, id): any {
    return this.NoticeRepo.update(id, noticedto);
  }

  deleteNotice(id): any {
    return this.NoticeRepo.delete(id);
  }

  async sendEmail(mydata) {
    return await this.mailerService.sendMail({
      from: 'kfahim2280@gmail.com',
      to: 'iftekharasef18@gmail.com',
      subject: mydata.subject,
      text: mydata.text,
    });
  }
}


