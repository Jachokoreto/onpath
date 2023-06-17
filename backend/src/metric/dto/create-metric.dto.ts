export class CreateMetricDto {
  employee_skill_id: number;

  metric: {
    name: string;
    description: string;
    type: string;
    value: number;
    weightage: number;
  };
}
