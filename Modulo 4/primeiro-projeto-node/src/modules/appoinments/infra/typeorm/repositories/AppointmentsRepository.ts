import { getRepository, Repository } from 'typeorm';

import IAppointmentsRepository from '@modules/appoinments/repositories/IAppointmentRepository';
import ICreateAppointmentDTO from '@modules/appoinments/dtos/ICreateAppointmentDTO';

import Appointment from '@modules/appoinments/infra/typeorm/entities/Appoitment';

class AppointmentsRepository implements IAppointmentsRepository {
  private ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    });

    return findAppointment;
  }

  public async create({
    date,
    provider_id,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appoinment = this.ormRepository.create({ provider_id, date });

    await this.ormRepository.save(appoinment);

    return appoinment;
  }
}

export default AppointmentsRepository;
