import { Controller, Get, UseGuards} from '@nestjs/common';
import { KibblesService } from './kibbles.service';
import { Kibbles } from './interfaces/kibbles.interface';
import { Public } from 'src/auth/decorators/public.decorator';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('kibbles')
export class KibblesController {
  constructor(private readonly kibblesService: KibblesService) {}

  //@Public()
  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<Kibbles[]> {
    return this.kibblesService.findAll();
  }
}