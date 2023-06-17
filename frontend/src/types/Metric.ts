export default interface Metric {
  id: number;
  name: string;
  description: string;
  type: string;
  value: number;
  weightage: number;
}
