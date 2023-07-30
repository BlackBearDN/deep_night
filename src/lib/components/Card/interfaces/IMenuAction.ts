export default interface IMenuAction {
  label: string;
  handler: (...attrs: any) => any;
  disabled?: boolean;
}
