# useDebounce

`lodash/debounce` 를 쉽게 사용할 수 있는 hook 입니다.

## Example

```ts
// 이 함수는 500ms 기준으로 debounce 됩니다.
const handleClick = useDebounce(() => {
  getV2Logger().log(schemaId, parameter);
}, 500);
```
