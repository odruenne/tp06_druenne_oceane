import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    Headers,
    UseGuards,
  } from '@nestjs/common';
  import { AuthService } from './auth.service';
  import { Public } from './decorators/public.decorator';
import { User } from 'src/users/interfaces/user.interface';
import { UsersService } from 'src/users/users.service';
import { UserDTO } from 'src/users/interfaces/userDTO.interface';
import { AuthGuard } from './auth.guard';
  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService, private userService: UsersService) {}
  
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) : Promise<string> {
      return this.authService.signIn(signInDto.login, signInDto.password);
    }
    
    // Besoin mais je gère après
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Headers('login') login: string): Promise<UserDTO> {
      return this.userService.getDataFromUser(login);
    }
  }