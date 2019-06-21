export interface IBaseAction<Type = string, Payload = object> {
  type: Type
  payload?: Payload
}
