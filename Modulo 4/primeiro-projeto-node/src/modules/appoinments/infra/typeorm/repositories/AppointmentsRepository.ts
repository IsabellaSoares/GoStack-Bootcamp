import { EntityRepository, Repository } from 'typeorm';

import IAppointmentsRepository from '@modules/appoinments/repositories/IAppointmentRepository';

import Appointment from '@modules/appoinments/infra/typeorm/entities/Appoitment';

@EntityRepository(Appointment)
class AppointmentsRepository
  extends Repository<Appointment>
  implements IAppointmentsRepository {
  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment;
  }
}

export default AppointmentsRepository;