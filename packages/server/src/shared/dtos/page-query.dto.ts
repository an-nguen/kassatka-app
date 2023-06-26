import { IsNumber, Max, Min } from 'class-validator'

export class PageQueryDto {
  @IsNumber()
  @Min(0)
  public page: number = 0

  @IsNumber()
  @Min(0)
  @Max(1000)
  public pageSize: number = 0
}
