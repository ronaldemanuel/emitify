import { Component, inject } from '@angular/core';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ClientService } from '../../services/client/client.service';
import { AuthService } from '../../services/auth/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzListModule,
    NzTypographyModule,
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent {
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({});
  listOfClients: Array<{ id: number; client: string }> = [];

  data: { name: string }[] = [];

  constructor(
    private clientService: ClientService,
    private authService: AuthService,
    private message: NzMessageService
  ) {}

  async ngOnInit(): Promise<void> {
    this.addField();
    this.data = await this.getClients();
  }

  addField(e?: MouseEvent): void {
    e?.preventDefault();

    const id =
      this.listOfClients.length > 0
        ? this.listOfClients[this.listOfClients.length - 1].id + 1
        : 0;

    const newClient = { id, client: '' };
    this.listOfClients.push(newClient);

    this.validateForm.addControl(
      `client${id}`,
      this.fb.control('', Validators.required)
    );
  }

  removeField(i: number, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfClients.length > 1) {
      const index = this.listOfClients.findIndex((client) => client.id === i);
      if (index !== -1) {
        this.listOfClients.splice(index, 1);
        this.validateForm.removeControl(`client${i}`);
        this.validateForm.updateValueAndValidity();
      }
    }
  }

  async submitForm() {
    if (this.validateForm.valid) {
      const messageId = this.startLoadingMessage();

      const session = await this.authService.getSession();
      const userId = session?.user.id;

      const clients = this.listOfClients.map((client, index) => ({
        name: this.validateForm.get(`client${client.id}`)?.value || '',
        user_id: userId,
        value: null,
      }));

      await this.clientService.addClients(clients);
      this.message.remove(messageId);
      this.startSuccessMessage();
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        const formControl = control as FormControl;
        formControl.markAsDirty();
        formControl.updateValueAndValidity({ onlySelf: true });
      });
    }
  }

  async getClients() {
    const session = await this.authService.getSession();
    const userId = session?.user.id;

    return this.clientService.getClientsByUserId(userId!);
  }

  startLoadingMessage(): string {
    const id = this.message.loading('Salvando...', {
      nzDuration: 0,
    }).messageId;

    return id;
  }

  startSuccessMessage(): void {
    this.message.create(
      'success',
      `${this.listOfClients.length} clientes salvos com sucesso!`
    );
  }

  startInfoMessage(): void {
    this.message.info('edit');
  }
}
