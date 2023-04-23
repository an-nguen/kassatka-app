import { Test, TestingModule } from '@nestjs/testing';
import { KassatkaApiService } from './kassatka-api.service';

describe('KassatkaApiService', () => {
  let service: KassatkaApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KassatkaApiService],
    }).compile();

    service = module.get<KassatkaApiService>(KassatkaApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
