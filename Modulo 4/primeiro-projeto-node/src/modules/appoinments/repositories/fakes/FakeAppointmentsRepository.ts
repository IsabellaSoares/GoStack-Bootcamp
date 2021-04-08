import { uuid } from 'uuidv4';

import IAppointmentsRepository from '@modules/appoinments/repositories/IAppointmentRepository';
import ICreateAppointmentDTO from '@modules/appoinments/dtos/ICreateAppointmentDTO';

import Appointment from '@modules/appoinments/infra/typeorm/entities/Appoitment';

class FakeAppointmentsRepository implements IAppointmentsRepository {
  private appoinments: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = this.appoinments.find(
      appointment => appointment.date === date,
    );

    return findAppointment;
  }

  public async create({
    date,
    provider_id,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appoinment = new Appointment();

    Object.assign(appoinment, { id: uuid(), date, provider_id });

    this.appoinments.push(appoinment);

    return appoinment;
  }
}

export default FakeAppointmentsRepository;
